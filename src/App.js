import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Blog/Homepage';
import MyBlog from './pages/Blog/MyBlog';
import CreatePostPage from './pages/Blog/CreatePostPage';
import EditPost from './pages/Blog/EditPost';

import AuthPage from './pages/Blog/AuthPage';
import NavBar from './components/NavBar';

import { getUser } from './utilities/users-service';

import './App.css';




function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Homepage /> } />
        <Route path='/posts/new' element={ <CreatePostPage user={user} setUser={setUser} /> }/>
        <Route path='/myposts' element={ <MyBlog user={user} setUser={setUser} /> }/>
        <Route path='/edit' element={ <EditPost />} />
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
