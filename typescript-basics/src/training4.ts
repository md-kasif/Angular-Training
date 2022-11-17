function printId(id: number | string) {
    console.log("Your ID is " + id)
  }
  printId(101) // logs "Your ID is 101"
  printId("202") // logs "Your ID is 202"
  //printId({ myID: 22342 }) // Error
  // Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
  // Type '{ myID: number; }' is not assignable to type 'number'.