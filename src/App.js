import FeedbackList from './Components/FeedbackList';
import Header from './Components/Header';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './Context/FeedbackContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './Components/AboutIconLink';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              exact='true'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />

            <Route
              path='/about'
              element={<AboutPage />}
            />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
