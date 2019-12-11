import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm.js'
import reducer from '../reducers/index.js'
import Events from './Events.js'
import AppContext from '../contexts/AppContext'

console.log({ AppContext })

const App = () => {

  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'Hello, I am Yasufumi222.'}>
      <div className='container-fluid'>
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}
export default App;
