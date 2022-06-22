import {Link, Route, Routes} from 'solid-app-router';
import {lazy} from "solid-js";
import type { Component } from 'solid-js';
const SolidLogo = lazy(() => import('./SolidLogo'));
const Bookshelf = lazy(() => import('./Bookshelf'));
const BookDetail = lazy(() => import('./BookDetail'));

const App: Component = () => {
  return (
    <>
      <h1>My Site with Lots of Pages</h1>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/books'>Books</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SolidLogo />}/>
        <Route path="/books" element={<Bookshelf name="solid" />}/>
        <Route path="/books/:bookId" element={<BookDetail />}/>
      </Routes>
    </>
  );
};

export default App;
