import {useState, useEffect} from "react";
import validate from "../Utils/validate";
import maskValidate from "../Utils/maskValidate";

const useForm = (initialValues, callback, validateRules, maskValidateRules) => {
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: maskValidate(value, name, maskValidateRules)
        });
    };

    const handleBlur = event => {
        setTouched({
            ...touched,
            [event.target.name]: true
        });
        setErrors(validate(values, validateRules));
    };

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validate(values, validateRules));
        setIsSubmitting(true);
        callback();
    };

    useEffect(() => {
         callback();
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        touched,
        errors,
        isSubmitting
    };
};

export default useForm;
