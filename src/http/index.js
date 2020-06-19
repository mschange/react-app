import { Toast } from 'antd-mobile';
export function inject(service) {
  // request拦截器
  service.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token') || ''
      // 可以进行token验证
      if (config.url !== '/users/register' && config.url !== '/users/login') {
        config.headers['authorization'] = "Bearer " + token;
      }
      console.log(config, '---------------')
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );
  // response拦截器
  service.interceptors.response.use(
    response => {
      console.log(response, 'response')
      // 对返回的数据进行错误码处理
      switch (response.status) {
        case 200:
          return response.data;
          break;
        case 401:
          Toast.info('登录失效了，请您重新登录', 1);
          this.props.history.push('/login');
          break;
        default:
          Toast.info('网络失败了，请检查您的网络！', 1);
          break;
      }
    },
    error => {
      console.log(JSON.stringify(error));
    }
  );
}

export default inject;