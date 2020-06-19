import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const footerMenu = [
  {
    icon: 'icon-shouye',
    name: '首页',
    link: '/index'
  },
  {
    icon: 'icon-fenlei',
    name: '分类页',
    link: '/sort'
  },
  {
    icon: 'icon-gouwuche',
    name: '购物车',
    link: '/car'
  },
  {
    icon: 'icon-yonghu',
    name: '我的',
    link: '/me'
  }
]

const Tabbar = (WrapperComponents) => class Tabbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  itemChange = (i) => {
    this.setState({
      index: i
    })
  }
  render() {
    const url = window.location.href;
    console.log(url)
    return (
      <div className="contair">
        <WrapperComponents {...this.props} />
        <div className="tabar">
          <div className="tabbar-content">
            {
              footerMenu.map((v, i) => (
                <Link to={v.link} className="tabar_item" key={i}>
                  <div className={'iconfont ' + v.icon + (url.indexOf(v.link) > -1 ? ' active' : '')} />
                  <div className={"texts" + (url.indexOf(v.link) > -1 ? ' active' : '')}>{v.name}</div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Tabbar;