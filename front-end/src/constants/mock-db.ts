import {EmergencyContact, Player, Trip} from "../types";

function randLoremPicsum() {
    const seed = Math.floor(Math.random() * 100)
    return `https://picsum.photos/seed/${seed}/100/100`
}

export const db_players: Player[] = [
    { firstName: 'Dom', lastName: 'Eorio', position: 'President', avatar: randLoremPicsum() },
    { firstName: 'Matt', lastName: 'Hone', position: 'Vice President', avatar: randLoremPicsum() },
    { firstName: 'Nick', lastName: 'Petho', position: 'Nerd', avatar: randLoremPicsum() },
    { firstName: 'Luke', lastName: 'FromCafaro', position: 'CONST: fuck_that_bitch', avatar: randLoremPicsum() }
]

export const db_emergency_contacts: EmergencyContact[] = [
    { firstName: 'Deez', lastName: 'Nutz', phoneNumber: '(420) 420-6969' },
    { firstName: 'Hello There!', lastName: 'General Kenobi! You are a bold one', phoneNumber: '(420) 420-1337' }
]

export const db_trips: Trip[] = [
    { tripName: 'YSU @Gannon University', startDate: 'Ur', endDate: 'mom' },
    { tripName: 'YSU @Gannon University', startDate: 'Ur', endDate: 'mom' },
]
