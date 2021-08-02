import {submitValidationRules} from "../Constants/validationRules";

const validate = (values, validateRules) => {
    let errors = {};
    for (const value in values) {
        if (!Object.keys(validateRules).includes(value)) return;
        for (const validate in validateRules[value]) {
            switch (validate) {
                case submitValidationRules.maxLength:
                    values[value].length > validateRules[value][validate]
                        ? errors[value] = {
                            ...errors[value],
                            maxLength: `Не более ${validateRules[value][validate]} символов`
                        }
                        : errors[value] = {...errors[value], maxLength: false};
                    break;
                case submitValidationRules.isEmpty:
                    values[value].trim()
                        ? errors[value] = {...errors[value], isEmpty: false}
                        : errors[value] = {...errors[value], isEmpty: 'обязательное поле'};
                    break;
                case submitValidationRules.regular:
                    !validateRules[value][validate].test(values[value])
                        ? errors[value] = {...errors[value], regular: `Не правильно заполнено поле`}
                        : errors[value] = {...errors[value], regular: false};
                    break;
                case submitValidationRules.minWords:
                    values[value].trim().split(' ').length < validateRules[value][validate]
                        ? errors[value] = {
                            ...errors[value],
                            minWords: `Не менее ${validateRules[value][validate]} слов`
                        }
                        : errors[value] = {...errors[value], minWords: false};
                    break;
                case submitValidationRules.actualDate:
                    const now = new Date();
                    const userData = new Date(values[value].split('.').reverse().join('/'));
                    const minimalDate = new Date(-1970,0,0)
                    if (userData.toString() === 'Invalid Date') {
                        errors[value] = {...errors[value], regular: `Не правильно заполнено поле`}
                        break
                    } else {
                        errors[value] = {...errors[value], regular: false};
                        if( (+userData < +now) && (+userData > +minimalDate)) {
                            errors[value] = {...errors[value], actualDate: false}
                        } else {
                            errors[value] = {...errors[value], actualDate: `Дата не соответствует`}
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }

    return errors;
}

export default validate;
