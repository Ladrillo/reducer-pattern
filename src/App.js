import React, { useReducer } from 'react'
import uuid from 'uuid'
import './App.css'

const someId = uuid()
const anotherId = uuid()

// STEP 1 think of the shape of the state
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

// STEP 2 think of all action types that might be necessary
const INPUT_CHANGE = 'INPUT_CHANGE'
const ADD_FRIEND = 'ADD_FRIEND'
const MARK_FRIEND_MARRIED = 'MARK_FRIEND_MARRIED'
const MARK_FRIEND_FAVORITE = 'MARK_FRIEND_FAVORITE'

// STEP 3 build a reducer
// that takes into account all those types of actions
// Reducer "reduces" currentstate & action into FRESH NEW STATE
// Reducers are "pure" functions:
//   - always returning the same thing given the same args
//   - no side effects, no randomness...
// Two arguments (currentstate & an action -> { type, payload })
function reducer(state, action) {
  // let newId = uuid()
  // let date = Date.now()
  // console.log()
  return state
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
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
