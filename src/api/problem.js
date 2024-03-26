import http from "../http";
const prix = "/apiCount";
export const getProblem = (data) =>
  http({
    url: `${prix}/viewIssueList`,
    method: "post",
    data
  });
