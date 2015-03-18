describe("vending", function() {
  var subject;

  beforeEach(function() {
    subject = VendingMachine.create();
  });

  it("dispalay someting", function() {
    expect(subject.display()).toBe("INSERT COIN");
  });

  it("displays 0.05 when a NICKEL is inserted", function() {
    subject.insertCoin("NICKEL");
    expect(subject.display()).toBe("0.05");
  });

  it("displays 0.10 when a DIME is inserted", function() {
    subject.insertCoin("DIME");
    expect(subject.display()).toBe("0.10");
  });

  it("displays 0.10 when a QUARTER is inserted", function() {
    subject.insertCoin("QUATER");
    expect(subject.display()).toBe("0.25");
  });

  
});

