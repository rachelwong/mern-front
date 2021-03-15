import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { Home, About, Products, Product, Contact, NotFound } from './pages'
import { NavBar, Footer} from './components'
function App() {
  return (
    <div className="App body">
      <Router>
        <NavBar />
        <main className="layout">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/product/:productslug" exact component={Product} />
            <Route path="/contact" component={Contact} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
