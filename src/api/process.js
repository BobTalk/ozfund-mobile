/*
 * @Author: hyq_bob bob.he@autech.one
 * @Date: 2024-03-21 10:06:47
 * @LastEditors: hyq_bob bob.he@autech.one
 * @LastEditTime: 2024-03-26 10:34:13
 * @FilePath: /ozfund-mobile/src/api/process.js
 * @Description: 进程
 */
import http from "../http";
const prix = "/apiCount";
export const getProcess = (data) =>
  http({
    url: `${prix}/viewCourseList`,
    method: "post",
    data
  });
