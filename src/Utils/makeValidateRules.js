const makeValidateRulesObj = (fieldsArr, rule) => {
    let obj = {};
    fieldsArr.forEach(item => item[rule] && (obj[item.name] = item[rule]));
    return obj;
}

export default makeValidateRulesObj;
