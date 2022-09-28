import React, { Component } from 'react'
import FormSV from './FormSV'
import TableSV from './TableSV'

export default class BTForm extends Component {
  render() {
    return (
      <div className='container'>
      <FormSV/>
      <TableSV/>
      </div>
    )
  }
}
