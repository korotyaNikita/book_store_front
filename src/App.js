import './App.css';
import { Routes, Route } from "react-router-dom"
import React from 'react';
import General from './routes/General/General';
import Books from './routes/Books/Books';
import Blogs from './routes/Blogs/Blogs';
import Library from './routes/Library/Library';
import Admin from './routes/Admin/Admin';
import Roles from './routes/Admin/Roles/Roles';
import RolesShow from './routes/Admin/Roles/Show/RolesShow'
import RolesCreate from './routes/Admin/Roles/Create/RolesCreate'
import RolesEdit from './routes/Admin/Roles/Edit/RolesEdit';
import ContextData from './context/Data/ContextData';
import StateData from './context/Data/StateData';
import ReducerData from './context/Data/ReduserData';
import Users from './routes/Admin/Users/Users';
import UsersShow from './routes/Admin/Users/Show/UsersShow';
import UsersCreate from './routes/Admin/Users/Create/UsersCreate';
import UsersEdit from './routes/Admin/Users/Edit/UsersEdit';

function App() {  
  const [stateData, dispatchData] = React.useReducer(ReducerData, StateData)
  return (
      <ContextData.Provider value={{stateData, dispatchData}}>
        <Routes>
            <Route index element={<General />} />
            <Route path='/books' element={<Books />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/library' element={<Library />} />
            <Route path='/admin' element={<Admin />}>
              <Route path='roles' element={<Roles />} />
              <Route path='roles/create' element={<RolesCreate />} />
              <Route path='roles/:id' element={<RolesShow />} />
              <Route path='roles/:id/edit' element={<RolesEdit />} />
              <Route path='users' element={<Users />} />
              <Route path='users/create' element={<UsersCreate />} />
              <Route path='users/:id' element={<UsersShow />} />
              <Route path='users/:id/edit' element={<UsersEdit />} />
            </Route>
        </Routes>
      </ContextData.Provider>
  );
}

export default App;
