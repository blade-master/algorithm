var assert = require("assert");

const permutation = require("../../../snoy/1/checkPermutation");
describe("snoy/1/checkPermutation.js", function() {
  describe("permutation", function() {
    it("should return true when the two string is not permutation", function() {
      assert.equal(permutation("s1o20", "s0o21"), true);
    });
    it("should return false when when the two string is  permutation", function() {
      assert.equal(permutation("s1o20", "s0o20"), false);
    });
    it("should return true when when the two string is  permutation", function() {
      assert.equal(permutation("s1o20", "s1o20"), true);
    });
  });
});
