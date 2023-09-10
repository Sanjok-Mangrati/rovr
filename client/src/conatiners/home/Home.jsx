import React from 'react'
import { Header, Navbar } from '../../components/index';

const Home = () => {
  return (
    <header id="home">
      <nav className="rovr__navigation">
        <Navbar />
      </nav>
      <div className="rovr__header">
        <Header />
      </div>
    </header>
  )
}

export default Home