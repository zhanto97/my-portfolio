import React from 'react';
import  {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import About from './containers/About/About'
import Blog from './containers/Blog/Blog'
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navigation />
        {/* <Route path="/" exact component={About}></Route> */}
        <Switch>
          <Route path="/about" exact component={About}></Route>
          <Route path="/blog/:id" component={Blog}></Route>
          <Route path="/blog" component={Blog}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
