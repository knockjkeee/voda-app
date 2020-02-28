import React, {Component} from "react";
// import './NavBar.module.scss'
import classes from './NavBar.module.scss'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faAddressCard} from '@fortawesome/free-regular-svg-icons'
// import logo from '../../assets/img/bg-showcase-1.jpg'

import { Link } from "react-scroll";


class NavBar extends Component {

    render() {
        return (
            <div className={"navbar navbar-light  bg-light navigation-clean fixed-top "}>
                {/*<nav className={"navbar-inner header " + classes.navbarInner}>*/}
                <div className="container-fluid">
                    <div className={classes.brand}>
                        {/*WATER HOUSE*/}
                        WATER TO EVERY HOME
                    </div>
                    <ul className="nav navbar-nav navbar-right list-group list-group-horizontal">
                        <li className="nav-item ">
                            <Link className={"nav-link " + classes.navLink}  to="showcase"
                                   smooth={true}
                            >
                                Наши преимущества&nbsp;&nbsp;&nbsp;
                            </Link>
                        </li>
                        <li>
                            <Link className={"nav-link " + classes.navLink} to="timeline"
                                  smooth={true}
                            >
                                Этапы работы&nbsp;&nbsp;&nbsp;</Link>
                        </li>
                        <li>
                            <Link className={"nav-link " + classes.navLink} to="about"
                               smooth={true}
                            >Наша команда&nbsp;&nbsp;&nbsp;</Link>
                        </li>
                        <li>
                            <Link className={"nav-link " + classes.navLink} to="contact"
                               smooth={true}
                            >
                                Контакты&nbsp;&nbsp;&nbsp;</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar