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
            if (value.trim().split(' ').length > 2) {
                validatedValue = value.split(' ').map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase())).join(' ');
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
            validatedValue = value.replace(/\D/g, '').replace(/^[1,2,7]/, '')
            let c = validatedValue.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            console.log(c);
            validatedValue = !c[2] ? c[1]
                : !c[3] ? c[1] + ' ' + c[2]
                    : !c[4] ? c[1] + ' ' + '(' + c[2] + ') ' + c[3]
                        : c[1] + ' ' + '(' + c[2] + ') ' + c[3] + '-' + c[4] + (c[5] ? '-' + c[5] : '');
            // validatedValue = validatedValue.replace(/^8|/, '+7')

            break;
        case onChangeValidationRules.email:
            if (/[а-яё]+/i.test(value)) break
            validatedValue = value.replace(/ /g, '');
            break;
        case onChangeValidationRules.date:
            let x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
            validatedValue = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? ('.' + x[3]) : '');
            break;
        default:
            break;

    }

    return validatedValue;


}

export default maskValidate;
