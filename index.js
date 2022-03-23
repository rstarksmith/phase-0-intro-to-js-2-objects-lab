

const employee = {
    name: 'Sam',
    streetAdress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee.streetAddress = '12 Broadway';
//     return employee;
// }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const copyEmployee = {...employee};
    delete copyEmployee[key];
    return copyEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}