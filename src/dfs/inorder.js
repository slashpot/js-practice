export function inorder(root) {
    const output = [];
    const stack = [];
    let cur = root;
    while(cur !== null || stack.length !== 0) {
        while(cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }

        cur = stack.pop();
        output.push(cur.val);
        cur = cur.right;
    }
    return output;
}

