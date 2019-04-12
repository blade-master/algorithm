const assert = require("assert");
const onEditAway =require("../../../snoy/1/oneAway");
describe("snoy/1/oneAway.js", function() {
  describe("onEditAway", function() {
    // * pale, ple => true
    // * pale, ale =>true
    // * pales, pale => true
    // * pale, bale =>true
    // * pale, pate =>true
    // * pale, bae => false
    // * pale, al => false
    // * 只能修改一个字符，替换或者添加或者删除
    it("should return true when the two string is pale and ple", function() {
      assert.equal(onEditAway("pale", "ple"), true);
    });
    it("should return true when the two string is pale and ale", function() {
      assert.equal(onEditAway("pale", "ale"), true);
    });
    it("should return true when the two string is pales and pale", function() {
      assert.equal(onEditAway("pales", "pale"), true);
    });
    it("should return true when the two string is pale and bale", function() {
      assert.equal(onEditAway("pale", "bale"), true);
    });
    it("should return true when the two string is pale and pate", function() {
      assert.equal(onEditAway("pale", "pate"), true);
    });
    it("should return false when the two string is pale and bae", function() {
      assert.equal(onEditAway("pale", "bae"), false);
    });
    it("should return false when the two string is pale and al", function() {
        assert.equal(onEditAway("pale", "al"), false);
      });
  });
});

console.log(onEditAway("pale", "ple"));
