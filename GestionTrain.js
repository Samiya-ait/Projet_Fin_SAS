const prompt = require("prompt-sync")();
let Quit = true;
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


const tickets = [{
    id: 1,
    passengerName: "Ahmed",
    tripId: 3,
    seatNumber: 1,
    price: 90
}];



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

// while (Quit === true) {
//     Menu();
//     let choix = Number(prompt("Votre Choix: "));
//     switch (choix) {
//         case 1:
//             AffTrajet();
//             break;
//         case 2:
//             Acheter();
//             break;
//         case 3:
//             AfficherTickets();
//             break;
//         case 4:
//             Annuler();
//             break;
//         case 5:
//             Rechercher();
//             break;
//         case 6:
//             Filtret();
//             break;
//         case 7:
//             Trier();
//             break;
//         case 0:
//             Quitter();
//     }
// }

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

passengerName = prompt("Nom du passager: ");
tripId = Number(prompt("Identifiant du trajet: "));

function TrajetExist(IndexTripId) {
    for (let trip of trips) {
        if (trip.id === IndexTripId) {
            if (trip.availableSeats > 0) {
                return trip.id - 1
            } else {
                return -1; // trajet existe ms place indisponible
            }
        }
    }
    return undefined; // non non
}

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
            passengerName: passengerName = prompt("Nom du passager: "),
            tripId: IndexTripId + 1,
            seatNumber:SeatNum,
            price: ticket.price ,
        }
        tickets.push(ticket);
    }
}







function Acheter() {

}
















