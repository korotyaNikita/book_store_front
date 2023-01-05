import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import General from './routes/General/General';
import Books from './routes/Books/Books';
import Blogs from './routes/Blogs/Blogs';
import Library from './routes/Library/Library';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <General />
    },
    {
      path: '/books',
      element: <Books />
    },
    {
      path: '/blogs',
      element: <Blogs />
    },
    {
      path: '/library',
      element: <Library />
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
