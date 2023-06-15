

function RoomElectric(){
    this.powerOn = false;
    this.changePower = function(){
      this.powerOn = !this.powerOn
    }
  }
  
  function Lamp(){
    this.isLight = false;
    this.lightOn = function(){
      this.isLight = !this.isLight
    }
  }
  
  function Computer(){
    this.isButton = false;
    this.buttonOn = function(){
      this.isButton = !this.isButton
    }
  }
  
  Lamp.prototype = new RoomElectric()
  Computer.prototype = new RoomElectric()
  
  const lamp = new Lamp()
  const computer = new Computer()
  
  console.log(lamp)
  
  lamp.changePower()
  
  console.log(lamp)
  // console.log(computer)