import React from "react";
import {AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar} from "@material-ui/core";
import NotificationsNoneIcone from '@material-ui/icons/NotificationsNone'
import SearchIcon from '@material-ui/icons/Search';

const useStyle=makeStyles( theme=>({
    root:{
        backgroundColor:'#e9b7b7',
        transform:"translateZ(0)"

    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f34a67'
        },
        '& .MuiSvgIcon-root':{
            marginRight:theme.spacing(2)
        },

    },
    btnRoot:{
        backgroundColor:'red'
    },
    btnLAble:{
        backgroundColor:'#a4b35f'
    }
}))

const Header = () => {
    const classes=useStyle()
    return (
        <AppBar position={'static'} className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item alignItems={'center'} >
                        <InputBase
                            className={classes.searchInput}
                            placeholder={'search'}
                            startAdornment={<SearchIcon fontSize={'small'}/> }

                        />
                    </Grid>
                    <Grid item sm>

                    </Grid>
                    <Grid item>
                        <IconButton classes={{root:classes.btnRoot,label:classes.btnLAble}}>
                            <Badge badgeContent={4} color={'primary'}>
                                <NotificationsNoneIcone/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Header
