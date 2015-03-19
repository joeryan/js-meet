
describe("vending machine operation", function() {

  var subject;

  beforeEach(function() {
    subject = VendingMachine.create();
  });

  it("dispalay someting", function() {
    expect(subject.display()).toBe("INSERT COIN");
  });


  it("displays values for known coins", function() {
	expectCoinDisplays("NICKEL", "0.05");
	expectCoinDisplays("DIME", "0.10");
	expectCoinDisplays("QUARTER", "0.25");
    });

    it("rejects invalid coins", function() {
	expectCoinDisplays("SHEKEL", "INVALID COIN");
    });

  function expectCoinDisplays(coin, display) {
	subject.insertCoin(coin);
	expect(subject.display()).toBe(display);
    }

  
});

