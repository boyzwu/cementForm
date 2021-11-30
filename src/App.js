import React from 'react'
import { Table,InputNumber,Input,Button,Radio,Space,message,Modal } from 'antd'
import 'antd/dist/antd.css'

// 材料	水泥	磨灰	矿粉 	水洗砂	机制砂	石粉	5-10细石	5-20碎石	5-25碎石	高标减水剂	低标减水剂	砂浆减水剂	砂浆调节剂	膨胀剂	纤维



class App extends React.Component {

  change=(e1,e2,)=>{
    this.state.dataSourcePrice[0][`p${e1}`]=e2
    this.setState({
      dataSourcePrice:this.state.dataSourcePrice
    })
  }
  //index,空值，id，实例节点
  changeNum=(e1,e2,e3,e4)=>{
    console.log(e1,e2,e3,e4,'changeNum')
    let value=e4!=null?(e4.target?e4.target.value:e4):''
    this.state.dataSourceNum.map((e,index)=>{
      if(index==e3){
        this.state.dataSourceNum[index][`n${e1}`]=value
      }
    })
    this.setState({
      dataSourceNum:this.state.dataSourceNum
    })
  }


  state={
    columnsPriceArr:{

    },
    dataSourcePrice:[
      {

      }

    ],
    //id不能用 当删除的时候 id和index对不上
    dataSourceNum:[
      {
        id:0
      }

    ],
    columnsNum : [
      // 代码	强度等级	坍落度	清水	回收水	水泥	磨灰	矿粉	水胶比	水洗砂	机制砂	石粉	5-25碎石	掺量	减水剂	胶材	容重	材料成本
      {
        title: '序号',
        dataIndex: 'n0',
        key: 'n0',
        width:50,
        render:(text,record,index)=>{
          return <div>
            {index}
          </div>
        },
        fixed: 'left'
      },
      {
        title: '代码',
        dataIndex: 'n1',
        key: 'n1',
        width:100,
        render:(text,record,index)=>{
          return <div>
            <Input onChange={this.changeNum.bind(this,1,text,index)} value={ this.state.dataSourceNum[index]['n1']}></Input>
          </div>
        },
        fixed: 'left'
      },
      {
        title: '强度等级',
        dataIndex: 'n2',
        key: 'n2',
        width:150,
        render:(text,record,index)=>{
          return <div>
            <Input onChange={this.changeNum.bind(this,2,text,index)} value={ this.state.dataSourceNum[index]['n2']}>

            </Input>
          </div>
        },
        fixed: 'left'
      },
      {
        title: '坍落度',
        dataIndex: 'n3',
        key: 'n3',
        width:150,

        render:(text,record,index)=>{
          return <div>
            <Input onChange={this.changeNum.bind(this,3,text,index)} value={ this.state.dataSourceNum[index]['n3']}>

            </Input>
          </div>
        },

      },
      {
        title: '清水',
        dataIndex: 'n4',
        key: 'n4',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,4,text,index)} value={ this.state.dataSourceNum[index]['n4']}></InputNumber>
          </div>
        }
      },
      {
        title: '回收水',
        dataIndex: 'n5',
        key: 'n5',
        width:100,

        render:(text,record,index)=>{
          return <div >
            <InputNumber style={{width:'100%'}}onChange={this.changeNum.bind(this,5,text,index)} value={ this.state.dataSourceNum[index]['n5']}></InputNumber>
          </div>
        }
      },
      {
        title: '水泥',
        dataIndex: 'n6',
        key: 'n6',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,6,text,index)} value={ this.state.dataSourceNum[index]['n6']}>

            </InputNumber>
          </div>
        }
      },
      {
        title: '磨灰',
        dataIndex: 'n7',
        key: 'n7',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,7,text,index)} value={ this.state.dataSourceNum[index]['n7']}>

            </InputNumber>
          </div>
        }
      },
      {
        title: '矿粉',
        dataIndex: 'n8',
        key: 'n8',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,8,text,index)} value={ this.state.dataSourceNum[index]['n8']}>

            </InputNumber>
          </div>
        }
      },
      {
        title: '水胶比',
        dataIndex: 'n9',
        key: 'n9',
        width:100,

        // render:(text,record)=>{
        //   return <div>
        //     <Input onChange={this.changeNum.bind(this,9,text,index)} value={ this.state.dataSourceNum[index]['n9']}>
        //
        //     </Input>
        //   </div>
        // }
      },
      {
        title: '水洗砂',
        dataIndex: 'n10',
        key: 'n10',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,10,text,index)} value={ this.state.dataSourceNum[index]['n10']}>

            </InputNumber>
          </div>
        }
      },  {
        title: '机制砂',
        dataIndex: 'n11',
        key: 'n11',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,11,text,index)} value={ this.state.dataSourceNum[index]['n11']}>

            </InputNumber>
          </div>
        }
      }, {
        title: '石粉',
        dataIndex: 'n12',
        key: 'n12',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,12,text,index)} value={ this.state.dataSourceNum[index]['n12']}>

            </InputNumber>
          </div>
        }
      }, {
        title: '5-10碎石',
        dataIndex: 'n13',
        key: 'n13',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,13,text,index)} value={ this.state.dataSourceNum[index]['n13']}>

            </InputNumber>
          </div>
        }
      }, {
        title: '5-20碎石',
        dataIndex: 'n14',
        key: 'n14',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,14,text,index)} value={ this.state.dataSourceNum[index]['n14']}>

            </InputNumber>
          </div>
        }
      }, {
        title: '5-25碎石',
        dataIndex: 'n15',
        key: 'n15',
        width:100,

        render:(text,record,index)=>{
          return <div>
            <InputNumber style={{width:'100%'}} onChange={this.changeNum.bind(this,15,text,index)} value={ this.state.dataSourceNum[index]['n15']}>

            </InputNumber>
          </div>
        }
      }, {
        title: '掺量',
        dataIndex: 'n16',
        key: 'n16',
        width:100,

        render:(text,record,index)=>{
          return <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <InputNumber onChange={this.changeNum.bind(this,16,text,index)} value={ this.state.dataSourceNum[index]['n16']}>

            </InputNumber>
            <span>%</span>
          </div>
        }
      },{
        title: '减水剂',
        dataIndex: 'n17',
        key: 'n17',
        width:100,
        fixed: 'right',
        render:(text,record,index)=>{
          return <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Radio.Group onChange={this.changeNum.bind(this,17,text,index)} value={ this.state.dataSourceNum[index]['n17']}>
              <Space direction="vertical">
                <Radio value={1}>高</Radio>
                <Radio value={2}>低</Radio>
              </Space>
            </Radio.Group>
            <div>
              { (this.state.dataSourceNum[index]['n16']/100)* (Number(this.state.dataSourceNum[index]['n6'])+Number(this.state.dataSourceNum[index]['n7'])+Number(this.state.dataSourceNum[index]['n8']))}
              {/*1*/}
            </div>
          </div>
        }
      },{
        title: '胶材',
        dataIndex: 'n18',
        key: 'n18',
        width:100,
        fixed: 'right',
        //水泥	磨灰	矿粉 之和
        render:(text,record,index)=>{
          return <div>
{ Number(this.state.dataSourceNum[index]['n6'])+Number(this.state.dataSourceNum[index]['n7'])+Number(this.state.dataSourceNum[index]['n8'])}
          </div>
        }
      },{
        title: '容重',
        dataIndex: 'n19',
        key: 'n19',
        width:100,
        fixed: 'right',
        render:(text,record,index)=>{
          return <div>
            { Number(this.state.dataSourceNum[index]['n4'])+Number(this.state.dataSourceNum[index]['n5'])+Number(this.state.dataSourceNum[index]['n6'])+
            Number(this.state.dataSourceNum[index]['n7'])+Number(this.state.dataSourceNum[index]['n8'])+
            Number(this.state.dataSourceNum[index]['n10'])+Number(this.state.dataSourceNum[index]['n11'])+Number(this.state.dataSourceNum[index]['n12'])+
            Number(this.state.dataSourceNum[index]['n13'])+Number(this.state.dataSourceNum[index]['n14'])+Number(this.state.dataSourceNum[index]['n15'])+
             (this.state.dataSourceNum[index]['n16']/100)* (Number(this.state.dataSourceNum[index]['n6'])+Number(this.state.dataSourceNum[index]['n7'])+Number(this.state.dataSourceNum[index]['n8']))}
              </div>
        }
      },{
        title: '材料成本',
        dataIndex: 'n20',
        key: 'n20',
        width:100,
        fixed: 'right',
        render:(text,record,index)=>{
          let gaodi=this.state.dataSourceNum[index]['n17']
          const n17Value= (this.state.dataSourceNum[index]['n16']/100)* (Number(this.state.dataSourceNum[index]['n6'])+Number(this.state.dataSourceNum[index]['n7'])+Number(this.state.dataSourceNum[index]['n8']))

          const n20Price=(gaodi==1?n17Value*Number(this.state.dataSourcePrice[0]['p11']):n17Value*Number(this.state.dataSourcePrice[0]['p12']))
          return <div>
            {
              Number(this.state.dataSourceNum[index]['n6']) * Number(this.state.dataSourcePrice[0]['p2'])+
              Number(this.state.dataSourceNum[index]['n7']) * Number(this.state.dataSourcePrice[0]['p3'])+
              Number(this.state.dataSourceNum[index]['n8']) * Number(this.state.dataSourcePrice[0]['p4'])+
              Number(this.state.dataSourceNum[index]['n10']) * Number(this.state.dataSourcePrice[0]['p5'])+
              Number(this.state.dataSourceNum[index]['n11']) * Number(this.state.dataSourcePrice[0]['p6'])+
              Number(this.state.dataSourceNum[index]['n12']) * Number(this.state.dataSourcePrice[0]['p7'])+
              Number(this.state.dataSourceNum[index]['n13']) * Number(this.state.dataSourcePrice[0]['p8'])+
              Number(this.state.dataSourceNum[index]['n14']) * Number(this.state.dataSourcePrice[0]['p9'])+
              Number(this.state.dataSourceNum[index]['n15']) * Number(this.state.dataSourcePrice[0]['p10'])+
              n20Price
            }
          </div>
        }
      },{
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        width: 100,
        fixed: 'right',

        render:(text,record,index)=>{
          return <div>
            <Button onClick={this.delete.bind(this,index)}>
              删除
            </Button>
          </div>

        }
      },
        ],
    columnsPrice : [
      {
        title: '材料',
        dataIndex: 'p1',
        // key: 'cailiao',
        key: 'p1',
        width:100,fixed:'left'
      },
      {
        title: '水泥',
        dataIndex: 'p2',
        // key: 'shuini',
        key: 'p2',
        render:()=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,2)} value={ this.state.dataSourcePrice[0]['p2']}>

            </InputNumber>
            <span>元/吨</span>
          </div>
        }
      },
      {
        title: '磨灰',
        dataIndex: 'p3',
        // key: 'mohui',
        key: 'p3',
        render:(e,e2,e3)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,3)} value={ this.state.dataSourcePrice[0]['p3']}>

            </InputNumber>
            <span>元/吨</span>
          </div>
        }
      },
      {
        title: '矿粉',
        dataIndex: 'p4',
        key: 'p4',
        // key: 'kuangfen',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,4)} value={ this.state.dataSourcePrice[0]['p4']}>

            </InputNumber>
            <span>元/吨</span>
          </div>
        }
      },
      {
        title: '水洗砂',
        dataIndex: 'p5',
        key: 'p5',
        // key: 'shuixisha',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,5)} value={ this.state.dataSourcePrice[0]['p5']}>

            </InputNumber>
            <span>元/吨</span>
          </div>
        }
      },
      {
        title: '机制砂',
        dataIndex: 'p6',
        // key: 'jizhisha',
        key: 'p6',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,6)} value={ this.state.dataSourcePrice[0]['p6']}>

            </InputNumber>
            <span>元/吨</span>
          </div>
        }
      },
      {
        title: '石粉',
        dataIndex: 'p7',
        // key: 'shifen',
        key: 'p7',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,7)} value={ this.state.dataSourcePrice[0]['p7']}>

            </InputNumber>
            <span>元/吨</span>
          </div>
        }
      },{
        title: '5-10细石',
        dataIndex: 'p8',
        // key: '510',
        key: 'p8',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,8)} value={ this.state.dataSourcePrice[0]['p8']}>

            </InputNumber>
            <span>元/吨</span>
          </div>
        }
      },{
        title: '5-20碎石',
        dataIndex: 'p9',
        key: 'p9',
        // key: '520',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,9)} value={ this.state.dataSourcePrice[0]['p9']}>

            </InputNumber>
            <span>元/吨</span>
          </div>
        }
      },{
        title: '5-25碎石',
        dataIndex: 'p10',
        // key: '525',
        key: 'p10',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,10)} value={ this.state.dataSourcePrice[0]['p10']}>

            </InputNumber>
            <span>元/吨</span>

          </div>
        }
      },{
        title: '高标减水剂',
        dataIndex: 'p11',
        // key: 'gaobiao',
        key: 'p11',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,11)} value={ this.state.dataSourcePrice[0]['p11']}>

            </InputNumber>
            <span>元/公斤</span>


          </div>
        }
      },{
        title: '低标减水剂',
        dataIndex: 'p12',
        // key: 'dibiao',
        key: 'p12',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,12)} value={ this.state.dataSourcePrice[0]['p12']}>

            </InputNumber>
            <span>元/公斤</span>

          </div>
        }
      },{
        title: '砂浆减水剂',
        dataIndex: 'p13',
        // key: 'shajiangjianshui',
        key: 'p13',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,13)} value={ this.state.dataSourcePrice[0]['p13']}>

            </InputNumber>
            <span>元/公斤</span>

          </div>
        }
      },{
        title: '砂浆调节剂',
        dataIndex: 'p14',
        // key: 'shajiangtiaojie',
        key: 'p14',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,14)} value={ this.state.dataSourcePrice[0]['p14']}>

            </InputNumber>
            <span>元/公斤</span>

          </div>
        }
      },{
        title: '膨胀剂',
        dataIndex: 'p15',
        // key: 'pengzhangji',
        key: 'p15',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,15)} value={ this.state.dataSourcePrice[0]['p15']}>

            </InputNumber>
            <span>元/公斤</span>

          </div>
        }
      },{
        title: '纤维',
        dataIndex: 'p16',
        // key: 'xianwei',
        key: 'p16',
        render:(e)=>{
          return <div>
            <InputNumber onChange={this.change.bind(this,16)} value={ this.state.dataSourcePrice[0]['p16']}>

            </InputNumber>
            <span>元/公斤</span>

          </div>
        }
      },
    ]

  }

  delete=(e)=>{
    Modal.confirm({
      title:'删除',
      content: '确认删除吗',
      onOk:()=> {

          let list = this.state.dataSourceNum.filter((item,index )=>index !== e)
          this.setState({
            dataSourceNum: list
          },()=>{
            message.success('删除成功')

          })



      },
      onCancel() {

      },
    });



  }


  componentDidMount() {

    for(let i=1;i<=16;i++){
      // eslint-disable-next-line no-unused-expressions
      this.state.columnsPriceArr[`p${i}`]=0
    }
    for(let i=1;i<=16;i++){
      // eslint-disable-next-line no-unused-expressions
      if(i===1){
        this.state.dataSourcePrice[0][`p${i}`]='价格'
      }else{
        this.state.dataSourcePrice[0][`p${i}`]=0
      }

    }  for(let i=1;i<=20;i++){
      // eslint-disable-next-line no-unused-expressions

      if(i==17){
        this.state.dataSourceNum[0][`n${i}`]=1
        continue
      }
      this.state.dataSourceNum[0][`n${i}`]=''
    }

    this.setState({
      columnsPriceArr:this.state.columnsPriceArr,
      dataSourcePrice:this.state.dataSourcePrice,
      dataSourceNum:this.state.dataSourceNum,
    })
  }

  add=()=>{
    let arr=[]
    let arrObj={}
    for(let i=1;i<=20;i++){
      // eslint-disable-next-line no-unused-expressions
      if(i==17){
        arrObj[`n${i}`]=1
        continue
      }
        arrObj[`n${i}`]=''
    }
    arrObj['id']=this.state.dataSourceNum.length
    this.setState({
      dataSourceNum:[...this.state.dataSourceNum,arrObj]
    })
  }


  render() {
  // console.log(this.state.dataSourceNum,'dataSourceNum')

    return (
        <div >
          <div style={{fontSize:'26px',fontWeight:500,display:'flex',alignItems:"center",justifyContent:'center'}}>
            生产配比 泵送（墙柱、剪力墙等承重结构）
          </div>
          <Table dataSource={this.state.dataSourcePrice} columns={this.state.columnsPrice}  pagination={false} style={{
            marginBottom:'20px'
          }}   bordered scroll={{ x: 3000 }}/>
          <Table   footer={() => {
            return <div>
              <div>
                说明：
              </div> <div>
              1、根据材料变化 ，减水剂掺量可调整±0.4%，砂率±3%；
            </div> <div>
              2、根据工地情况除标准层外，容重可在2000--设定值间调整，原则上胶材不动，砂石，减水剂调整；
            </div>  <div>
              3、板面在上面基础上水泥减10公斤，矿粉减5公斤；
            </div>  <div>
              4、C45 C50 C55 C60混凝土用高标减水剂，52.5高标水泥。
            </div>
            </div>
          }} bordered dataSource={this.state.dataSourceNum} columns={this.state.columnsNum}  pagination={false} scroll={{ x: 2500 ,y: 240}} />
          <Button onClick={this.add}>
            添加➕
          </Button>
        </div>
    )
  }
}

export default App
