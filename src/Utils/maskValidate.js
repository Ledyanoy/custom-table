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
            validatedValue = value.replace(/\D/g, '').replace(/^[1,2,7]/, '');

            let c = validatedValue.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            let b = validatedValue.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            validatedValue = (c[1] === '8')
                ? (!c[2] ? '+7'
                : !c[3] ? `+7 ${c[2]}`
                    : !c[4] ? `+7 (${c[2]}) ${c[3]}`
                        : `+7 (${c[2]}) ${c[3]}-${c[4]}${(c[5] ? -c[5] : '')}`)
                : (!b[2] ? `+7 (${b[1]}`
                    : !b[3] ? `+7 (${b[1]}) ${b[2]}`
                        : !b[4] ? `+7 (${b[1]}) ${b[2]}-${b[3]}`
                            : `+7 (${b[1]}) ${b[2]}-${b[3]}${(b[4] ? -b[4] : '')}`)

            break;
        case onChangeValidationRules.email:
            if (/[а-яё]+/i.test(value)) break
            validatedValue = value.replace(/ /g, '');
            break;
        case onChangeValidationRules.date:
            let x = value.replace(/\D/g, '').replace(/^[4-9]/, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
            let day = (+x[1] > 31) ? '31' : x[1];
            let month = (+x[2] > 12) ? '12' : x[2];
            validatedValue = !month ? day : `${day}.${month}${(x[3] ? '.' + x[3] : '')}`;
            break;
        default:
            break;
    }

    return validatedValue;
}

export default maskValidate;
