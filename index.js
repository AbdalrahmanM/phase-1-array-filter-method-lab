// Code your solution here
function findMatching(array,driverName){
    return array.filter(function(element){
        return driverName.toUpperCase()==element.toUpperCase()
    })
}

function fuzzyMatch(array,driverName){
    return array.filter((element)=>{
        return element.startsWith(driverName)
    })
}

function matchName(array,driverName){
    return array.filter((element)=>{
        return element.name==driverName
    })
}