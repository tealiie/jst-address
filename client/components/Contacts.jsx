import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="contact">
        <h1> {this.props.name} </h1>
        <h1> {this.props.phone} </h1>
        <h1> {this.props.birthday} </h1>
        <h1> {this.props.details} </h1>
      </div>

      )
    }
})
