const makeInitialValues = (fieldsArr) => {
    let obj = {};
    fieldsArr.forEach(item => obj[item.name] = '');
    return obj;
}

export default makeInitialValues;