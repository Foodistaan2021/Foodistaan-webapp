import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../src/components/css/style.css';
import '../src/components/css/header.css';
import '../src/components/css/SpecialOffer.css';
import '../src/components/css/DealsOfTheDay.css';
import Home from './Home';
import Profile from './Profile/Profile';
import ProfileNoOrder from './Profile/P-components/profileNoOrder';
import ProfileOrders from './Profile/P-components/profileOrders';
import Address from './Profile/P-components/address';
import Payments from './Profile/P-components/payments';
import trackOrder from './Profile/P-components/trackOrder';
import notifications from './Profile/P-components/notifications';
import landingPage from './components/landingPage';
import Login from '../src/login';
import Menu from './delivery-dashboard/main-menu';
import RestaurantDetail from './Pages/RestaurantDetail';
import Checkout from './Pages/Checkout';
import ScrollToTop from './components/common/util/ScrollToTop';
import Blog from './Pages/Blog';
import AboutUs from './Pages/AboutUs';
import { AuthContext } from './store/auth-context';
import { Redirect } from 'react-router-dom';
import Gmap from './components/Gmap';
import BlogCreate from './components/Blogs/BlogFilter/BlogCreate';
import Blogdetail from './Pages/Blogdetail';
import LoginModal from './LoginModal';
// import Signin from './Signin';


const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <ScrollToTop>
        <Route exact path="/" component={landingPage} />{' '}
        <Route path="/explore" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/restaurant/:rid" component={RestaurantDetail} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/orders" component={ProfileNoOrder} />
        <Route path="/orders/1" component={ProfileOrders} />
        <Route path="/address" component={Address} />
        <Route path="/payments" component={Payments} />
        <Route path="/track-order" component={trackOrder} />
        <Route path="/notifications" component={notifications} />
        <Route path="/gmap" component={Gmap} />
        <Route path="/createblog" component={BlogCreate} />
        <Route path="/login">
          {authCtx.isLoggedIn ? <Redirect to="/" /> : <Login />}
      
          </Route>
        <Route path="/menu" component={Menu} />
        <Route path="/cart/:cid">
          {authCtx.isLoggedIn ? <Checkout /> : <Redirect to="/" />}
        </Route>
        <Route path="/blogs" component={Blog} />
        <Route path="/blogdetail/:id" component={Blogdetail} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </ScrollToTop>
    </Switch>
  );
};



export default App;
