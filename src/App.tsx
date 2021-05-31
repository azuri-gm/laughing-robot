import { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import messagesEN from './translations/en.json';
import messagesES from './translations/es.json';
import { RootState, TranslationMessages } from './types';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

const messages: TranslationMessages = {
  EN: messagesEN,
  ES: messagesES,
};

const App = (): JSX.Element => {
  const { selectedLang }: RootState = useSelector((state: RootState) => state);
  const languageCode = selectedLang || 'ES';

  const getLanguageMessages = (lang: string) => messages[lang];
  const currentMessages = getLanguageMessages(languageCode);
  return (
    <IntlProvider
      locale={selectedLang?.toLowerCase() || 'ES'}
      key={selectedLang || 'ES'}
      messages={currentMessages}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div className='flex flex-col h-screen'>
            <NavBar />
            <div className='flex-grow'>
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
    </IntlProvider>
  );
};

export default App;
