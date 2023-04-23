import './App.css';
import { Routes, Route } from "react-router-dom"
import General from './routes/General/General';
import Books from './routes/Books/Books';
import Blogs from './routes/Blogs/Blogs';
import Library from './routes/Library/Library';
import Admin from './routes/Admin/Admin';
import Roles from './routes/Admin/Content/Roles';

function App() {
  
  return (
    <Routes>
      <Route index element={<General />} />
      <Route path='/books' element={<Books />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/library' element={<Library />} />
      <Route path='/admin' element={<Admin />}>
        <Route path='roles' element={<Roles />} />
      </Route>
    </Routes>
  );
}

export default App;
