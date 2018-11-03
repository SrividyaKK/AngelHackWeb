import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Divider, Drawer, Hidden, IconButton, List, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// TODO: import CardList

import { Menu } from '@material-ui/icons';

import { listItems, otherListItems } from '../../components/Navigation/NavigationListItems';
import CardList from '../../components/CardList/CardList';
import navigationStyle from '../../assets/jss/navigationStyle.jsx';

// const drawerWidth = 240;

class NavDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
        }
    }

    handleDrawerToggle = () => {
        this.setState(state => ({
            mobileOpen: !state.mobileOpen
        }));
    }

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                Syndrive
                <Divider />
                <List>{listItems}</List>
            </div>
        );

        return (
            <div className={classes.root}>
                {/* <AppBar position='fixed' color='primary' className={classes.appBar}>
                    <Toolbar className='header'>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <Menu style={{ color: 'black' }} />
                        </IconButton>
                        <NavLink to='/dashboard' className='nav-style'>
                            <Typography
                                className='ml1'
                                variant='h4'
                                color='inherit'
                                style={{ fontFamily: 'Lato', fontWeight: 600 }}>
                                <span>Syndrive</span>
                            </Typography>
                        </NavLink>
                    </Toolbar>
                </AppBar> */}
                <Hidden mdUp>
                    <Drawer
                        variant='temporary'
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation='css'>
                    <Drawer
                        variant='permanent'
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content} style={{ background: '#f3f4f770' }}>
                    <div className={classes.toolbar} />
                    {/* <p>{uagent}</p> */}
                    <CardList />
                </main>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default connect()(withStyles(navigationStyle, { withTheme: true })(NavDrawer));
// export default NavDrawer;