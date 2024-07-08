import '../src/Components/Design.css';
import '../src/Components/Responsive.css';
import NavigationBar from './Components/NavigationBar';
import Profile from './Components/Profile';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Clients from './Components/Clients';
function App() {

  return (
    <>   

    <NavigationBar/>
    <div id='profile_section'>
      <Profile/>
    </div>
    <div id='about_section'>
      <About/>
    </div>
    <div id='clients_section'>
      <Clients/> 
    </div>
    <div id='contact_section'>
      <Contact/>
    </div>

    <Footer/>
    </>
  )
}

export default App
