import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom';
import Home from "./pages/Home";
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import './App.css';
import BookLayout from './BookLayout';
import BookRoutes from './BookRoutes';

function App() {
  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound />,
  //   }
  // ]);
  return (
    <>
      <Routes location="/books">
        <Route path='/books' element={<h1>Extra Content</h1>} ></Route>
      </Routes>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav> */}


      {/* NOTE: NavLink */}
      {/* <nav>
        <ul>
          <li><NavLink style={({ isActive }) => { return isActive ? { color: "red" } : {} }} to="/">
            {({ isActive }) => {
              return isActive ? "Active Home" : "Home"
            }}
            </NavLink></li>
          <li><NavLink to="/books">Books</NavLink></li>
        </ul>
      </nav> */}
      
      {/* NOTE: apply the css from app.css file */}
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/books">Books</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />

        {/*  README: standard routers */}
        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} /> */}

        <Route path='*' element={<NotFound />} />

        {/*  README: Nested routes */}
        {/* <Route path='/books' element={<BookLayout />} >
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route> */}

        {/*  NOTE: the route for this page is in BookRoutes.js file if you want to define in another file. */}
        {/* // ! path='/books/*' --- is important  */}
        <Route path='/books/*' element={<BookRoutes />} />
      </Routes>

      {/* README: use this when using useRoutes hook */}
      {/* {element} */}
    </>
  );
}

export default App;
