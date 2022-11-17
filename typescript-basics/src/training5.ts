function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left")
  //printText("G'day, mate", "centerr") // Error
  // Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.