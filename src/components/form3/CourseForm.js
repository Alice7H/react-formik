import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../form2/FormikControl'

export default function CourseForm() {

    const courseOptions = [
        {key: 'Select the course', value: ''},
        {key: 'React', value: 'react'},
        {key: 'Angular', value: 'angular'},
        {key: 'Vue', value: 'vue'},
    ]

    const checkOptions = [
        {key: 'HTML', value: 'html'},
        {key: 'CSS', value: 'css'},
        {key: 'JavaScript', value: 'javascript'},
    ]

    const initalValues = {
        email: '',
        bio: '',
        course: '',
        skills: '',
        courseDate: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        skills: Yup.string().required('Required'),
        courseDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (
        <Formik 
            initialValues={initalValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            { formik => {
                return(
                    <Form>
                        <FormikControl control='input' type='email' label='Email' name='email' />
                        <FormikControl control='textarea' label='Bio' name='bio' />
                        <FormikControl control='select' label='Course' name='course' options={courseOptions} />
                        <FormikControl control='checkbox' label='Skillset' name='skills' options={checkOptions} />
                        <FormikControl control='date' type='text' label='Course date' name='courseDate'/>
                        <button type='submit' disabled={!formik.isValid}>Submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
}
