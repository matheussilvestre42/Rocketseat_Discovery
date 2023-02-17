const people = ['Raffa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())

console.log(upperCasePeopleThatStartsWithD)