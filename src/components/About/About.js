import React, {Component} from 'react';
import logo1 from '../../assets/img/new/1.jpeg'
import logo2 from '../../assets/img/new/2.jpeg';
import logo3 from '../../assets/img/new/3.jpeg'
import classes from './About.module.scss'

class About extends Component {
    render() {
        return (
            <div>
                <div className={"testimonials text-center bg-light " + classes.About}
                     name={"about"}
                >
                    <div className="container">
                        <h2 className="mb-5">Наш коллектив</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mx-auto testimonial-item mb-5 mb-lg-0">
                                    <img
                                        className={"rounded-circle img-fluid mb-3 " + classes.Image} src={logo1}
                                        alt={"#"}
                                    />
                                    <h5>Сергей П.</h5>
                                    <p className="font-weight-light mb-0">CEO компании! Идейный вдохновитель</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="mx-auto testimonial-item mb-5 mb-lg-0">
                                    <img
                                        className={"rounded-circle img-fluid mb-3 " + classes.Image} src={logo2}
                                        alt={"#"}
                                    />
                                    <h5>Сергей Г.</h5>
                                    <p className="font-weight-light mb-0">Маркетинговый директор. Креатив и риски, это к
                                        нему.</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="mx-auto testimonial-item mb-5 mb-lg-0">
                                    <img
                                        className={"rounded-circle img-fluid mb-3 " + classes.Image}
                                        src={logo3}
                                        alt={"# "}
                                    />
                                    <h5>Станислав К. </h5>
                                    <p className="font-weight-light mb-0">Технический директор! Если есть мотор, то это
                                        ко мне</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;