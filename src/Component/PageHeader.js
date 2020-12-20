import React from "react";
import {Paper, Card, Typography, makeStyles} from "@material-ui/core";

const useStyles=makeStyles(theme=>({
    root:{
        backgroundColor:"#ee45a3fd"
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:"inline-block",
        padding:theme.spacing(2),
        color:'blue'
    },
    pageTitle:{
        paddingLeft:theme.spacing(2),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function PageHeader (props){
    const {title,subTitle,icon}=props
    const classes=useStyles()
    return(
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}

                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant={'h6'}
                        component={'div'}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant={'subtitle2'}
                        component={'div'}
                    >
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}
