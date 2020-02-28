import React, {Component} from "react";
import classes from './NavBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import logo from '../../assets/img/bg-showcase-1.jpg'


class NavBar extends Component {
    render() {
        return (
            <nav className={"navbar navbar-light navbar-expand bg-light navigation-clean fixed-top " + classes.NavBar}>
                <div className="container">
                    <img src={logo} className={classes.Image} alt={"#"}/>


                    <a className="navbar-brand" data-bs-hover-animate="pulse" href={"# "}
                    > ООО "Бурим все что видим"
                    </a>

                    {/*<FontAwesomeIcon icon={faAddressCard} />*/}
                    <a className="navbar-brand" data-bs-hover-animate="pulse" href={"# "}
                    >84998877441
                    </a>
                    {/*<button*/}
                    {/*    data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">*/}
                    {/*</button>*/}

                    {/*<div className="collapse navbar-collapse" id="navcol-1">*/}
                    {/*    <a className="btn btn-primary ml-auto" role="button" href={'d'}>Sign In</a>*/}
                    {/*</div>*/}
                </div>

            </nav>
        )
    }
}

export default NavBar