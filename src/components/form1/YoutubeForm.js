import React, {useState} from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
    FastField,
} from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError';
import ChakraButton from '../chrakra/ChakraButton'

const initialValues = {
    name: 'Alice',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: '',
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],
};

const savedValues = {
    name: 'Alice',
    email: 'alice@example.com',
    channel: 'lizzcode',
    comments: 'asd',
    address: '221b Baker Street',
    social: {
        facebook: 'facebook.com/something',
        twitter: 'twitter.com/something',
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],
};

const onSubmit = (values, onSubmitProps) => {
    console.log('Form data: ', values)
    console.log('Submit props:', onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
    social: Yup.object().shape({
        facebook: Yup.string().required('Required'),
        twitter: Yup.string().required('Required'),
    }),
    // phoneNumbers: Yup.array().string().min(0).required('Required'), ?
});

const validateComments = (value) => {
    let error;
    if (!value) {
        error = 'Required'
    }
    return error
};

export default function YoutubeForm() {

    const [formValues, setFormValues] = useState(null)

    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            // validateOnChange={false}
            // validateOnBlur={false}
            // validateOnMount
        >
            {formik => {
                console.log('Formik props', formik)
                return (
                    <Form>
                        <h2>Youtube Form</h2>
                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name' />
                            <ErrorMessage name='name' component={TextError} />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='email'>E-mail</label>
                            <Field type='text' id='email' name='email' />
                            <ErrorMessage name='email'>
                                {(errorMsg) => (
                                    <div className='error'>{errorMsg}</div>
                                )}
                            </ErrorMessage>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='channel'>Channel</label>
                            <Field
                                type='text'
                                id='channel'
                                name='channel'
                                placeholder='Youtube channel name'
                            />
                            <ErrorMessage
                                name='channel'
                                component={TextError}
                            />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='comments'>Comments</label>
                            <Field
                                as='textarea'
                                id='comments'
                                name='comments'
                                validate={validateComments}
                            />
                            <ErrorMessage
                                name='comments'
                                component={TextError}
                            />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='address'>Address</label>
                            <FastField name='address'>
                                {(props) => {
                                    const { field, meta } = props;
                                    // console.log('Render props ', props);
                                    return (
                                        <div>
                                            <input
                                                type='text'
                                                id='address'
                                                {...field}
                                            />
                                            {meta.touched && meta.error ? (
                                                <div>{meta.error}</div>
                                            ) : null}
                                        </div>
                                    );
                                }}
                            </FastField>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='facebook'>Facebook Profile</label>
                            <Field
                                type='text'
                                id='facebook'
                                name='social.facebook'
                            />
                            <ErrorMessage name='social.facebook'>
                                {(errorMsg) => (
                                    <div className='error'>{errorMsg}</div>
                                )}
                            </ErrorMessage>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='twitter'>Twitter Profile</label>
                            <Field
                                type='text'
                                id='twitter'
                                name='social.twitter'
                            />
                            <ErrorMessage
                                name='social.twitter'
                                component={TextError}
                            />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='primaryPh'>
                                {' '}
                                Primary phone number
                            </label>
                            <Field
                                type='text'
                                id='primaryPh'
                                name='phoneNumbers[0]'
                            />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='secondaryPh'>
                                {' '}
                                Secondary phone number
                            </label>
                            <Field
                                type='text'
                                id='secondaryPh'
                                name='phoneNumbers[1]'
                            />
                        </div>

                        <div className='form-control'>
                            <label>List of phone numbers</label>
                            <FieldArray name='phNumbers'>
                                {(fieldArrayProps) => {
                                    const {
                                        push,
                                        remove,
                                        form,
                                    } = fieldArrayProps;
                                    const { values } = form;
                                    const { phNumbers } = values;
                                    return (
                                        <div>
                                            {phNumbers.map(
                                                (phNumber, index) => (
                                                    <div key={index}>
                                                        <Field
                                                            name={`phNumbers[${index}]`}
                                                        />
                                                        {index > 0 && (
                                                            <button
                                                                type='button'
                                                                onClick={() =>
                                                                    remove(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                {' '}
                                                                -{' '}
                                                            </button>
                                                        )}
                                                        <button
                                                            type='button'
                                                            onClick={() =>
                                                                push('')
                                                            }
                                                        >
                                                            {' '}
                                                            +{' '}
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    );
                                }}
                            </FieldArray>
                        </div>

                        {/* Manually triggering validation */}
                        {/* 
                        <button type='button' onClick={()=> formik.validateField('comments')}>
                            Validate comments
                        </button>
                        <button type='button' onClick={()=> formik.validateForm()}>
                            Validate all
                        </button>
                       
                        <button type='button' onClick={()=> formik.setFieldTouched('comments')}>
                            Visited comments
                        </button>
                        <button type='button' onClick={()=> formik.setTouched({
                            name: true,
                            email: true,
                            channel: true,
                            comments: true
                        })}>
                            Visited fields
                        </button> 
                        */}

                        {/* <button type='submit' disabled!(formik.dirty && formik.isValid)}>Submit</button> */}
                        {/* <button type='submit' disabled={={!formik.isValid}>Submit</button> */}
                        
                        <ChakraButton type='reset'>Reset</ChakraButton>             
                        <ChakraButton mt={2} type='button' onClick={()=> setFormValues(savedValues)}>Load Saved data</ChakraButton>
                        <ChakraButton mt={2} type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</ChakraButton>
                    </Form>
                )
            }}
        </Formik>
    );
}
