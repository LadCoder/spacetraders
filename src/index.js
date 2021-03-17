import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import _ from 'lodash';
import Overview from './components/pages/Overview'
import Loans from './components/pages/Loans'
import Fleets from './components/pages/Fleets'
import Settings from './components/pages/Settings'

import styles from './index.css';

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={styles.app}>
        <Router>
          <Sidebar visible={sidebar} onChange={showSidebar}/>
          <Switch>
            <Route path='/' exact component={Overview}/>
            <Route path='/loans' component={Loans}/>
            <Route path='/fleets' component={Fleets}/>
            <Route path='/settings' component={Settings}/>
          </Switch>
        </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));