// array
let temperatures: number[]
temperatures = [20, 18, 22, 12]
temperatures.push(18)
console.log(temperatures) // logs [20, 18, 22, 12, 18]

// enum
enum Direction {
  East = "EAST",
  West = "WEST",
  South = "SOUTH",
  North = "NORTH",
}
const direction = Direction.East
console.log(direction) // logs "EAST"

// tuple
let currentWeather: [string, number, Direction]
currentWeather = ['sunny', 22, Direction.South]
const isSunny = currentWeather[0] === 'sunny'