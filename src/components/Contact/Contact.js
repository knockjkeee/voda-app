import React, {Component} from 'react';
import classes from './Contact.module.scss'

class Contact extends Component {
    render() {
        return (
            <div className={"call-to-action text-white text-center " + classes.Contact}
            name={"contact"}
            >
                <div className={"overlay " + classes.Overlay}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2 className="mb-4">Мы Вас заинтересовали? <br/>
                            Свяжитесь с нами по телефону!<br/>
                            84998887788 <br/>
                            или <br/>
                            Оставьте свою почту и мы свяжемся с вами</h2>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <form>
                                <div className="form-row">
                                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                                        <input
                                        className="form-control form-control-lg" type="email"
                                        placeholder="Введите свою почту..."/>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <button className="btn btn-primary btn-block btn-lg" type="submit">Отправить!
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;