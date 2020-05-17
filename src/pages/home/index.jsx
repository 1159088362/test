import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd'
import { NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '@/assets/11.png'
import users from '@/assets/user.png'
import Router from '@/router/content'
import './style.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
export default @connect ( state => {
  return {
    data:state.login.data
  }
})
class index extends React.Component {
  render() {
    const { data } = this.props
    return <div id='home'  >
        <Layout>
          <Header className="header">
          <div className="logo" >
            <div className='img'><img src={logo} alt='' /></div>
            <div className='sear'>
              <Search
                placeholder="search"
                onSearch={value => console.log(value)}
                style={{ width: 200 ,height:30 }}
              />
              <div className="user">
              <img src={users} alt="" />
              {data.user_name}
              </div>
            </div>
            </div>
          </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                 Dahboard ( 2 neww updates )
                <Icon type="user" className='icon'/>
               
              </span>
            }
          >
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                 Basic UI Elments
                <Icon type="laptop"  className='icon'/>
              </span>
            }
          >
              </SubMenu>
              <SubMenu
            key="sub3"
            title={
              <span>
                 Icons
                <Icon type="laptop"  className='icon'/>
              </span>
            }
          >
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <NavLink to="/form" activeClassName="check">
              <span>
                Form ELements
                <Icon type="laptop"  className='icon'/>
              </span>
              </NavLink>
            }
          >
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <NavLink to="/echart" activeClassName="check">
              <span>
                Charts
              <Icon type="notification"  className='icon'/>
              </span>
           </NavLink>
            }
          >
              </SubMenu>
              <SubMenu
            key="sub6"
            title={
              <NavLink to="/table" activeClassName="check">
              <span>
                 Table
                <Icon type="notification"  className='icon'/>
              </span>
              </NavLink>
            }
          >
              </SubMenu>
              <SubMenu
            key="sub7"
            title={
              <NavLink to="/sample" activeClassName="check">
              <span>
                 Sample Pages
                <Icon type="notification"  className='icon'/>
              </span>
              </NavLink>
            }
          >
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
        <Router />
        </Content>
      </Layout>
    </Layout>
  </Layout>,
    </div>;
  }
}