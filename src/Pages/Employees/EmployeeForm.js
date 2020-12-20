import React, {useEffect, useState} from "react";
import {Grid, makeStyles, TextField} from "@material-ui/core";
import {useForm, Form} from "../../Component/UseForm";



const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDAte: new Date(),
    isPermanent: false,
}

export default function EmployeeForm() {


    const {values, setValues, handleInputChanges} = useForm(initialFValues)

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name={'fullName'}
                        variant={'outlined'}
                        label={'full name'}
                        onChange={handleInputChanges}
                        value={values.fullName}
                    />
                    <TextField
                        name={'email'}
                        variant={'outlined'}
                        label={'email'}
                        onChange={handleInputChanges}
                        value={values.email}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </Form>
    )
}
