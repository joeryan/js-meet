
describe("vending machine operation", function() {

  var subject;

  beforeEach(function() {
    subject = VendingMachine.create();
  });

  it("dispalay someting", function() {
    expect(subject.display()).toBe("INSERT COIN");
  });

  xit("displays 0.05 when a NICKEL is inserted", function() {
    subject.insertCoin("NICKEL");
    expect(subject.display()).toBe("0.05");
  });

  xit("displays 0.10 when a DIME is inserted", function() {
    subject.insertCoin("DIME");
    expect(subject.display()).toBe("0.10");
  });

  xit("displays 0.10 when a QUARTER is inserted", function() {
    subject.insertCoin("QUATER");
    expect(subject.display()).toBe("0.25");
  });

  xit("displays values for known coins", function() {
	expectCoinDisplays("NICKEL", "0.05");
	expectCoinDisplays("DIME", "0.10");
	expectCoinDisplays("QUARTER", "0.25");
    });

  function expectCoinDisplays(coin, display) {
	subject.inssertCoin(coin);
	expect(subject.display()).toBe(display);
    }

  
});

