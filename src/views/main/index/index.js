import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { add, dele } from '../../../store/action/counter'
import Tabbar from '../../../component/footer';

const Index = props => {
  console.log(props)
  return (
    <div>
      <p>{props.count}</p>
      <Button type="primary" size="small" onClick={() => props.addCount(100)}>+ 100</Button>
      <br/>
      <Button type="primary" size="small" onClick={() => props.deleCount(1)}>- 1</Button>
      <br/>
      <div><Button type="primary" size="small">default</Button>首页</div>
    </div>
  )
}

// 映射数据
const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

// 映射dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    deleCount: () => dispatch(dele()),
    addCount: (n) => dispatch(add(n))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabbar(Index));