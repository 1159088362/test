import React from 'react'

export default class Detail extends React.Component {
  componentDidMount () {
    console.log(this.props.match.params, 2)
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.match.params, 1)
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}
