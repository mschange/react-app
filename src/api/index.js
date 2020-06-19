import request from '../http/request';

// 注册接口
export function getCouponList(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  });
}
