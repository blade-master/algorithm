const assert = require("assert");
const isUniqueCharsProgress = require("../../../snoy/1/uniqueChars");
describe("snoy/1/uniqueChars.js", function() {
  describe("isUniqueCharsProgress", function() {
    it("should return false when the string is abcda", function() {
      assert.equal(isUniqueCharsProgress("abcda"), false);
    });
    it("should return true when the string is abc", function() {
      assert.equal(isUniqueCharsProgress("abc"), true);
    });
    it("should return false when the string is abbbccccc", function() {
      assert.equal(isUniqueCharsProgress("abcefgb"), false);
    });
  });
});
