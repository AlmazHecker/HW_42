import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([
    {name: 'Almaz', age: 16, id: 1},
    {name: 'Чупапи', age: 20, id: 2},
  ]);
  
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { 
          name: uName, 
          age: uAge, 
          id: Math.random().toString() 
        },
      ] }) };

    function onDeleteUser(userId){
      setUserList( (prevUsers) => {
        const updatedUsers = prevUsers.filter(user => user.id !== userId);
        return updatedUsers;
      })
    }

    function onChangeUser(userId, name, age){
      setUserList( prevUsers => {
        const updatedUsers = prevUsers.map(user => {
          if(user.id === userId){
            user.name = name
            user.age = age
          }
          return user;
        })
        return updatedUsers;
      })
    }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} onDelete={onDeleteUser} onChangeUser={onChangeUser}/>
    </>
  );
}

export default App;
