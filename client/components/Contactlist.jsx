import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id="list">
        {this.props.contacts}
        <ul>
            <li>Contacts</li>
        </ul>
        <a href="#" onClick={this.props.add}>Add New Contact</a>
      </div>
    )
  }
})
