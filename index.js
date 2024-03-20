function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()
function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

mondayWork()

function wrapAdjective(wrap = "*"){
    return function (adjective = "a hard worker"){
    return `You are ${wrap}${adjective}${wrap}!`}
}