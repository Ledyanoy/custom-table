const makeValidationRules = (fieldsArr) => {
    let obj = {};
    fieldsArr.forEach(item => obj[item.name] = item.validation);
    return obj;
}

export default makeValidationRules;