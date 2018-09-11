import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
// import rootReducer from './reducers'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit" className="submit-button">
          + To List
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
