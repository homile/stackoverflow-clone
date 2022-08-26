import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Ask from './pages/Ask';
import Questions from './pages/Questions';
import MyPage from './pages/MyPage';
import Nav from './components/Nav';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/questions' element={<Questions></Questions>}></Route>
          {/* 질문보기 라우터 */}
          {/* <Route path="/questions/:id" element={<Main></Main>}></Route> */}
          <Route path='/users/login' element={<Login></Login>}></Route>
          <Route path='/users/signup' element={<Signup></Signup>}></Route>
          <Route path='/questions/ask' element={<Ask></Ask>}></Route>
          <Route path='/users/:id' element={<MyPage></MyPage>}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
