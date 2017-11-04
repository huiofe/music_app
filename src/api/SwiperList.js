import jsonp from '../common/jsonp';
import {commonParms, options} from './config';
import axios from 'axios';
axios.defaults.timeout = 5000;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

export function getSwiperList() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

  const data = Object.assign({}, commonParms, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    _: 1508595963460
  });
  return jsonp(url,data,options);
}
