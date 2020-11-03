import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from "../context/AuthService"
import {auth, db} from "../firebase"
import List from '../components/List'
import Form from '../components/Form'

const Room = () => {
  const [messages, setMessages] = useState([]);
  const user = useContext(AuthContext);

  const addMessage = (text) => {
    db.collection('messages').add({
      content: text,
      username: user.displayName,
      createdAt: new Date(),
    })
  }
  
useEffect(() => {
db.collection('messages').orderBy('createdAt').onSnapshot((querySnapshot) => {
  const data = querySnapshot.docs.map((doc) => doc.data())
    console.log(messages)
    setMessages(data)
})

  
  // db.collection('messages')
  // .get()
  // .then((querySnapshot) => {
  //   const messages = querySnapshot.docs.map((doc) => doc.data())
  //   console.log(messages)
  //   setMessages(messages)
  // })
}, [])


  return <div>
      <List messages={messages} />
      <Form addMessage={addMessage} />
    <button onClick={()=> auth.signOut()}>logout</button>
    </div>;
};

export default Room;