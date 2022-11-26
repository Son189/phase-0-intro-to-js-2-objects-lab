// Write your solution in this file!
const employee = {
    name: "benson",
    streetAddress: "buruburu"
}


function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
    ...obj,
    [key] : value
  }

}
console.log(updateEmployeeWithKeyAndValue(employee, "son", 1544))
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "son", 1610)
console.log(employee);

function deleteFromEmployeeByKey(obj, key){
    const newObj = {
        ...obj
    }
    delete newObj[key]

    return newObj
}


console.log(deleteFromEmployeeByKey(employee, "jobIdentificationNumber"))
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}


destructivelyDeleteFromEmployeeByKey(employee, "IdentificationNumber")
console.log(employee);