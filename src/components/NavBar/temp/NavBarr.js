import React, {Component} from "react";
import classes from './NavBar.modulee.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import logo from '../../assets/img/bg-showcase-1.jpg'


class NavBarr extends Component {
    render() {
        return (
            <div className={"navbar navbar-fixed-top"}>
                <nav className={"navbar-inner header"}>
                    <div className="container">
                        <div className="brand">
                            IN THE CLOUDS
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}

export default NavBarr