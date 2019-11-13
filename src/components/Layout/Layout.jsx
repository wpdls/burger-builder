import React, {Component} from 'react';

import Aux from '../../hoc/Aux.jsx';
import './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;