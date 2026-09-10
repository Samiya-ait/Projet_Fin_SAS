const prompt = require("prompt-sync")();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    }
];


const tickets = [
    {
        id: 1,
        passengerName: "Ahmed",
        tripId: 3,
        seatNumber: 1,
        price: 140
    },
    {
        id: 2,
        passengerName: "samiya",
        tripId: 2,
        seatNumber: 1,
        price: 90
    },
    {
        id: 3,
        passengerName: "hassan",
        tripId: 1,
        seatNumber: 1,
        price: 25
    },

    {
        id: 4,
        passengerName: "hassan",
        tripId: 2,
        seatNumber: 30,
        price: 90
    },

];



function Menu() {
    console.log(`
=================================
RAILWAY MANAGER
=================================
1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter
        `)
}

let Quit = true;
while (Quit === true) {
    Menu();
    let choix = Number(prompt("Votre Choix: "));
    switch (choix) {
        case 1:
            AffTrajet();
            break;
        case 2:
            let tripId = Number(prompt("Identifiant du trajet: "));
            Acheter(tripId);
            break;
        case 3:
            AfficherTickets();
            break;
        case 4:
            let IdTicket = Number(prompt("Identifiant du ticket: "));
            Annuler(IdTicket);
            break;
        case 5:
            let PassName = prompt("Nom du passager : ");
            Rechercher(PassName);
            break;
        case 6:
            let Depart = prompt("Ville de départ :");
            Filtrer(Depart);
            break;
        case 7:
            Trier();
            break;
        case 0:
            Quitter();
    }
}

function Quitter() {
    Quit = false;
    console.log("Quitter le programme.")
}

function AffTrajet() {
    console.log("=== TRAJETS DISPONIBLES ===")
    for (const trip of trips) {
        console.log(`
#${trip.id} ${trip.departure} → ${trip.destination}
Départ : ${trip.departureTime}
Arrivée : ${trip.arrivalTime}
Prix : ${trip.price} DHs
Places disponibles : ${trip.availableSeats}
            `)
    }
}

// 1 verify trajet & find index of trip
function TrajetExist(TripId) {
    for (let trip of trips) {
        if (trip.id === TripId) {
            if (trip.availableSeats > 0) {
                return trip.id - 1
            } else {
                return -1; // trajet existe ms place indisponible
            }
        }
    }
    return undefined; // none
}
// 2  create ticket 
function CreateTicket(IndexTripId) {
    if (IndexTripId === undefined) {
        console.log("Trajet introuvable.")
    } else if (IndexTripId === -1) {
        console.log("Train complet.")
    } else {
        let ticketId;
        let SeatNum;
        if (tickets.length === 0) {
            ticketId = 1;
            SeatNum = 1;
        } else {
            ticketId = tickets[tickets.length - 1].id + 1;
            SeatNum = tickets[tickets.length - 1].seatNumber + 1;
        }

        let ticket = {
            id: ticketId,
            passengerName: prompt("Nom du passager: "),
            tripId: IndexTripId + 1,
            seatNumber: SeatNum,
            price: tickets[IndexTripId].price,
        }

        tickets.push(ticket);
        trips[IndexTripId].availableSeats -= 1;

        console.log(`
    Ticket acheté avec succès.
    Ticket # ${ticket.id}
    Passager : ${ticket.passengerName}
    Trajet : ${trips[IndexTripId].departure} → ${trips[IndexTripId].destination}
    Place : ${ticket.seatNumber}
    Prix : ${ticket.price} DHs
            `)
    }
}

function Acheter(IndexTripId) {
    let index = TrajetExist(IndexTripId);
    CreateTicket(index);
}

function AfficherTickets() {
    if (tickets.length === 0) {
        console.log("Ticket Aucun ticket enregistré.")
    } else {
        console.log("=== TICKETS ===")
        for (const ticket of tickets) {
            console.log(`
    Ticket # ${ticket.id}
    Passager : ${ticket.passengerName}
    Trajet : ${trips[ticket.tripId - 1].departure} → ${trips[ticket.tripId - 1].destination}
    Place : ${ticket.seatNumber}
    Prix : ${ticket.price} DHs
            `)
        }
    }
}



function Annuler(IdTicket) {
    // rechercher et verifier l'existence d'un ticket:
    let trouve = false;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === IdTicket) {
            trips[tickets[i].tripId - 1].availableSeats++;
            tickets.splice(i, 1)
            console.log("ticket supprimé")
            trouve = true;
        }
    }
    if (!trouve) {
        console.log("Ticket introuvable.")
    }

}


function Rechercher(PassName) {
    let trouve = false;
    for (i = 0; i < tickets.length; i++) {
        if (PassName === tickets[i].passengerName) {
            trouve = true;
            console.log(`==ticket ${i + 1} ==`)
            console.log(`
            Ticket #${tickets[i].id}
            Passager : ${PassName}
            Trajet : ${trips[tickets[i].tripId - 1].departure} → ${trips[tickets[i].tripId - 1].destination}
            Place : ${tickets[i].seatNumber}
            Prix : ${tickets[i].price} DHs
                `)
        }
    }
    if (!trouve) {
        console.log("Ce nom n\'existe pas.")
    }
}



function Filtrer(Depart) {
    for (i = 0; i < trips.length; i++) {
        if (Depart === trips[i].departure) {
            console.log(`
            ${Depart} → ${trips[i].destination} : ${tickets[i].price} DHs
                `)
        }
    }
}













