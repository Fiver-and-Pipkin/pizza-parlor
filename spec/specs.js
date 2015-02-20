describe('Pizza', function() {
  describe('inches', function() {
    it("registers the customer's order in inches", function() {
      var testPizza = Object.create(Pizza);
      testPizza.inches(14);
      expect(testPizza.numSlices).to.equal(14);
    });
  });

  describe("topping", function() {
    it("gives a discount for avoiding meat", function() {
      var testPizza = Object.create(Pizza);
      testPizza.topping(18);
      expect(testPizza.numSlices).to.equal(23);
    });
  });
});
