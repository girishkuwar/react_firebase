import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase-config'
import { addDoc, collection, getDocs } from 'firebase/firestore'

function App() {
  const [newuser, setnewuser] = useState("");
  const [newage, setnewage] = useState("");

  const [users, setusers] = useState([]);
  const usersRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersRef, { name: newuser, age: newage });
  }
  useEffect(() => {

    const getusers = async () => {
      const data = await getDocs(usersRef);
      setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(users);
    }
    getusers();
  }, [])
  return (
    <div className="App">
      <label htmlFor="\">Name</label>
      <input type="text" placeholder='Enter name' onChange={(e) => { setnewuser(e.target.value) }} />
      <label htmlFor="\">Age</label>
      <input type="number" placeholder='Enter age' onChange={(e) => { setnewage(e.target.value) }} />
      <button onClick={createUser}>Create User</button>
      {
        users.map((i) => { return <div>Name : {i.name} | Age : {i.age}</div> })
      }
    </div>
  );
}

export default App;
