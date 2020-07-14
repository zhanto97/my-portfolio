import React from 'react';
import  {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import About from './containers/About/About'
import Blog from './containers/Blog/Blog'
import CV from './containers/CV/CV'
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navigation />
        <Switch>
          <Route path="/cv" exact component={CV}></Route>
          <Route path="/blog/:id" component={Blog}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/" exact component={About}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
