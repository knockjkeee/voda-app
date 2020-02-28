import React, {Component} from 'react';
import classes from './TimeLine.module.scss'
import logo1 from '../../assets/img/about/1.jpg'
import logo2 from '../../assets/img/about/2.jpg'
import logo3 from '../../assets/img/about/3.jpg'
import logo4 from '../../assets/img/about/4.jpg'

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class TimeLine extends Component {
    render() {
        return (
            <div className={"page-section"}
                 style={{
                     backgroundColor: "#f8f9fa"
                 }}
                 name={"timeline"}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center"
                        style={{
                            paddingTop: "2rem",
                        }}
                        >
                            <h2 className="section-heading text-uppercase">Этапы работы</h2>
                            <h3 className="section-subheading text-muted">Выполняем работы под ключ</h3>
                        </div>
                            <VerticalTimeline
                                className={classes.timelineall}
                                style={{
                                    paddingTop: "2rem",
                                    backgroundColor: "#f8f9fa"
                                }}
                            >
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Этап 1"
                                    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    iconStyle={{background: 'rgb(33, 150, 243)', backgroundImage: `url(${logo1})`}}
                                    // icon={logo1}
                                >
                                    <h3 className="vertical-timeline-element-title">Делаем раз</h3>
                                    <h4 className="vertical-timeline-element-subtitle">четко</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Этап 2"
                                    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    iconStyle={{background: 'rgb(33, 150, 243)', backgroundImage: `url(${logo2})`}}
                                    // icon={logo2}
                                >
                                    <h3 className="vertical-timeline-element-title">Делаем два</h3>
                                    <h4 className="vertical-timeline-element-subtitle">офигеть</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Этап 3"
                                    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    iconStyle={{background: 'rgb(33, 150, 243)', backgroundImage: `url(${logo3})`}}
                                    // icon={<WorkIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Делаем три</h3>
                                    <h4 className="vertical-timeline-element-subtitle">ничегосебе</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Этап 4"
                                    // iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                    iconStyle={{background: 'rgb(33, 150, 243)', backgroundImage: `url(${logo4})`}}
                                    // icon={<WorkIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Делаем четыре</h3>
                                    <h4 className="vertical-timeline-element-subtitle">дайте две</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date="Этап 5"
                                    // iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                                    iconStyle={{background: 'rgb(33, 150, 243)', backgroundImage: `url(${logo1})`}}
                                    // icon={<SchoolIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Делаем пять</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Мощь!!!!e</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date="Этап 6"
                                    // iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                                    iconStyle={{background: 'rgb(33, 150, 243)', backgroundImage: `url(${logo2})`}}
                                    // icon={<SchoolIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Делаем шесть</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Заткнись и забери все мои
                                        деньги</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date="Завершающий этап"
                                    // iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                                    iconStyle={{background: 'rgb(33, 150, 243)', backgroundImage: `url(${logo3})`}}
                                    // icon={<SchoolIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Финал</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Подгоняй камаз за бабками
                                        счастливчик</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>

                    </div>
                </div>

            </div>
        );
    }
}

export default TimeLine;