/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    const sortedByLength = strs.sort((a, b) => a.length - b.length);
    const shortest = sortedByLength[0];

    let output = "";
    for (let i = 0; i < shortest.length; i++) {
        const current = shortest[i];
        if (strs.filter((x) => x[i] == current).length == strs.length)
            output += current;
        else return output;
    }

    return output;
}
// @lc code=end
