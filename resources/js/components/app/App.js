import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import About from '../components/pages/About/About';
import Home from '../components/pages/Home/Home';
import NavBar from '../components/layout/NavBar';
import FootBar from '../components/layout/FootBar';
import axios from 'axios';


export default class App extends React.Component {
 render()
 {
    return(
        <Fragment>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
            </Switch>
            <FootBar/>
        </Fragment>
    );
}
}
