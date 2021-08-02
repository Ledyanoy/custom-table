import React from 'react';
import Input from "../Input";
import useForm from "../../CustomHooks/useForm";
import makeInitialValues from "../../Utils/makeInitialValues";
import makeValidateRules from "../../Utils/makeValidateRules";

const Form = ({properties, fields, buttons}) => {

    const inputFieldsNames = makeInitialValues(fields.inputs)
    const validateRules = makeValidateRules(fields.inputs, 'validation');
    const maskValidateRules = makeValidateRules(fields.inputs, 'maskValidation');

    const {handleChange, handleSubmit, handleBlur, values, touched, errors, isSubmitting} = useForm(inputFieldsNames, submit, validateRules, maskValidateRules);

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
                : <Input {...fields.inputs[0]}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values[fields.inputs[0].name]}
                         error={(Object.keys(touched).includes(fields.inputs[0].name) || isSubmitting)
                         && (errors[fields.inputs[0].name] && errors[fields.inputs[0].name][Object.keys(errors[fields.inputs[0].name]).find(key => errors[fields.inputs[0].name][key])])}
                />
            }
            <button type='submit'>sub</button>
        </form>
    );
};

export default Form;
