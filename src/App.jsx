
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/heder/Header'
import HeroSection from './component/HeroSectione/Herosaction'
import LeadershipBoard from './component/LeaderBord/Leaderbord'
import About from './component/Page/Aboute/Aboute'
import Donation from './component/Page/Donetione/Donetion'
import Service from "./component/Page/Servive/Service"
function App() {

  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <About />
      <Service />
      <LeadershipBoard/>
      <Donation />
      <Footer />
    </div>
  )
}

export default App
