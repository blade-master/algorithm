const assert = require("assert");
const compress = require("../../../snoy/1/uniqueChars");
describe("snoy/1/uniqueChars.js", function() {
  describe("uniqueChars", function() {
    it("should return false when the string is abcda", function() {
      assert.equal(compress("abcda"), false);
    });
    it("should return true when the string is abc", function() {
      assert.equal(compress("abc"), true);
    });
    it("should return false when the string is abbbccccc", function() {
      assert.equal(compress("abcefgb"), false);
    });
  });
});
