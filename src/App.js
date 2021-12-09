import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './Pages/Home/About/About';
import Header from './Pages/Shared/Header/Header';
import Blog from './Pages/Home/Blog/Blog';
import Footer from './Pages/Home/Footer/Footer';





function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
         <Switch>
         <Route exact path='/'>
              <Home></Home> 
         </Route>
         <Route path='/home'>
              <Home></Home> 
         </Route>
         <Route path='/about'>
              <About></About>
         </Route>
         <Route path='/blog'>
              <Blog></Blog>
         </Route>
       </Switch>
       <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
