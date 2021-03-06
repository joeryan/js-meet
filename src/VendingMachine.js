var VendingMachine = {
  create: function() {
      _display = "INSERT COIN";
      _coins = {"NICKEL": "0.05", "DIME": "0.10", "QUARTER": "0.25"}
      function display() {
          return _display;
      }

      function insertCoin(coin) {
	  if (_coins[coin])
	      _display = _coins[coin];
	  else _display = "INVALID COIN";
      }

      return {
	  display: display,
	  insertCoin: insertCoin
      }
  }
}