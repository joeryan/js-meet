var VendingMachine = {
  create: function() {
     
      fucntion display() {
          return "INSERT COIN";
      }

      function insterCoin(coin) {
	  if (coin === "NICKEL") _display = "0.05";
	  if (coin === "DIME") _display = "0.10";
	  if (coin == "QUARTER") _display = "0.25";
      }

      return {
	  display: display,
	  insertCoin: insertCoin
      }
  }
}