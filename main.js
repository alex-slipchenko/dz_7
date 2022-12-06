let myRecursion = (function (number, degree) {
    if (degree == 1) {
        return number;
    } else {
        return number * myRecursion(number, degree - 1);
    }
})

console.log(myRecursion(2,3));
