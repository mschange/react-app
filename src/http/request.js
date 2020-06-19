import axios from 'axios';
import { inject } from './index.js';
import Config from '../config';

const service = axios.create({
  baseURL: 'http://192.168.0.0123', // api的base_url
  timeout: 20000 // 请求超时时间
});

inject(service);

export default service;