import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './coponents/Header';
import Home from './coponents/Home';
import Footer from './coponents/Footer';
import Sidebar from './coponents/Sidebar';
import Buttons from './coponents/Pages/Buttons';
import Texts from './coponents/Pages/Texts';
import Icons from './coponents/Pages/Icons';
import NotFoundPage from './coponents/Pages/NotFoundPage';
import Preloader from './coponents/Pages/Preloader';
import Forms from './coponents/Pages/Forms';
import Lists from './coponents/Pages/Lists';
import RadioButton from './coponents/Pages/RadioButton';
import CheckBoxes from './coponents/Pages/CheckBoxes';
import Backgrounds from './coponents/Pages/Backgrounds';

function App() {
  return (
    <React.Fragment>
      <div className="flexible-content">
      <Router>
        <Header />
        <Sidebar />
        <main id="content" className="p-4">
          <div className="m-4 white">
          <Route exact path="/" component={Home} />
          <Route path="/button" component={Buttons} />
          <Route path="/text" component={Texts} />
          <Route path="/icon" component={Icons} />
          <Route path="/preloader" component={Preloader} />
          <Route path="/form" component={Forms} />
          <Route path="/list" component={Lists} />
          <Route path="/radiobutton" component={RadioButton} />
          <Route path="/checkbox" component={CheckBoxes} />
          <Route path="/background" component={Backgrounds} />


          {/* <Route component={NotFoundPage} /> */}
          </div>
        </main>
        <Footer />
      </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
