import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
// import { connect } from 'react-redux';
// import { add, dele } from '../../../store/action/counter'
import Tabbar from '../../../component/footer';

// 引入css
import './index.less';
// const Index = props => {
//   console.log(props)
//   return (
//     <div>
//       <p>{props.count}</p>
//       <Button type="primary" size="small" onClick={() => props.addCount(100)}>+ 100</Button>
//       <br/>
//       <Button type="primary" size="small" onClick={() => props.deleCount(1)}>- 1</Button>
//       <br/>
//       <div><Button type="primary" size="small">default</Button>首页</div>
//     </div>
//   )
// }

// // 映射数据
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count
//   }
// }

// // 映射dispatch方法
// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleCount: () => dispatch(dele()),
//     addCount: (n) => dispatch(add(n))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Tabbar(Index));

class Index extends React.Component {
  state = {
    data: [
      '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/142067/37/4191/152904/5f23738bE17795357/5dd6e613559d9040.jpg!cr_1125x445_0_171!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/119183/20/13518/232673/5f231ed4Ea1d36999/44ecc710cfcdc029.jpg!cr_1125x445_0_171!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/139822/19/3178/72208/5f114a52E4fb98b37/a780b3c925a29661.jpg!cr_1125x445_0_171!q70.jpg.dpg',
      '//imgcps.jd.com/ling4/852293/6aW85bmy6JuL57OV5LiA56uZ6LSt/54iG5qy-54Ot6ZSA/p-5c11d16482acdd181dbc1fc5/bed5d135/cr_1125x445_0_171/s1125x690/q70.jpg',
      '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/123640/27/207/159855/5eb3f095E7954799d/c82ca692666adbbb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/123624/24/2195/99979/5ec3a165E12b276e2/2e5b8a2606fbabfe.jpg!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/132988/29/4971/89787/5f167f6fEd1745bad/5a2f096279347ccc.jpg!cr_1125x445_0_171!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147230/12/2332/52860/5f03ee68E4ad74b19/e93b4e475dd671b0.jpg!cr_1125x445_0_171!q70.jpg.dpg'
    ],
    imgHeight: 146,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/142067/37/4191/152904/5f23738bE17795357/5dd6e613559d9040.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/119183/20/13518/232673/5f231ed4Ea1d36999/44ecc710cfcdc029.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/139822/19/3178/72208/5f114a52E4fb98b37/a780b3c925a29661.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          '//imgcps.jd.com/ling4/852293/6aW85bmy6JuL57OV5LiA56uZ6LSt/54iG5qy-54Ot6ZSA/p-5c11d16482acdd181dbc1fc5/bed5d135/cr_1125x445_0_171/s1125x690/q70.jpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/123640/27/207/159855/5eb3f095E7954799d/c82ca692666adbbb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/123624/24/2195/99979/5ec3a165E12b276e2/2e5b8a2606fbabfe.jpg!q70.jpg.dpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/132988/29/4971/89787/5f167f6fEd1745bad/5a2f096279347ccc.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147230/12/2332/52860/5f03ee68E4ad74b19/e93b4e475dd671b0.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        ],
      });
    }, 100);
  }
  // input输入获取值
  handChange(val) {
    console.log(val)
  }
  render(h) {
    return (
      <div className="indexWrapper">
        {/* 搜索栏 */}
        <div className="searchBox">
          <span className="iconfont icon-fenlei1">左侧</span>
          <span>
            <i className="iconfont icon-sousuo"></i>
            <i>搜索商品</i>
          </span>
          <span>登录</span>
        </div>
        {/* 轮播图 */}
        <WingBlank className="wrapper">
          <Carousel
            className="space-carousel"
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val}
                  alt="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/139822/19/3178/72208/5f114a52E4fb98b37/a780b3c925a29661.jpg!cr_1125x445_0_171!q70.jpg.dpg"
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        {/* 栏目名称 */}
        <div className="columnBox">
          <div>栏目名称</div>
          <div>
            <img src="//imgcps.jd.com/ling4/852293/6aW85bmy6JuL57OV5LiA56uZ6LSt/54iG5qy-54Ot6ZSA/p-5c11d16482acdd181dbc1fc5/bed5d135/cr_1125x445_0_171/s1125x690/q70.jpg" alt=""/>
          </div>
          <div className="conentList">
            <div className="every">
              <p>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147230/12/2332/52860/5f03ee68E4ad74b19/e93b4e475dd671b0.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt=""/>
              </p>
              <p>商品名称</p>
              <p>￥25.00</p>
            </div>
            <div className="every">
              <p>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147230/12/2332/52860/5f03ee68E4ad74b19/e93b4e475dd671b0.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt="" />
              </p>
              <p>商品名称</p>
              <p>￥25.00</p>
            </div>
            <div className="every">
              <p>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147230/12/2332/52860/5f03ee68E4ad74b19/e93b4e475dd671b0.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt="" />
              </p>
              <p>商品名称</p>
              <p>￥25.00</p>
            </div>
          </div>
        </div>
        <div className="columnBox">
          <div>栏目名称</div>
          <div>
            <img src="//imgcps.jd.com/ling4/852293/6aW85bmy6JuL57OV5LiA56uZ6LSt/54iG5qy-54Ot6ZSA/p-5c11d16482acdd181dbc1fc5/bed5d135/cr_1125x445_0_171/s1125x690/q70.jpg" alt="" />
          </div>
          <div className="conentList">
            <div className="every">
              <p>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147230/12/2332/52860/5f03ee68E4ad74b19/e93b4e475dd671b0.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt="" />
              </p>
              <p>商品名称</p>
              <p>￥25.00</p>
            </div>
            <div className="every">
              <p>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147230/12/2332/52860/5f03ee68E4ad74b19/e93b4e475dd671b0.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt="" />
              </p>
              <p>商品名称</p>
              <p>￥25.00</p>
            </div>
            <div className="every">
              <p>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147230/12/2332/52860/5f03ee68E4ad74b19/e93b4e475dd671b0.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt="" />
              </p>
              <p>商品名称</p>
              <p>￥25.00</p>
            </div>
          </div>
        </div>
        {/* 为你推荐 */}
        <div className="recommendBox">
          <p className="title">
            <img src="http://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" alt=""/>
          </p>
          <div className="shopBox">
            <div className="everyList">
              <div>
                <img src="//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/149288/2/3997/184148/5f217193Ec63118f7/132043cc76216dbd.jpg!q70.dpg.webp" alt=""/>
              </div>
              <div>德玛仕（DEMASHI） 双温点菜柜麻辣烫展示柜冷藏冷冰箱 凉菜蔬菜鲜肉超市保鲜冰柜商用立式 1.2米点菜柜DC-120ZL</div>
              <div>￥ 299.00</div>
            </div>
            <div className="everyList">
              <div>
                <img src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/108040/18/9071/189295/5e7043eaE2a464648/789fc70e6afbe8d4.jpg!q70.dpg.webp" alt="" />
              </div>
              <div>【新品推荐】绿色红银婚鞋蝴蝶结中跟单鞋尖头亮片大码鞋小码3248 黑色 41</div>
              <div>￥ 299.00</div>
            </div>
            <div className="everyList">
              <div>
                <img src="//img30.360buyimg.com/mobilecms/s372x372_jfs/t1/122116/10/8452/234221/5f267128Ea658cffb/328e44e16c78a3dd.jpg!q70.dpg.webp" alt="" />
              </div>
              <div>狄豪（DIHAO）沙发现代简约客厅整装布艺沙发轻奢大小户型实木框架布沙发组合家具 双人+贵妃+单人【3.31米】 【旗舰版】全实木框架+独立袋弹簧+乳胶座包</div>
              <div>￥ 299.00</div>
            </div>
            <div className="everyList">
              <div>
                <img src="//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/102781/5/14897/239525/5e6e5be3E3716a621/9d2b81adb6724d71.jpg!q70.dpg.webp" alt="" />
              </div>
              <div>义婕2020夏季新款短袖T恤女羽毛镶钻韩版白色棉体恤DSD12-7051 黑色 XL</div>
              <div>￥ 299.00</div>
            </div>
            <div className="everyList">
              <div>
                <img src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/93568/33/7014/65409/5df8814fEe29c885b/51a54ecb44336023.jpg!q70.dpg.webp" alt="" />
              </div>
              <div>充电投光LED户外照明广场工地工程应急露营夜市摆摊手提式泛光灯 200W（4-8小时）48粒灯珠 红蓝警示2002</div>
              <div>￥ 299.00</div>
            </div>
            <div className="everyList">
              <div>
                <img src="//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/94676/37/15266/286316/5e7043d8E92288d23/9c35a009ec7cde57.jpg!q70.dpg.webp" alt="" />
              </div>
              <div>【新品推荐】2020秋冬新款高跟鞋女尖头网红百搭浅口中空气质小香风细跟单鞋女 绿色 34</div>
              <div>￥ 299.00</div>
            </div>
            <div className="everyList">
              <div>
                <img src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/102519/6/18666/199984/5e970758Ebf7bd634/3a7a51a09b447770.jpg!q70.dpg.webp" alt="" />
              </div>
              <div>义婕女装2020夏季超大弹力紧身螺纹大圆领露锁骨短袖T恤百搭打底上衣DSD12-7546 绿色 2XL</div>
              <div>￥ 299.00</div>
            </div>
            <div className="everyList">
              <div>
                <img src="//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/127169/11/7981/220502/5f1c54b5E8a5f9de0/485784ca4a8decdb.jpg!q70.dpg.webp" alt="" />
              </div>
              <div>舞霸王【HDMI超清新款】跳舞毯双人单人无线跳舞机家用电视电脑两用体感游戏机儿童加厚跑步毯 【HDMI超清无线版】迪士尼+瑜伽健身操+MV真人</div>
              <div>￥ 299.00</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tabbar(Index);