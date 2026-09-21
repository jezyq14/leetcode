/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    const unique = Array.from(new Set(nums));

    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }

    return unique.length;
}
// @lc code=end
