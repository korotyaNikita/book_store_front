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
import Login from './routes/Auth/Login/Login';
import Registration from './routes/Auth/Registration/Registration';
import GuestLayout from './layouts/GuestLayot';
import AdminLayout from './layouts/AdminLayot';
import AuthLayot from './layouts/AuthLayot';
import Profile from './routes/Profile/Profile';
import ProfileEdit from './routes/Profile/Edit/ProfileEdit';
import Genres from './routes/Admin/Genres/Genres';
import GenresCreate from './routes/Admin/Genres/Create/GenresCreate';
import GenresShow from './routes/Admin/Genres/Show/GenresShow';
import GenresEdit from './routes/Admin/Genres/Edit/GenresEdit';
import ProfileBooks from './routes/Profile/Books/Books';
import BooksCreate from './routes/Profile/Books/Create/BooksCreate';
import ChapterCreate from './routes/Profile/Chapter/Create/ChapterCreate';
import BooksShow from './routes/Books/Show/BooksShow';
import Reader from './routes/Books/Reader/Reader';
import BlogsCreate from './routes/Blogs/Create/BlogsCreate';

function App() {  
  const [stateData, dispatchData] = React.useReducer(ReducerData, StateData)
  return (
      <ContextData.Provider value={{stateData, dispatchData}}>
        <Routes>
            <Route index element={<General />} />
            <Route path='/genres' element={<Books />} />
            <Route path='/books/:id' element={<BooksShow />} />
            <Route path='/books/:id/reader' element={<Reader />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route element={<AdminLayout />}>
              <Route path='/admin' element={<Admin />}>
                <Route path='roles' element={<Roles />} />
                <Route path='roles/create' element={<RolesCreate />} />
                <Route path='roles/:id' element={<RolesShow />} />
                <Route path='roles/:id/edit' element={<RolesEdit />} />
                <Route path='users' element={<Users />} />
                <Route path='users/create' element={<UsersCreate />} />
                <Route path='users/:id' element={<UsersShow />} />
                <Route path='users/:id/edit' element={<UsersEdit />} />
                <Route path='genres' element={<Genres />} />
                <Route path='genres/create' element={<GenresCreate />} />
                <Route path='genres/:id' element={<GenresShow />} />
                <Route path='genres/:id/edit' element={<GenresEdit />} />
              </Route>
            </Route>
            <Route element={<GuestLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/registration' element={<Registration />} />
            </Route>
            <Route element={<AuthLayot />}>
              <Route path='/profile/blogs/create' element={<BlogsCreate />} />
              <Route path='/profile' element={<Profile />} >
                <Route path='me' />
              </Route>
              <Route path='/library/:id' element={<Library />} />
              <Route path='/profile/edit' element={<ProfileEdit />} />
              <Route path='/profile/books' element={<ProfileBooks />} />
              <Route path='/profile/books/create' element={<BooksCreate />} />
              <Route path='/profile/books/:id/chapter/create' element={<ChapterCreate />} />
            </Route>
        </Routes>
      </ContextData.Provider>
  );
}

export default App;
