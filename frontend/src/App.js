
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { register } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import ShippigScreen from './screens/ShippingScreen';
import SigninScreen from './screens/SigninScreen';


function App() {


  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
       <div className="brand">
           <button onClick={openMenu}>
           &#9776;
           </button>
           <Link to="/" >amazona</Link>
      
       </div>
       <div className="header-links">
           <a href="cart.html">Cart</a>
           {
             userInfo ? <Link to="/profile">{userInfo.name} </Link> : 
           
           <Link to="/signin">Sign In</Link>
           }
          
       </div>
    </header>
   <aside className="sidebar">
       <h3>Shopping Categories</h3>
       <button className="sidebar-close-button" onClick={closeMenu}>x</button>
       <ul>
           <li>
               <a href="index.html">Pants</a>
           </li>
           <li>
               <a href="shirts.html">Shirts</a>
           </li>
       </ul>
   </aside>
    <main className="main">
        <div className="content">
          <Route path="/placeorder" component={PlaceOrderScreen}/>
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippigScreen} />
          <Route path="/products" component={ProductsScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        
        </div>
    </main>
    <footer className="footer">
        All rights reserved.
    </footer>
</div>
</BrowserRouter>
   );
  }


export default App;
