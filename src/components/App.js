import React,{ useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm.js'
import reducer from '../reducers/index.js'
import Events from './Events.js'

const App = () => {

  const [state,dispatch] = useReducer(reducer,[])

  return (
    <div className='container-fluid'>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />

    </div>
  );
}
export default App;
