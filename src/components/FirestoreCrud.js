import React, { useState, useEffect } from 'react';
import { db } from "../FirebaseConfig";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const FirestoreCrud = () => {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const newUser = async() =>{
      await addDoc(usersCollectionRef, {name: newName, age: Number(newAge) })
    }

    const updateUser = async(id, age) =>{
      const userDoc = doc(db, "users", id);
      const newFields = {age: age + 1} ;
      await updateDoc(userDoc, newFields);
    }

    const deleteUser = async(id) =>{
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc)
    }
 
    useEffect(() => {
        
        const getUsers = async() =>{
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(data)
        }

        getUsers()
    }, [])
    

  return (
    <div>
      <input type="text" placeholder='name' onChange={(e) => setNewName(e.target.value)}/>
      <input type="number" placeholder='age' onChange={(e) => setNewAge(e.target.value)} />
      <button onClick={newUser}>create user</button>
      {users.map((user) => {
        return (
          <div style={{textAlign: "center"}} key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={()=> {updateUser(user.id, user.age)}}>increase age</button>
            <button onClick={deleteUser(user.id)}>delete user</button>
          </div>
          );
      })}
    </div>
  )
}

export default FirestoreCrud ;