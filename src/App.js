import './styles/app.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <main className="currency-wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </main>
    </GlobalProvider>
  );
};

export default App;
