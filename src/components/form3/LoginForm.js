import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../form2/FormikControl'
import ChakraButton from '../chrakra/ChakraButton'

export default function LoginForm() {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (   
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}    
        >
            {
                formik => {
                    return (
                        <Form>
                            <h2>Login Form</h2>
                            <FormikControl control='chakrainput' type='email' label='Email' name='email' />
                            <FormikControl control='chakrainput' type='password' label='Password' name='password'/>
                            <ChakraButton mt={4} disabled={!formik.isValid} type='submit'> Submit</ChakraButton>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}
