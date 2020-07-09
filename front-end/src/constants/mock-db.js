function randLoremPicsum() {
    const seed = Math.floor(Math.random() * 100)
    return `https://picsum.photos/seed/${seed}/100/100`
}

export const db_players = [
    { firstName: 'Dom', lastName: 'Eorio', position: 'President', avatar: randLoremPicsum() },
    { firstName: 'Matt', lastName: 'Hone', position: 'Vice President', avatar: randLoremPicsum() },
    { firstName: 'Nick', lastName: 'Petho', position: 'Nerd', avatar: randLoremPicsum() },
    { firstName: 'Luke', lastName: 'FromCafaro', position: 'CONST: fuck_that_bitch', avatar: randLoremPicsum() }
]
