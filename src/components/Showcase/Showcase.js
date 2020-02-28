import React, {Component} from "react";
import classes from './Showcase.module.scss'

class Showcase extends Component {
    render() {
        return (
            <div className={"showcase"} name={"showcase"}>
                <div className={"container-fluid p-0"}>
                    <div className={"row no-gutters"}>
                        <div className={"col-lg-6 order-lg-2 text-white showcase-img " + classes.first}
                             >
                            <span></span>
                        </div>
                        <div className={"col-lg-6 my-auto order-lg-1 showcase-text"
                        } style={{padding:"3rem"}}>
                            <h2>Интересный факт №1</h2>
                            <p className={"lead mb-0"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas. Vulputate mi sit amet mauris commodo quis imperdiet.
                                Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Metus dictum at tempor commodo ullamcorper.
                                Turpis egestas pretium aenean pharetra magna ac. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus.
                                Blandit massa enim nec dui nunc mattis. In ornare quam viverra orci sagittis eu volutpat odio. Auctor augue mauris augue neque.
                                Vel facilisis volutpat est velit egestas dui id ornare arcu. Senectus et netus et malesuada fames ac turpis egestas maecenas.
                                Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Non curabitur gravida arcu ac. Molestie nunc non blandit massa enim.
                                Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.</p>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className={"col-lg-6 text-white showcase-img " + classes.two}
                             ><span></span></div>
                        <div className={"col-lg-6 my-auto order-lg-1 showcase-text"
                        } style={{padding:"3rem"}}>
                            <h2>Интересный факт №2</h2>
                            <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Sed viverra tellus in hac. Diam sit amet nisl suscipit adipiscing bibendum est ultricies.
                                Consequat interdum varius sit amet mattis vulputate enim. Blandit turpis cursus in hac. Vel facilisis volutpat est velit.
                                Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ipsum suspendisse ultrices gravida dictum.
                                Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
                                Non curabitur gravida arcu ac tortor dignissim convallis. Auctor urna nunc id cursus metus aliquam eleifend.</p>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className={"col-lg-6 order-lg-2 text-white showcase-img " + classes.tree}
                        ><span></span></div>
                        <div className={"col-lg-6 my-auto order-lg-1 showcase-text"
                        } style={{padding:"3rem"}}>
                            <h2>Интересный факт №3</h2>
                            <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Nisl condimentum id venenatis a condimentum vitae sapien. Ac tortor dignissim convallis aenean. Dignissim sodales ut eu sem integer vitae.
                                Tellus elementum sagittis vitae et leo duis ut diam. Sed augue lacus viverra vitae congue eu consequat. Morbi leo urna molestie at elementum eu facilisis sed odio.
                                Ac orci phasellus egestas tellus rutrum tellus pellentesque. Faucibus scelerisque eleifend donec pretium vulputate sapien.
                                Urna id volutpat lacus laoreet non curabitur gravida arcu ac.</p>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Showcase