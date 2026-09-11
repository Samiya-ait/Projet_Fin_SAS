const prompt = require("prompt-sync")();

const Canceled = [];

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 49
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 48
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 49
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
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
        seatNumber: 2,
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

function Acheter(TripId) {
    // 1. Recherche trip in trips
    let tripIndex = undefined;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === TripId) {
            tripIndex = i;
        }
    }

    if (tripIndex === undefined) {
        console.log("Trajet introuvable.");
        return;
    }

    const currentTrip = trips[tripIndex];

    if (currentTrip.availableSeats <= 0) {
        console.log("Train complet.");
        return;
    }

    // 2. passenger name
    const passengerName = prompt("Nom du passager: ");

    // 3. Determine the new ticket ID
    let TicketId;

    if (tickets.length === 0) {
        TicketId = 1;
    } else {
        TicketId = tickets[tickets.length - 1].id + 1;
    }

    // 4. Search in Canceled[]
    let canceledIndex = undefined;

    for (let i = 0; i < Canceled.length; i++) {
        if (Canceled[i].tripId === currentTrip.id) {
            canceledIndex = i;
        }
    }

    // 5.  seat number
    let seatNumber;

    if (canceledIndex !== undefined) {
        seatNumber = Canceled[canceledIndex].seatNumber;
        Canceled.splice(canceledIndex, 1);
    } else {
        let totalSeats;
        if (currentTrip.totalSeats !== undefined) {
            totalSeats = currentTrip.totalSeats;
        } else {
            totalSeats = 50;
        }
        seatNumber = totalSeats - currentTrip.availableSeats + 1;
    }

    // 6. ticket obj
    let ticket = {
        id: TicketId,
        passengerName: passengerName,
        tripId: currentTrip.id,
        seatNumber: seatNumber,
        price: currentTrip.price
    };

    // 7. push ticket
    tickets.push(ticket);
    currentTrip.availableSeats = currentTrip.availableSeats - 1;

    // 8. affichage ticket
    console.log(`Ticket acheté avec succès.
Ticket # ${TicketId}
Passager : ${passengerName}
Trajet : ${currentTrip.departure} → ${currentTrip.destination}
Place : ${seatNumber}
Prix : ${currentTrip.price} DHs`);
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
            Canceled.push(tickets[i]);
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
            console.log(`==ticket ${i - 1} ==`)
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
        if (Depart.ToLowerCase() === trips[i].ToLowerCase().departure) {
            console.log(`
            ${Depart} → ${trips[i].destination} : ${tickets[i].price} DHs
                `)
        }
    }
}


function Trier() {
    let OTrip = [...trips];

    for (let i = 0; i < OTrip.length; i++) {
        for (let j = 0; j < OTrip.length - 1 - i; j++) {
            if (OTrip[j].price > OTrip[j + 1].price) {
                let a = OTrip[j];
                OTrip[j] = OTrip[j + 1];
                OTrip[j + 1] = a;
            }
        }
    }

    for (tr of OTrip) {
        console.log(`
            ${tr.departure} → ${tr.destination} : ${tr.price} DHs
            `)
    }
}










