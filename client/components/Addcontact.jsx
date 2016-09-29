import React from 'react'

export default React.createClass({
  render() {
    return (
<div id="input">
      <form action="index.html">
        <input type="text" name="Name" value="">
        Name<br>
        <input type="text" name="Phone" value="">
        Phone<br>
        <input type="date" name="Birthday" value="">
        Birthday<br>
        <input type="text" name="Details" value="">
        Details<br>
    <button
        className="button-back" onClick={this.navigateBack}>
        Back
      </button>

      </div>
    )
  }
})
