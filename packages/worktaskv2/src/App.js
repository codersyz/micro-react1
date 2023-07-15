import logo from './logo.svg';
import './App.css';
import groupBy from 'lodash/groupBy';
import sumBy from 'lodash/sumBy';
import dayjs from 'dayjs';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './component/home'
import Center from './component/center'
import About from './component/about'
import { NavLink } from 'react-router-dom';
import MicroApps from './micro-apps';
function App() {
  console.log(groupBy([{ count: 1 }, { count: 2 }], 'count'));
  console.log(sumBy([{ count: 1 }, { count: 2 }], 'count'));
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  console.log(window);

  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <nav>
          <NavLink to="/">首页</NavLink>
          <NavLink to="/center">个人</NavLink>
          <NavLink to="/about">关于</NavLink><br></br>
          <NavLink to="/app-react">微应用页面</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} extra />
          <Route path='/center' element={<Center />} extra />
          <Route path='/about' element={<About />} extra />
          <Route path='/home' element={<Home />} extra />
          {/* 模糊匹配 凡是以/开头的都会跳转到home*/}
        </Routes>
        <MicroApps apiPrefix='' />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
