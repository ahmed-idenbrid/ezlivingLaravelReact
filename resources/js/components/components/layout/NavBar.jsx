import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import {RiWhatsappFill} from 'react-icons/ri';
import {GrFacebookOption} from 'react-icons/gr';
import {IoLogoInstagram} from 'react-icons/io';
import {ImPhone, ImAddressBook} from 'react-icons/im';
import {CgProfile} from 'react-icons/cg';
export default class NavBar extends React.Component{
    render()
    {
        return(
            <Fragment>
                <div className="NavBarContainer container-fluid">
                        <figure className="LogoCompany" style={{backgroundImage:`url(../assets/img/ez_living_logo_no background.png)`}}></figure>
                        <div className="NavItems">
                            <ul className="SocialIcons">
                                <li><a href="" rel="noopener noreferrer"><RiWhatsappFill/></a></li>
                                <li><a href="" rel="noopener noreferrer"><IoLogoInstagram/></a></li>
                                <li><a href="" rel="noopener noreferrer"><GrFacebookOption/></a></li>
                                <li><a href="" rel="noopener noreferrer"><ImPhone/></a></li>
                            </ul>
                            <ul className="BkMrkPrfLst">
                                <li><a href="" rel="noopener noreferrer"><ImAddressBook/></a></li>
                                <li><span></span></li>
                                <li><a href="" rel="noopener noreferrer"><CgProfile/></a></li>
                            </ul>
                        </div>
                </div>
            </Fragment>
        )
    }
}