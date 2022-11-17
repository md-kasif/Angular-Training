// array
var temperatures;
temperatures = [20, 18, 22, 12];
temperatures.push(18);
console.log(temperatures); // logs [20, 18, 22, 12, 18]
// enum
var Direction;
(function (Direction) {
    Direction["East"] = "EAST";
    Direction["West"] = "WEST";
    Direction["South"] = "SOUTH";
    Direction["North"] = "NORTH";
})(Direction || (Direction = {}));
var direction = Direction.East;
console.log(direction); // logs "EAST"
// tuple
var currentWeather;
currentWeather = ['sunny', 22, Direction.South];
var isSunny = currentWeather[0] === 'sunny';
