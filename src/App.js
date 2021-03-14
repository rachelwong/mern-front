import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, About, Products, Product, Contact } from './pages'
import { NavBar, Footer} from './components'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/products/:productslug" component={Product} />
          <Route path="/contact" component={ Contact }/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
