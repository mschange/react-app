// 引入createStore进行创建store
import { createStore, applyMiddleware } from 'redux';
// 引入redux的中间件thunk
import thunk from 'redux-thunk';
// 引入日志
import logger from "redux-logger";
// 引入reducer
import rootReducer from './reducer';

// 引入工具插件
import { composeWithDevTools } from 'redux-devtools-extension';

// 创建store
const store = createStore(
  // 把reducer挂载到store
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)

export default store;