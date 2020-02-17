import React from 'react'
import uuid from 'uuid'
import './App.css'

const someId = uuid()
const anotherId = uuid()

const initialState = {
  formValues: {
    fname: '',
    lname: '',
  },
  friends: [
    { id: someId, fname: 'Jane', lname: 'Doe', married: false },
    { id: anotherId, fname: 'john', lname: 'Smith', married: false },
  ],
  favFriendId: someId,
}

function reducer(state, action) {
  return state
}

export default function App() {
  const state = initialState
  return (
    <div className="App">
      {/* here we can add a new friend */}
      <h4>Add a new friend (married defaults to false)</h4>
      <form className='form' onSubmit={Function.prototype}>
        <label>first name
        <input
            value={state.formValues.fname}
            onChange={Function.prototype}
            name='fname'
          />
        </label><br />

        <label>last name
        <input
            value={state.formValues.lname}
            onChange={Function.prototype}
            name='lname'
          />
        </label><br />

        <input type='submit' />
      </form>

      {/* list of current friends */}
      <h4>My friends:</h4>
      {
        state.friends.map(fr => (
          <div
            key={fr.id}
          >
            {fr.fname} {fr.lname} is{fr.married ? ' ' : ' NOT '}married
            <button onClick={Function.prototype}>Mark Married</button>
            <button onClick={Function.prototype}>Fav</button>
          </div>
        ))
      }

      {/* my current favorite friend */}
      <h4 className='fav'>My favorite friend is {
        state.friends
          .find(fr => fr.id === state.favFriendId)
          .fname
      }</h4>
    </div>
  )
}
