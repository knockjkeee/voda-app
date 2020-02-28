import React, {Component} from "react";


class MainLayout extends Component {
    render() {
        return (
            <div>
                {/*<main>*/}
                    {this.props.children}
                {/*</main>*/}
            </div>
        )
    }
}

export default MainLayout


