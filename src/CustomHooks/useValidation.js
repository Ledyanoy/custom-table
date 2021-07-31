import {useEffect, useState} from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState();
    const [maxLength, setMaxlength] = useState();

    useEffect(()=> {
        for (const validation in validations) {
            switch (validation) {
                case "maxLength":
                    value.length > validations[validation] ? setMaxlength(true) : setMaxlength(false);
                    break;
                case "isEmpty":
                    value.trim() ? setIsEmpty(false) : setIsEmpty(true);
                    break;
            }
         }
    }, [value]);

    return {isEmpty, maxLength}
}

export default useValidation;