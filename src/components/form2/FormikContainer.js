import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import ChakraButton from '../chrakra/ChakraButton'

export default function FormikContainer() {

    const dropDownOptions = [
        {key: 'Select an option', value: ''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'},
        {key: 'Option 3', value: 'option3'}
    ]

    const radioOptions = [
        {key: 'Option 1', value: 'roption1'},
        {key: 'Option 2', value: 'roption2'},
        {key: 'Option 3', value: 'roption3'}
    ]

    const checkboxOptions = [
        {key: 'Option 1', value: 'coption1'},
        {key: 'Option 2', value: 'coption2'},
        {key: 'Option 3', value: 'coption3'}
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = values => {
        console.log('Form data',  values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }
    
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            {
                formik => <Form>
                    <h2>Formik Form</h2>
                    <FormikControl control='input' type='email' label='Email' name='email' />
                    <FormikControl control='textarea' label='Description' name='description' />  
                    <FormikControl control='select' label='Select a topic' name='selectOption' options={dropDownOptions} />
                    <FormikControl control='radio' label='Radio topic' name='radioOption' options={radioOptions} />
                    <FormikControl control='checkbox' label='Checkbox topics' name='checkboxOption' options={checkboxOptions}/>
                    <FormikControl control='date' label='Pick a date' name='birthDate'/>                 
                    <ChakraButton type='submit'>Submit</ChakraButton>
                </Form>
            }
        </Formik>
    )
}
