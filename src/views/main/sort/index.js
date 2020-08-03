import React from 'react';
import Tabbar from '../../../component/footer';
// 引入css
import './index.less';
class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        '手机数码',
        '电脑办公',
        '家用电器',
        '计生情趣',
        '美妆护肤',
        '个护清洁',
        '汽车生活',
        '京东超市',
        '男装',
        '男鞋',
        '女装',
        '女鞋',
        '母婴童装',
        '图书影像',
        '运动户外',
        '内衣配饰',
        '食品生鲜',
        '酒水饮料',
        '家具厨具'
      ],
      activeIndex: 0
    }
  }
  handleClick = (index, tag) => {
    console.log(tag)
    console.log(this.refs[tag], this.refs[tag].scrollTop)
    this.refs[tag].scrollTop = this.refs[tag].scrollHeight;
    this.setState({
      activeIndex: index
    })
  }
  render(h) {
    return (
      <div className="sortWrapper">
        {/* 左侧 */}
        <div className="leftBox">
          <div>
            {this.state.data.map((item, index) => (
              <p className={index === this.state.activeIndex ? 'active' : ''} onClick={() => this.handleClick(index, `left${index}`)} key={index} ref={`left${index}`}>{item}</p>
            ))}
          </div>
        </div>
        {/* 右侧 */}
        <div className="rightBox">
          <div className="everyList">
            <p className="title">热门品牌</p>
            <div className="shopList">
              <div className="everyShop">
                <img src="//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png" alt=""/>
                <p>小米</p>
              </div>
              <div className="everyShop">
                <img src="//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg" alt="" />
                <p>华为</p>
              </div>
              <div className="everyShop">
                <img src="//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg" alt="" />
                <p>荣耀</p>
              </div>
              <div className="everyShop">
                <img src="//img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg" alt="" />
                <p>魅族</p>
              </div>
            </div>
          </div>
          <div className="everyList">
            <p className="title">手机配件</p>
            <div className="shopList">
              <div className="everyShop">
                <img src="//img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg" alt="" />
                <p>数据线</p>
              </div>
              <div className="everyShop">
                <img src="//img14.360buyimg.com/focus/s140x140_jfs/t13657/281/912225045/5343/3109ae02/5a167b73Na69aae95.jpg" alt="" />
                <p>手机存储卡</p>
              </div>
              <div className="everyShop">
                <img src="//img12.360buyimg.com/focus/s140x140_jfs/t1/107011/2/13826/4294/5e5f1150E2f5dd505/d9503871495a5a18.jpg" alt="" />
                <p>充电宝</p>
              </div>
              <div className="everyShop">
                <img src="//img10.360buyimg.com/focus/s140x140_jfs/t17284/353/1280266808/3696/32c00915/5ac486ccN2d8031c1.jpg" alt="" />
                <p>手机耳机</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Tabbar(Sort);