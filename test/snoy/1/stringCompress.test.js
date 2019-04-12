const assert = require("assert");
const compress = require("../../../snoy/1/stringCompress");
describe("snoy/1/stringCompress.js", function() {
  describe("stringCompress", function() {
    // * aabcccccaaa  => a2b1c5a3
    // * abc => abc
    // * abbbccccc => a1b3c4
    it("should return a2b1c5a3 when the string is aabcccccaaa", function() {
      assert.equal(compress("aabcccccaaa"), "a2b1c5a3");
    });
    it("should return abc when the string is abc", function() {
      assert.equal(compress("abc"), "abc");
    });
    it("should return a1b3c14 when the string is abbbccccc", function() {
      assert.equal(compress("abbbccccc"), "a1b3c5");
    });
  });
});
