import http from "../http";
const prix = "/apiCount";
export const getNotic = (data) =>
  http({
    url: `${prix}/viewAnnouncementList`,
    method: "post",
    data
  });
