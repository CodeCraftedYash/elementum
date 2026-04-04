import './App.css'
import Feature from './section/feature/Feature'
import Footer from './section/footer/Footer'
import Nav from './section/header/navbar/Nav'
import Hero from './section/hero/Hero'
import Serivces from './section/services/Serivces'
import Testimonials from './section/testimonials/Testimonials'

function App() {

  return (
    <main className='overflow-x-hidden'>
      <Nav />
      <Hero />
      <Feature />
      <Serivces />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
