import React from 'react';
import {Button, message,Avatar,Modal,Table,InputNumber} from 'antd'
import {ShoppingCartOutlined,} from '@ant-design/icons'
import bjb from '../../static/bjb.jpg'
import sbd from '../../static/sbd.jpg'
import dnb from '../../static/dnb.jpg'
import ydsh from '../../static/ydsh.jpg'
import sjb from '../../static/sjb.jpg'
import dami from '../../static/dami.jpg'
import mf from '../../static/mf.jpg'
import hsy from '../../static/hsy.jpg'
import avatar from '../../static/avatar.webp'
import './integralmall.min.css'

const Integralmall = () => {
    const [shopcart,setshopcart] = React.useState({visible:false,selectedRowKeys: [],loading: false,goodslist:""})


    const onClick = (value) =>{//添加商品到购物车
        message.info(`你添加了id为${value}的商品到购物车`)
        setshopcart((oldState)=>({
            ...oldState,
            goodslist:shopcart.goodslist+`${value},`
        }))
    }
    const shoppingCart = ()=>{//点击购物车触发弹窗
        setshopcart(oldState => ({
            ...oldState,
           visible:true
        }))
          message.info("你点开了购物车",3)
    }
    const modalCancel = ()=>{//弹窗取消按钮
        setshopcart(oldState => ({
            ...oldState,
           visible:false
        }))
        message.info("你取消了弹窗",3)
    }
    const modalOk = ()=>{//弹窗确认按钮
          setshopcart(oldState => ({
            ...oldState,
           visible:false
        }))
        message.info("你点击了确认按钮，弹窗关闭并跳转计算页面",3)
    }
    const onSelectChange = (selectedRowKeys)=>{//箭头函数
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setshopcart(oldState => ({
            ...oldState,
            selectedRowKeys
        }))
    }
    const numberChange = (value)=>{//箭头函数
          console.log(value);
    }

    const goodsList = [
        {
            id:"1",
            imgsrc:bjb,
            price:5,
            goodsName:"笔记本",
            describe:"定制真皮手感活页笔记本"
        },
        {
            id:"2",
            imgsrc:sbd,
            price:5,
            goodsName:"鼠标垫",
            describe:"定制鼠标垫"
        },
        {
            id:"3",
            imgsrc:dnb,
            price:15,
            goodsName:"电脑包",
            describe:"定制电脑包"
        },
        {
            id:"4",
            imgsrc:ydsh,
            price:10,
            goodsName:"运动水壶",
            describe:"定制运动水壶"
        },
        {
            id:"5",
            imgsrc:sjb,
            price:10,
            goodsName:"双肩包",
            describe:"定制双肩包"
        },
        {
            id:"6",
            imgsrc:dami,
            price:20,
            goodsName:"大米",
            describe:"南方优质稻米品种"
        },
        {
            id:"7",
            imgsrc:hsy,
            price:10,
            goodsName:"花生油",
            describe:"低芥酸特香菜籽特级压榨"
        },
        {
            id:"8",
            imgsrc:mf,
            price:10,
            goodsName:"面粉",
            describe:"小麦粉中筋面粉"
        },

    ]
    const columns = [
        {
          title: '全选',
          dataIndex: 'name',
        },
        {
          title: '单价',
          dataIndex: 'price',
        },
        {
          title: '数量',
          dataIndex: 'number',
        },
        {
          title: '总计',
          dataIndex: 'total',
        },
      ];
      
      const data = [];
      for (let i = 1; i < 20; i++) {
        data.push({
          key: i,
          name: `第${i}件商品`,
          price: `${i}`,
          number: <InputNumber min={1} max={1} defaultValue={1} onChange={numberChange}/>,
          total:`${i}`
        });
      }
      const rowSelection = {
        selectedRowKeys:shopcart.selectedRowKeys,
        onChange: onSelectChange,
      };
    return (
        <div className='intergralmall'>
            <div className='inter_left'>
                <div className='inter_left_bottom'>
                    {
                        goodsList.map((item)=>{//箭头函数
                              return (
                              <div className='goodsItem' key={item.id}>
                                  <div className='imgItem'>
                                      <img src={item.imgsrc} alt="商品图片"></img>
                                </div>
                                <div className='bottom'>
                                    <div className='bottom_left'>
                                        <div className='goodsName'>{item.goodsName}</div>
                                        <div className='describe'>{item.describe}</div>
                                    </div>
                                    <div className='bottom_right'>
                                        <div className='price'>积分：<span>{item.price}</span></div>
                                    <Button type="primary" icon={<ShoppingCartOutlined />} size="large" onClick={()=> onClick(item.id)}>
                                        添加
                                    </Button>
                                    </div>
                                
                              </div>
                                </div>
                              )    
                        })
                    }
                </div>
            </div>
            <div className='inter_right'>
                <div className='int_right_avatar'>
                <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    src={avatar}
                />
                <div className='username'>
                    张伟
                </div>
                </div>
                <div className='int_right_msg'>
                    <div className='points'>我的积分<div>10</div></div>
                    <div className='order'>历史订单<div>5</div></div>
                </div>
                <div className='int_right_shopcart'>
                <Button type="primary" icon={<ShoppingCartOutlined />} size="large" onClick={shoppingCart} className='shopcartButton'>
                                        我的购物车
                 </Button>
                    <Modal
                      title="购物车"
                      visible={shopcart.visible}
                      onOk={modalOk}
                      onCancel={modalCancel}
                      okText="确认"
                      cancelText="取消"
                      width={1000}
                    >
                      <div>
        <div style={{ marginBottom: 16 }}>
         
          <span style={{ marginLeft: 8 }}>
            {shopcart.selectedRowKeys.length>0 ? true : false ? `Selected ${shopcart.selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Integralmall;