import axios from 'axios'
// import qs from 'qs'

import { HTTP_DEV, HTTPS, DEBUG } from './config'

const HTTP = DEBUG ? HTTP_DEV : HTTPS

// var config = {
//   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
// }

class XHR {
  // 首页Hots
  getHot (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-new-pi-ci-num/`,
      { params: json }
    )
  }
  // 公告号搜索
  getGong (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-zheng-che-list&num=10`,
      {params: json}
    )
  }
  // 底盘查询
  getDip (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-di-pan-list&num=10`,
      { params: json }
    )
  }
  // 燃油查询
  getPro (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-ran-you-list&num=10`,
      { params: json }
    )
  }
  // 免征查询
  getNum (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-exempt-list&num=10`,
      { params: json }
    )
  }
  // 新能源查询
  getNew (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-new-energy-list&num=10`,
      { params: json }
    )
  }
  // 整车详情
  getGou (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-zheng-che-detail`,
      { params: json }
    )
  }
  // 底盘详情
  getDtl (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-di-pan-detail`,
      { params: json }
    )
  }
  // 燃油详情
  getYou (json) {
    return axios.get(
      `${HTTP}/index.php?r=api/gonggao/get-ran-you-detail`,
      { params: json }
    )
  }
}

// 实例化后再导出
export default new XHR()
