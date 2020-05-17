import React from 'react'
import { Button } from 'antd'
import './styles.less'

export default class App extends React.Component {
  onClick = () => {
    this.props.history.replace('/home')
  }

  onBack = () => {
    // go(n): n 回退或者前进几步
    this.props.history.go(-1)
  }

  render() {
    return (
      <div>
        App 组件
        <Button type="primary" onClick={this.onClick}>跳到Home</Button>
        <Button onClick={this.onBack}>回退</Button>
      </div>
    )
  }
}
