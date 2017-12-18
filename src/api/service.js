import axios from 'axios'
// import qs from 'qs'

import { HTTP_DEV, HTTPS, DEBUG } from './config'

const HTTP = DEBUG ? HTTP_DEV : HTTPS

// var config = {
//   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
// }

class XHR {
// 公告号搜索——整车查询
  getGong (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-zheng-che-list`,
      {params: json}
    )
  }
  // 公告号搜索——整车查询
  getDip (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-di-pan-list`,
      { params: json }
    )
  }
}

// 实例化后再导出
export default new XHR()
