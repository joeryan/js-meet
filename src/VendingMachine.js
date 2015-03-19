var VendingMachine = {
  create: function() {
     
      function display() {
          return "INSERT COIN";
      }

      function insertCoin(coin) {
	  _display = "0.05";
	  if (coin === "NICKEL") _display = "0.05";
	  if (coin === "DIME") _display = "0.10";
	  if (coin == "QUARTER") _display = "0.25";
	  return _display;
      }

      return {
	  display: display,
	  insertCoin: insertCoin
      }
  }
}