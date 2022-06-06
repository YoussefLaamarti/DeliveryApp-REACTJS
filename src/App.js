import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Whatwedo from './Pages/Whatwedo';
import Hiring from './Pages/Hiring';
import Notfound from './Pages/Notfound';
import Login from './Pages/Login';
import HomeDeliv from './Pages/HomeDeliv';
import PackageCreation from './Pages/PackageCreation';


function App() {
  return (
    

    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        
        <main className='container mx-auto px-3 pb-12'>
        <Routes>
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/' element={<Home />} />
        <Route path='/whatwedo' element={<Whatwedo />} />
        <Route path='/Hiring' element={<Hiring />} />
        <Route path='/notfound' element={<Notfound />} />
        <Route path='/*' element={<Notfound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/deliv' element={<HomeDeliv />} />
        <Route path='/pacpac' element={<PackageCreation />} />
        

        

         </Routes> 
          
           </main>

        <Footer />
        </div>

      </Router>
  
  
  )
}

export default App;
