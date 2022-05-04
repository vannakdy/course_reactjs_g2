import { Menu } from 'antd';
import React from "react";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const App = () => {
  const [current, setCurrent] = React.useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;

// import React , {useEffect,useState} from "react";
// import "./HomeScreen.css";
// import {Button,Input,InputNumber} from "antd";
// import {PlusCircleFilled,UserOutlined,EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons"
// const { Search } = Input;
// const HomeScreen = () => {

//     useEffect(()=>{

//     },[]);

//     return (
//         <div className="product_container1">
//             <div style={{width:200}}>
//                 <h1>Home</h1>
//                 <PlusCircleFilled
//                     style={{fontSize:42,color:"red"}}
//                 />
//                 <UserOutlined/>
//                 <Button block={false} shape="round" type="default" size="large">Default button</Button><br/>
//                 <Button disabled={true} type="primary" size="small" >Primary button</Button><br/>
//                 <Button  type="link" >Primary button</Button><br/>
//                 <Button  onClick={()=>console.log()} loading={true} danger={true} type="primary" >Primary button</Button><br/>
//                 <Button type="primary" icon={<PlusCircleFilled/>}>ADD</Button>
//                 <Input />
//                 <InputNumber />
//                 <Search />
//                 <Input.Password
//                     placeholder="input password"
//                     iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//                 />
//             </div>
//         </div>
//     )
// }

// export default HomeScreen;