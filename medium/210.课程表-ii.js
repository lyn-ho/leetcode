/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 *
 * 拓扑排序
 *
 * 入度和出度
 *
 * BFS
 *  入度为 0 的课入列
 *  逐个出列，减小相关课的入度
 *  判断是否有入度转 0 的课，继续入列，出列
 *  直到没有入度为 0 的课
 *
 * 每门课对应的入度
 * 课之间的依赖关系
 * 合适的数据结构
 *
 * 构建入度数组
 *  每一门课都有一个动态变化的入度
 *  课的编号是 0 ~ n-1 ，以编号为索引，选用 一维数组 存放 入度
 *  遍历 先决条件表（二维数组），计算没门课的初始入度
 *
 * 构建哈希表
 *  选用 哈希表 即 相邻衔接表 来记录 依赖关系
 *  map
 *    key：编号
 *    value：依赖它的后续课程（数组）
 *
 * BFS
 *  queue 队列中始终是 入度为0的课
 *  选择一门课出列，同时查看哈希表，
 *  将对应后续课的入度 -1 如果有入度减为 0 ，推入 queue
 *  不再有新的入度 0 的课入列时，此时 queue 为空，退出循环
 */
var findOrder = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0)  // 初始化入度数组
  let graph = {}  // 哈希表

  for (let i = 0;i < prerequisites.length;i++) {
    inDegree[prerequisites[i][0]]++

    graph[prerequisites[i][1]] ? graph[prerequisites[i][1]].push(prerequisites[i][0]) : (graph[prerequisites[i][1]] = [prerequisites[i][0]])
  }

  let res = []
  let queue = []

  for (let i = 0;i < numCourses;i++) {
    inDegree[i] === 0 && queue.push(i)
  }

  while (queue.length) {
    let cur = queue.shift()
    res.push(cur)

    let to = graph[cur] // 后续课程

    if (to && to.length) {
      for (let j = 0;j < to.length;j++) {
        inDegree[to[j]]-- // 入度 -1

        inDegree[to[j]] === 0 && queue.push(to[j])
      }
    }
  }

  return res.length === numCourses ? res : []
};
// @lc code=end

