import http from "../http";
const prix = "/apiCount";
export const getDynamic = (data) =>
  http({
    url: `${prix}/viewDynamicList`,
    method: "post",
    data
  });
