import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Echart, Table, Form, Sample,} from './assembly'
export default class Router extends React.Component {
  render () {
    return (
        <Switch>
        <Route path="/echart" component={Echart} />
        <Route path="/form" component={Form} />
        <Route path="/sample" component={Sample} />
        <Route path="/table" component={Table} />
        <Redirect to="/echart" />
      </Switch>
    )
  }
}
