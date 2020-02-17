import React from 'react'
import uuid from 'uuid'
import './App.css'

const friends = [
  { id: uuid(), fname: 'Jane', lname: 'doe', married: false },
  { id: uuid(), fname: 'john', lname: 'smith', married: false },
]
const initialState = {
  formValues: {
    fname: '',
    lname: '',
  },
  friends,
  favFriendId: friends[0].id
}

export default function App() {
  return (
    <div className="App">
      {/* here we can add a new friend */}
      <h4>Add a new friend (married defaults to false)</h4>
      <form className='form' onSubmit={Function.prototype}>
        <label>first name
        <input
            value=''
            onChange={Function.prototype}
            name='fname'
          />
        </label><br />

        <label>last name
        <input
            value=''
            onChange={Function.prototype}
            name='lname'
          />
        </label><br />

        <input type='submit' />
      </form>

      {/* list of current friends */}
      <h4>My friends:</h4>
      {
        initialState.friends.map(fr => (
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
      <h4 className='fav'>My fav friend is {
        initialState.friends
          .find(fr => fr.id === initialState.favFriendId)
          .fname
      }</h4>
    </div>
  )
}
