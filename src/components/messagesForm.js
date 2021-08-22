import React, {useState} from 'react';

import BASE from './api';

import { userHistory } from 'react-router-dom';
// do i need to import something else?

//how to recover from post element

const Messages = () => {

  const [message, setMessages] = useState({messages: ''})
  let history = useHistory()

  function updateMessage(e) {
    const newState = {...message}
    newState['messages'] = e.target.value
    setMessages(newState)

  }

  async function onSend(e) {
    e.preventDefault()
    await BASE.makeRequest('/', 'POST', message)
    history.push('.message')
  }

  return (
    <div id='messages-form-container'>
        <form>
          <div>
            <label>Messages</label>
            <input onChange={updateMessage} value={message.messages} type="text" />
          </div>
          <div>
          <button>Send</button>
          </div>
        </form>
    </div>
  )
}

export default Messages
