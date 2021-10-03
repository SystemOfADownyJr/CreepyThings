import React from 'react';
import { useHistory } from 'react-router-dom';
//import { userHistory } from 'react-router-dom';

const AddMessage = () => {

    const defaultState = {messageText: ''}

    const [message, setMessage] = useState(defaultState)
    const [messageText, setMessageText] = useState('')

    let history = useHistory();

    function handleChange(e, stateKey) {
        if(stateKey === messageText) {
            setMessage(e.target.value)
        }
    }

    const newState = {...message}

    let value = e.target.value;

    newState[stateKey] = value;
    setMessage = newState
    console.log(messageText)

    async function onSubmit(e) {
        e.preventDefault();
        await makeRequest('/', 'POST', messageText);
        history.push('./addMessage')
    }

    return (
        <div id='messages-form-container'>
            <form>
              <div>
                <label>Messages</label>
                <input onChange={message} value={setMessageText} type="text" />
              </div>
              <div>
              <button>Send</button>
              </div>
            </form>
        </div>
      )

    
    // return (`
    //     <div>
    //         <form>
    //             <div>
    //                 <label>
    //                     Message
    //                 <label>
    //                 <input onChange = {} value = {} type="text"></input>
    //             </div>
    //         </form>
    //     </div>
    // `)
}

export default AddMessage;