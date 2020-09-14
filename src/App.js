import React from 'react';
import './App.scss';
import Header from './Header'
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route }
  from 'react-router-dom'
import Checkout from './Checkout';
import Books from './Books'
import ComputersAndAccessories from './ComputersAndAccessories'
import Clothing from './Clothing'
import HomeAndKitchen from './HomeAndKitchen'

function App() {
return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/books'>
            <Books />
          </Route>
          <Route path='/computers'>
            <ComputersAndAccessories />
          </Route>
          <Route path='/clothing'>
            <Clothing />
          </Route>
          <Route path='/kitchen'>
            <HomeAndKitchen />
          </Route>
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
