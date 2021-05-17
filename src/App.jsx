import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <div className='flex flex-col h-screen'>
        <NavBar />
        <div className='prose-xl flex-grow'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  </Suspense>
);

export default App;
