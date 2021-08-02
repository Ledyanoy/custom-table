import {onChangeValidationRules} from "../Constants/validationRules";

const maskValidate = (value, name, maskValidateRules) => {
    let validatedValue = '';

    if (!Object.keys(maskValidateRules).includes(name)) return value;

    switch (maskValidateRules[name]) {
        case onChangeValidationRules.initials:
            if (value.startsWith(' ')) {
                validatedValue = value.trim();
                break;
            }
            validatedValue = value.replace(/[^а-яё -]/ig, '');
            if (value.trim().length) {
                validatedValue = validatedValue.replace(/\s\s+/g, ' ');
            }
            if (value.split(' ').length > 3) {
                validatedValue = validatedValue.trim();
            }
            break;
        case onChangeValidationRules.phoneNumber:
            if (value.startsWith(' ')) {
                validatedValue = value.trim();
                break;
            }
            validatedValue = value.replace(/\D/g, '');
            break;
        case onChangeValidationRules.email:
            if (/[а-яё]+/i.test(value)) break
            validatedValue = value.replace(/ /g,'');
            break;
        case onChangeValidationRules.date:
            value = value.replace(/\D/g, '');
            let x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
            validatedValue = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + (x[3] ? + x[3] : '');
            break;
        default:
            break;

    }

    return validatedValue;


}

export default maskValidate;
