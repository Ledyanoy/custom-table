const validate = (values, validateRules) => {
    let errors = {};
    for (const value in values) {
        if (!Object.keys(validateRules).includes(value)) return;
        for (const validate in validateRules[value]) {
            switch (validate) {
                case "maxLength":
                    values[value].length > validateRules[value][validate]
                        ? errors[value] = {...errors[value], maxLength: `Не более ${validateRules[value][validate]} символов`}
                        : errors[value] = {...errors[value], maxLength: false};
                    break;
                case "isEmpty":
                    values[value].trim()
                        ? errors[value] = {...errors[value], isEmpty: false}
                        : errors[value] = {...errors[value], isEmpty: 'обязательное поле'};
                    break;
                case 'regular':
                    !validateRules[value][validate].test(values[value])
                        ? errors[value] = {...errors[value], regular: `Не правильно заполнено поле`}
                        : errors[value] = {...errors[value], regular: false};
                    break;
            }
        }
    }

    return errors;
}

export default validate;