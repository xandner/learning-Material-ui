import React from "react";
import EmployeeForm from "./EmployeeForm";
import AccessibleIcon from "@material-ui/icons/Accessible";
import PageHeader from "../../Component/PageHeader";
import {makeStyles, Paper} from "@material-ui/core";

const useStyle=makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3),
    }
}))

export default function Employees (){
    const classes=useStyle()
    return(
        <>
            <PageHeader
                title={'new employee'}
                subTitle={'page desc'}
                icon={<AccessibleIcon fontSize={'large'}/>}

            />
            <Paper className={classes.pageContent}>
                <EmployeeForm/>
            </Paper>


        </>
    )
}
