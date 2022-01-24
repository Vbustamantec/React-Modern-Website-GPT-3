import React from 'react';
import {Article, Brand, Cta, Feature, Navbar} from './components/';
import {Blog, Features, Footer, Header, Possibility , Whatgpt3} from './containers';
import './App.css';

const App = () => {
  return <div className='App'>
          <div className='gradient__bg'>
            <Navbar />
            <Header />
          </div>
          <Brand />
          <Whatgpt3/>
          <Features/>
          <Cta/>
          <Blog/>
          <Footer/>
         </div>;
};

export default App;
