import Image from 'next/image'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Sliders from '../components/Sliders'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Sliders />
      <Cards />
    </div>
  )
}
