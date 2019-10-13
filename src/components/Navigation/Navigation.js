import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import {breakpoints} from '../../utils/breakpoint';
import {getBreakpoint} from '../../utils/breakpoint';


class Navigation extends React.PureComponent {
    state = {};
    constructor(state) {
        super();
        state = {
            breakpoint: breakpoints.MOBILE,
        }
    }

    render() {
        return this.state.breakpoint === breakpoints.DESKTOP ? <DesktopNavigation /> : <MobileNavigation />;
    }
}


export default Navigation;