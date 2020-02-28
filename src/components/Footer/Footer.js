import React, {Component} from 'react';
import classes from './Footer.module.scss'

class Footer extends Component {
    render() {
        return (
            <footer className={"footer bg-light " + classes.Footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 my-auto h-100 text-center text-lg-left">
                            <ul className="list-inline mb-2">

                                <li className="list-inline-item">
                                    <a href="# ">About</a>
                                </li>
                                <li className="list-inline-item">
                                    <span>⋅</span>
                                </li>
                                <li className="list-inline-item">
                                    <a href="# ">Contact</a>
                                </li>
                                <li className="list-inline-item">
                                    <span>⋅</span>
                                </li>
                                <li className="list-inline-item">
                                    <a href="# ">Terms of &nbsp;Use</a>
                                </li>
                                {/*<li className="list-inline-item">*/}
                                {/*    <span>⋅</span></li>*/}
                                {/*<li className="list-inline-item">*/}
                                {/*    <a href="# ">Privacy Policy</a>*/}
                                {/*</li>*/}
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">© Company 2020. Все права....</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;