export function preorder(root) {
    const stack = [root];
    const output = [];

    while(stack.length !== 0) {
        const cur = stack.pop();
        output.push(cur.val);
        if(cur.right) {
            stack.push(cur.right)
        }
        if(cur.left) {
            stack.push(cur.left)
        }

    }
    return output;
}