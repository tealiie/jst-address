import React from 'react'
import {Link} from 'react-router'

import ContactList from './ContactList'
import AddContact from './AddContact'
import Contacts from './Contacts'

export default React.createClass({
  getInitialState () {
    return {
      isAdding: false,
      contacts: []
    }
  },

  render() {
    var list = <ContactList add={this.add} contacts={this.state.contacts}/>
    var add = <AddContact back={this.back} addContact={this.addContact} />
    var contact = <Contacts back={this.contact} />

    if (this.state.isAdding) {
      list = null
    } else {
      add = null
    }

    return (
      <div>
      <h1>Address Book</h1>
      {list}
      {add}
      </div>
    )
  },

  add () {
    this.setState({
      isAdding: true,
      contacts: this.state.contacts
    })
  },

  back () {
    this.setState({
      isAdding: false,
      contacts: this.state.contacts
    })
  },

  addContact (contact) {
  let contacts = this.state.contacts
    contacts.push(contact)
    this.setState({
      isAdding: false,
      contacts: contacts
    })
  }
})
