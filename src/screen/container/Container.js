import React  from "react";
import {Link} from 'react-router-dom';
import {
    UserOutlined,
    DownOutlined,
    SettingOutlined, 
    LogoutOutlined,
    HomeFilled,
    TeamOutlined,
    SwitcherOutlined,
    ImportOutlined
} from "@ant-design/icons";
import {Dropdown,Menu,Space,Spin} from "antd";
import LoadingCenter from "../../component/loading/LoadingCenter";
const Container = (props) => {
    const is_login = localStorage.getItem("is_login");
    const username = localStorage.getItem("username");
    const handleLogout = () => {
        localStorage.setItem("is_login","false");
        window.location.href = "/login"
    }
    const menu = (
        <Menu
            style={{width:150}}
            items={[
                {
                    label : <Link to="/profile">Profile</Link>,
                    icon : <UserOutlined />
                },
                {
                    label : <Link to="/setting">Setting</Link>,
                    icon : <SettingOutlined />,
                    disabled : true
                },
                {
                    label : <Link to="/login">Logout</Link>,
                    icon : <LogoutOutlined />,
                    danger : true
                }
            ]}  
        />
    );

    return(
        <div>
            
            {is_login == "true" ?  
                <div className='main_menu'>
                    <div>
                        <Link className='item_menu' to="/">
                            <Space>
                                <HomeFilled/>HOME
                            </Space>
                        </Link>
                        <Link className='item_menu' to="/student">
                            <Space>
                                <TeamOutlined/>STUDENT
                            </Space>
                        </Link>
                        <Link className='item_menu' to="/course">
                            <Space>
                                <SwitcherOutlined />COURSES
                            </Space>
                        </Link>
                        <Link className='item_menu' to="/about">
                            <Space>
                                < ImportOutlined/>TEACHER
                            </Space>
                        </Link>
                        <Link className='item_menu' to="/student_payment">
                            <Space>
                                < ImportOutlined/>CLASSROOM
                            </Space>
                        </Link>
                        <Link className='item_menu' to="/student_payment">
                            <Dropdown overlay={menu}>
                                <a className="item_menu" onClick={e => e.preventDefault()}>
                                <Space>
                                    MORE<DownOutlined />
                                </Space>
                                </a>
                            </Dropdown>
                        </Link>
                    </div>
                    <div>
                       
                        <Dropdown overlay={menu}>
                            <a className="item_menu" onClick={e => e.preventDefault()}>
                            <Space>
                                <UserOutlined/>
                                {username.toUpperCase()}
                                <DownOutlined />
                            </Space>
                            </a>
                        </Dropdown>
                    </div>
                    
                </div>
                :
                <div className='main_menu'>
                    <Link className='item_menu' to="/">Brand Name</Link>
                </div>
            }
            <div style={{height:600,padding:30}}>
                <Spin spinning={false}>
                    {props.children}
                </Spin>
            </div>
        </div>
    )
}

export default Container;