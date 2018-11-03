import React from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { AccountCircle, Dashboard, History, Lock, PowerSettingsNew } from '@material-ui/icons';

export const listItems = (
    <div style={{marginTop: 60}}>
        <NavLink to='/dashboard' className='nav-style'>
            <ListItem button>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
            </ListItem>
        </NavLink>
        {/* <NavLink to='/share' className='nav-style'> */}
        <ListItem button>
            <ListItemIcon>
                <History />
            </ListItemIcon>
            <ListItemText primary='History' />
        </ListItem>
        {/* </NavLink> */}
        <a 
            href='#' 
            // target='_blank' 
            className='nav-style'>
            <ListItem button>
                <ListItemIcon>
                    <Lock />
                </ListItemIcon>
                <ListItemText primary='Privacy Policy' />
            </ListItem>
        </a>
    </div>
);

export const otherListItems = (
    <div>
        <NavLink to='/account' className='nav-style'>
            <ListItem button>
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
                <ListItemText primary='My Account' />
            </ListItem>
        </NavLink>
        <ListItem button onClick={
            () => firebase.auth().signOut()
        }>
            <ListItemIcon>
                <PowerSettingsNew />
            </ListItemIcon>
            <ListItemText primary='Logout' />
        </ListItem>
    </div>
);
