import axios from 'axios';
import store from '../store/store';
import router from '../router';


const BASEURL = process.env.NODE_ENV === 'production' ? '/api' : '/api'
/**
 * 开发 & 测试环境，接口超时（3秒）会给出提示
 * 根据请求的url注册
 * 即使参数不同，url相同也视为同一请求，后者会取消掉前者的watch
 */


/** 创建axios实例 */
// eslint-disable-next-line no-unused-expressions
axios.defaults.headers['Content-Type']='application/json';
//axios.defaults.headers['Content-Type']='multipart/form-data';
const service = axios.create({
  //baseURL: '', // api 的 base_url
  timeout: 1000 * 10, // 请求超时时间
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

/** request拦截器 */
service.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // eslint-disable-line
    Promise.reject(error);
  },
);



/** response 拦截器 */
service.interceptors.response.use(
  (response) => {
    /** 注销 */

    return response.data;
  },
  (error) => {
    console.log('err' + error); // eslint-disable-line
    return Promise.reject(error);
  },
);
service.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/api/]前缀做代理拦截!
  return BASEURL+actionName
}
export default service;
