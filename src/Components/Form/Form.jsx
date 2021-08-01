import React from 'react';
import Input from "../Input";
import useForm from "../../CustomHooks/useForm";
import makeInitialValues from "../../Utils/makeInitialValues";
import makeValidateRules from "../../Utils/makeValidateRules";

const Form = ({properties, fields, buttons}) => {

    const inputFieldsNames = makeInitialValues(fields.inputs)
    const validateRules = makeValidateRules(fields.inputs);

    const {handleChange, handleSubmit, handleBlur, values, touched, errors, isSubmitting} = useForm(inputFieldsNames, submit, validateRules);

    const inputs = fields.inputs?.length > 1
        && fields.inputs.map(item => <li key={item.id}>
            <Input {...item}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values[item.name]}
                   error={(Object.keys(touched).includes(item.name) || isSubmitting)
                   && (errors[item.name] && errors[item.name][Object.keys(errors[item.name]).find(key => errors[item.name][key])])}
            />
        </li>);

    function submit() {

    }

    return (
        <form action={properties.action} noValidate={properties.declineBrowserValidation} onSubmit={handleSubmit}>
            {inputs.length > 1
                ? <ul>{inputs}</ul>
                : <Input {...fields.inputs[0]}/>
            }
            <button type='submit'>sub</button>
        </form>
    );
};

export default Form;