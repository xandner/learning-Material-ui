import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(2)
        }
    }
}))

export  function useForm(initialFValues) {
    const handleInputChanges = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })

    }
    const [values, setValues] = useState(initialFValues)
    return {
        values,
        setValues,
        handleInputChanges
    }
}
export  function Form (props){
    const classes = useStyle()
    return(
        <form className={classes.root}>
            {props.children}
        </form>
    )
}
