import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id="list">
      {this.props.contacts}
      <ul>
          <li>Contacts</li>
      </ul>
        <form method="get" action="/addContact">
          <button type="submit"> add
            contact</button>
        </form>
        </div>
    )
  }
})
