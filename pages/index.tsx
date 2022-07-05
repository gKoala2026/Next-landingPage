import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import First from '../components/First'
import Footer from '../components/Footer'


const Home: NextPage = () => {
  return (
    <div >
      <Header />
      <First />
      <Footer />
    </div>
  )
}

export default Home
