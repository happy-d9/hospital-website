import './App.css';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./Components/Index";
import Services from "./Components/Services";
import Department from "./Components/Department";
import Doctors from "./Components/Doctors";
import Blog from "./Components/Blog";
import Blogdetail from './Components/Blog-detail';
import Contact from './Components/Contact';
import Gallary from './Components/Gallary';
import Aboutus from './Components/Aboutus';
import Faq from './Components/Faq';
import Pricelist from './Components/Price-list';
import AddDepartment from '../src/Components/hospital-back/AddDepartment';
import AddDoctor from '../src/Components/hospital-back/AddDoctor';
import AddPatient from '../src/Components/hospital-back/AddPatient';
import AddPayment from '../src/Components/hospital-back/AddPayment';
import AllDepartment from '../src/Components/hospital-back/AllDepartment';
import AllDoctor from '../src/Components/hospital-back/AllDoctor';
import AllPatient from '../src/Components/hospital-back/AllPatient';
import Payment from '../src/Components/hospital-back/Payment';
import Sign_up from '../src/Components/hospital-back/Sign_up';
import Home from '../src/Components/hospital-back/Home';
import Admin from '../src/Components/hospital-back/Admin'
import Consul from '../src/Components/hospital-back/Consul'
function App() {
  return(
    <div className="App">
      <>
      <Routes>
        <Route path="index" element={ <Index/> } />
        <Route path="services" element={ <Services/> } />
        <Route path="department" element={ <Department/> } />
        <Route path="doctors" element={ <Doctors/> } />
        <Route path="blog" element={ <Blog/> } />
        <Route path="blog-detail" element={ <Blogdetail/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="gallary" element={ <Gallary/> } />
        <Route path="aboutus" element={ <Aboutus/> } />
        <Route path="faq" element={ <Faq/> } />
        <Route path="price-list" element={ <Pricelist/> } />
         <Route path="admin" element={ <Admin/> } />
         <Route path="add-department" element={ <AddDepartment/> } />
        <Route path="add-doctor" element={ <AddDoctor/> } />
        <Route path="add-patient" element={ <AddPatient/> } />
        <Route path="add-payment" element={ <AddPayment/> } />
        <Route path="all-department" element={ <AllDepartment/> } />
        <Route path="all-doctor" element={ <AllDoctor/> } />
        <Route path="all-patient" element={ <AllPatient/> } />
        <Route path="payment" element={ <Payment/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="/" element={ <Sign_up/> } /> 
        <Route path="consult" element={ <Consul/> } /> 
      </Routes>
      </>
    </div>
  );
}

export default App;
