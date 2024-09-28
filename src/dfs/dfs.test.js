import {test, expect} from "vitest";
import {inorder} from "./inorder.js";
import {TreeNode} from "./treeNode.js";

//     1
//    / \
//   2   3
//  / \   \
// 4   5   6

test('DFS inorder', () => {
    const tree = new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, null, new TreeNode(6))
    )
    expect(inorder(tree)).toEqual([4,2,5,1,3,6])
})