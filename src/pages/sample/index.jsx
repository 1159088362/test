import React from 'react';
import { Pagination } from 'antd';
import { post } from '@/utils/request'
import api from '@/services/api'
import Samlpedate from '@@/SampleDate'
import './style.less'
export default class index extends React.Component {
  state = {
    data: [],
    total: 0,
    current: 1,
  }
  componentDidMount() {
    post(`/api${api.sample}`,{ page: 1 }).then(res => {
      this.setState({
        data: res.result.list,
        total: res.result.count,
      })
    })
  }
  onChange = (pagination) => {
    post(`/api${api.sample}`, { page: pagination}).then(res => {
        this.setState({
          data: res.result.list,
          total: res.result.count,
          current: pagination,
        })
      })
  }
  render() {
    let { data,total,current } = this.state;
    return <div>  
     <div className="sam">
      {
        data.map( v => {
          return (
            <Samlpedate data={v} key={v.id} />
          )
        })
      }
     </div>
     <Pagination 
      current={current} 
      pageSize={21} 
      onChange={this.onChange} 
      total={Number(total)} 
     />
    </div>;
  }
}