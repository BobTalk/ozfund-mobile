/*
 * @Author: hyq_bob bob.he@autech.one
 * @Date: 2024-03-26 12:54:40
 * @LastEditors: hyq_bob bob.he@autech.one
 * @LastEditTime: 2024-03-26 13:09:08
 * @FilePath: /ozfund-mobile/src/views/Progress/logic/index.js
 * @Description: 进程逻辑
 */
import { getProcess } from "@/api/process";
import { getToken } from "@/utils/auth.js";
// setToken("OZFUND_LANG", "en");
const langeMapping={
  zh:1,
  tc:2,
  en:3,
  jpn:4
}
export default {
  data(){
    return {
      timeAxisInfo:[]
    }
  },
  created() {
    getProcess({
      pageNo: 1,
      pageSize: 100,
    }).then(({data={}}) => {
      let {data:dataInfo} = data
      let filterInfo = dataInfo.data.filter(item => item.language == langeMapping[getToken('OZFUND_LANG')] )
      this.timeAxisInfo = filterInfo
    });
  },
}