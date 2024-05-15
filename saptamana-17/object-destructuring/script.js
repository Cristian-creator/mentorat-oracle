// ------- Object Destructuring --------

const myEvent = {
    name: 'Tech Event',
    numberOfParticipants: 743,
    address: {
        city: 'Bucharest',
        street: 'Bulevardul Dacia',
        number: 84
    }
};

// ASA NU
const fullAddress = `Location: city - ${myEvent.address.city}, street - ${myEvent.address.street}, number - ${myEvent.address.number}`;

// ASA DA
const { city, street, number } = myEvent.address;

// Asta se intampla in spatele a ceea ce am scris mai sus, practic se creeaza 3 variabile noi carora li se atribuie
// ca valori proprietatile cu acelasi nume din obiectul myEvent.address
// const city = myEvent.address.city;
// const street = myEvent.address.street;
// const number = myEvent.address.number;

const fullAddress2 = `Location: city - ${city}, street - ${street}, number - ${number}`;

const { numberOfParticipants } = myEvent;
