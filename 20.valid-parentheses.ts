/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack = [];
    const map: Record<string, string> = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in map) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) return false;
        }
        console.log(stack);
    }

    return stack.length == 0;
}
// @lc code=end
