/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const values: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        const intVal = values[s[i]];
        const nextVal = i + 1 < s.length ? values[s[i + 1]] : 0;

        if (intVal < nextVal) res -= intVal;
        else res += intVal;
    }

    return res;
}
// @lc code=end
