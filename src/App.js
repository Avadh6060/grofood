import React from 'react';
import './App.css';
import Navbar from '../src/Component/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/Component/Home';
import Footer from '../src/Component/Footer';
import { Provider } from 'react-redux';
import { Store } from '../src/Redux/Store';
import ProductDetails from './Component/ProductDetails';


function App() {
  return (
    <>
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/ProductDetails/:id" component={ProductDetails}></Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>



    </>
  );
}

export default App;
