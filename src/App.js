import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Footer from './Components/layout/Footer';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Whatwedo from './Pages/Whatwedo';
import Hiring from './Pages/Hiring';
import Notfound from './Pages/Notfound';
import Login from './Pages/Login';
import HomeDeliv from './Pages/HomeDeliv';
import PackageCreation from './Pages/PackageCreation';
import CustomerCreation from './Pages/CustomerCreation';
import Affectation from './Pages/Affectation'
import ParentNavbar from './Components/layout/ParentNavbar'; 
import Logout from './Pages/Logout';
import AffectDeliv from './Pages/AffectDeliv';



function App() {
  return (
  
   
    <Router>
      <div className='flex flex-col justify-between h-screen'>
      <ParentNavbar/>
        
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
        <Route path='/packageCreation' element={<PackageCreation />} />
        <Route path='/customerCreation' element={<CustomerCreation />} />
        <Route path='/affect' element={<Affectation />} />  
        <Route path='/logout' element={<Logout />} />    
        <Route path='/affectDeliv' element={<AffectDeliv />} />    

         

        

         </Routes> 
          
           </main>

        <Footer />
        </div>

      </Router>
  
  
  )
}

export default App;
