import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export default class About extends React.Component{
    render()
    {
        return(
            <Fragment>
                <h1>About</h1>
                <Link to="/">Home</Link>
            </Fragment>
        )
    }
}