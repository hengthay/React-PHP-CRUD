import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='list-user' element={<ListUser />}/>
        <Route path='create-user' element={<CreateUser />}/>
        <Route path='update-user/:id' element={<UpdateUser />}/>
        <Route path='delete-user/:id' element={<DeleteUser />}/>
      </Route>
    </Routes>
  )
}

export default App;
