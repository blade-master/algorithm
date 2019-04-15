var assert = require("assert");

const sortedArrayToBST = require("../../../snoy/4/minimalTree");
describe("snoy/4/minimalTree.js", function() {
  describe("sortedArrayToBST", function() {
    it("should return true when the two string is not permutation", function() {
      let root = sortedArrayToBST([-10, -3, 0, 5, 9]);
      assert.equal(root.left.val, -3);
      assert.equal(root.left.left.val, -10);
      assert.equal(root.left.right, null);

      assert.equal(root.right.val, 9);
      assert.equal(root.right.left.val, 5);
      assert.equal(root.right.right, null);
    });
  });
});
