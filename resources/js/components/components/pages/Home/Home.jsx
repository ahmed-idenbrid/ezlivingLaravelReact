import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component{
    render()
    {
        return(
            <Fragment>
                <h1>HomeOne</h1>
                <Link to="/about">About</Link>
            </Fragment>
        )
    }
}