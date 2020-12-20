import React from "react";
import {makeStyles,withStyles} from "@material-ui/core";

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: 'aquamarine'
    }
}



const SideMenu=(props)=> {
    const {classes}= props
    return (
        <div className={classes.sideMenu}>
            hh
        </div>
    )
}
export default withStyles(style)(SideMenu)
