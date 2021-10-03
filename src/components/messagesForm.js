import React, {useState} from 'react';

import { useHistory } from 'react-router-dom';
//do i need to import something else?

//how to recover from post element

const BASE = "https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/";

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



//

//message:
//  _id
//  content
//  post
//  fromUser
//  createdAt
//  updatedAt
//  __v

