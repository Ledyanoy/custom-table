import React from 'react';
import clsx from "clsx";

import Input from "../Input";
import Button from "../Button";

import useForm from "../../CustomHooks/useForm";

import makeInitialValues from "../../Utils/makeInitialValues";
import makeValidateRulesObj from "../../Utils/makeValidateRules";

import styles from './Form.module.scss';

const Form = ({properties, fields, buttons, className}) => {

    const inputFieldsNames = makeInitialValues(fields)
    const validateRules = makeValidateRulesObj(fields, 'validation');
    const maskValidateRules = makeValidateRulesObj(fields, 'maskValidation');

    const {
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        touched,
        errors,
        isSubmitting
    } = useForm(inputFieldsNames, submit, validateRules, maskValidateRules);

    const inputs = fields.length > 1
        && fields.map(item => <li key={item.id} className={styles.fieldsListItem}>
            <Input {...item}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values[item.name]}
                   error={(Object.keys(touched).includes(item.name) || isSubmitting)
                   && (errors[item.name] && errors[item.name][Object.keys(errors[item.name]).find(key => errors[item.name][key])])}
            />
        </li>);

    const buttonsList = buttons.length > 1
        && buttons.map(item => <li key={item.id} className={styles.button}>
            <Button {...item} onClick={submit}/>
        </li>);

    function submit() {
    }

    return (
        <form action={properties.action}
              noValidate={properties.declineBrowserValidation}
              onSubmit={handleSubmit}
              className={clsx(styles.form, properties.className, className)}
        >
            {properties.legend && <legend className={styles.legend}>{properties.legend}</legend>}
            {inputs.length > 1
                ? <ul className={styles.fieldsList}>{inputs}</ul>
                : <Input {...fields.inputs[0]}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         classname={styles.fieldsListItem}
                         value={values[fields[0].name]}
                         error={(Object.keys(touched).includes(fields[0].name) || isSubmitting)
                         && (errors[fields[0].name] && errors[fields[0].name][Object.keys(errors[fields[0].name]).find(key => errors[fields[0].name][key])])}
                />
            }
            {buttons.length > 1
                ? <ul className={styles.buttonsList}>{buttonsList}</ul>
                : <Button {...buttons[0]} onClick={submit} className={styles.button}/>
            }
        </form>
    );
};

export default Form;
