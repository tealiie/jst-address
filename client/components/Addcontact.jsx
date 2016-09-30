import React from 'react'
import addContact from './App'

let addInput = null

export default React.createClass({
  render() {
    return (
      <div id="add-contact">
        <input type='text'
        placeholder='Name (required)' />

      <input
        type='number'
        placeholder='Phone (required)' />

      <input
        type='number'
        placeholder='Birthday (required)' />

      <input
        type='text'
        placeholder='Details'
        ref={input=> addInput = input} />

      {/* <button type='submit'>
      Add Contact</button>  */}


      <input
      type="submit"
      value="add"
      onClick={() => this.props.addContact(addInput.value)} />

      <a href="#" onClick={this.props.back}>back</a>
    </div>
  )
}
})
