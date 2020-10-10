import React from 'react'
import Input from './Input'
import RadioButton from './RadioButton'
import Select from './Select'
import Textarea from './Textarea'
import CheckboxGroup from './CheckboxGroup'
import DatePicker from './DatePicker'

export default function FormikControl(props) {
    const { control, ...rest } = props
    switch(control) {
        case 'input': 
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButton {...rest}/>
        case 'checkbox':
            return <CheckboxGroup {...rest}/>
        case 'date':
            return <DatePicker {...rest}/>
        default: return null
    }
}