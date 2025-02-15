// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/header.jsx'
import Main from './components/Main.jsx'
import Midsection from './components/Midsecrtion.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Navbar.jsx'


function App() {

  // const sidebarLinks = [
  //   { id: 1, text: 'CHARACTERS', url: '#', current: false },
  //   { id: 2, text: 'COMICS', url: '#', current: true },
  //   { id: 3, text: 'MOVIE', url: '#', current: false },
  //   { id: 4, text: 'TV', url: '#', current: false },
  //   { id: 5, text: 'GAMES', url: '#', current: false },
  //   { id: 6, text: 'COLLECTIBLES', url: '#', current: false },
  //   { id: 7, text: 'VIDEOS', url: '#', current: false },
  //   { id: 8, text: 'FANS', url: '#', current: false },
  //   { id: 9, text: 'NEWS', url: '#', current: false },
  //   { id: 10, text: 'SHOP', url: '#', current: false },
  // ];

  return (
    <>
      <Header />
      <Main />
      <Midsection />
      <Footer />
    </>
  )
}

export default App





