interface Pingable {
    ping(): void
  }
  
  class Sonar implements Pingable {
    ping() {
      console.log("ping!")
    }
  }
  
  class Ball implements Pingable {
  //Class 'Ball' incorrectly implements interface 'Pingable'.
  //  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  ping(){
      console.log("ping from ball")
  }
    pong() {
      console.log("pong!")
    }
  }


  class Animal {
    move() {
      console.log("Moving along!")
    }
  }
  
  class Dog extends Animal {
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!")
      }
    }
  }
  
  const d = new Dog()
  d.move()// Base class method
  d.woof(3) // Derived class method