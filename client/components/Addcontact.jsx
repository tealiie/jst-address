import React from 'react'


export default React.createClass({
  render() {
    return (
      <div id="Add-contact">
      createElemet(form, {className: 'ContactForm'},
      createElement('input', {
        type: 'text'
        placholder: 'Name (required)',
        value: this.props.value.name,
      }),
      createElement('input', {
        type: 'number'
        placholder: 'Phone (required)',
        value: this.props.value.phone,
      }),
      createElement('input', {
        type: 'number'
        placholder: 'Birthday (required)',
        value: this.props.value.birthday,
      }),
      createElement('input', {
        type: 'text'
        placholder: 'Details',
        value: this.props.value.details,
      }),
      createElement('button', {type: 'submit'}, "Add Contact")
    )
    </div>
  )
},
});
