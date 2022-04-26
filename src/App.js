import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import {Applications1,AllApplications,AddNewApp} from './pages/Application'
import {ShopifyStores,AllShopifyStores,AddNewShop} from './pages/Shopify Stores'
import {AuthenticationProviders,AllAuthenticationProviders,AddNewAuth} from './pages/Authentication Providers'
import {Providers,AllProviders,AddNewPro} from './pages/Providers'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
    <Sidebar/>
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/applications' element={<Applications1/>}/>
      <Route path='/allapplications' element={<Applications1/>}/>
      <Route path='/addnewapp' element={<AddNewApp/>}/>
      <Route path='/shopifystores' element={<ShopifyStores/>}/>
      <Route path='/allshopifystores' element={<ShopifyStores/>}/>
      <Route path='/addnewshop' element={<AddNewShop/>}/>
      <Route path='/authenticationproviders' element={<AuthenticationProviders/>}/>
      <Route path='/allauthenticationproviders' element={<AuthenticationProviders/>}/>
      <Route path='/addnewauth' element={<AddNewAuth/>}/>
      <Route path='/providers' element={<Providers/>}/>
      <Route path='/allproviders' element={<Providers/>}/>
      <Route path='/addnewpro' element={<AddNewPro/>}/>      
     
    </Routes>
    </Router>
    </div>
  );
}

export default App;