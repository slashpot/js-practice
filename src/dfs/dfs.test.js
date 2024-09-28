import {test, expect, describe} from "vitest";
import {inorder} from "./inorder.js";
import {TreeNode} from "./treeNode.js";
import {preorder} from "./preorder.js";

//     1
//    / \
//   2   3
//  / \   \
// 4   5   6
const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(6))
)

describe('DFS', () => {
    test('DFS inorder', () => {
        expect(inorder(tree)).toEqual([4,2,5,1,3,6])
    })
    test('DFS preorder', () => {
        expect(preorder(tree)).toEqual([1,2,4,5,3,6])
    })
})

