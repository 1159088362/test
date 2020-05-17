import React from 'react';
import {  message } from 'antd';
import { connect } from 'react-redux'
import { login } from '@/actions/login'
import { post } from '@/utils/request'
import './style.less';
export default @connect ( state => {
  return {

  }
},{
login
})
class index extends React.Component {
  login = () => {
    if (this.refs.user.value === '') {
      alert('用户名为空')
    }else if (this.refs.pwd.value === '') {
      alert('密码为空')
    } else {
      // this.props.login({username:this.refs.user.value,pwd:this.refs.pwd.value})
      post('/aps/index.php/home/v1/login',{username:this.refs.user.value,pwd:this.refs.pwd.value}).then((res)=>{
        message.info(res.message);
        if (parseInt(res.status) === 200) {
          this.props.login(res.data)
          this.props.history.push('/')
       }
		 }) 
    }
  }

  render() {
    return <div id='login'  >
         <div className="wrap">
          <p>SIGN IN</p>
          <p><input type="text" placeholder="USERNAME" ref='user' /></p>
          <p><input type="text" placeholder="PASSWORD" ref='pwd'/></p>
          <p><span>Not registered? </span><span  onClick={()=>{this.props.history.push('/reg')}}> Sign Up</span></p>
        <p><button onClick={()=>this.login()}>Sign In</button></p>
	   	</div>
    </div>;
  }
}