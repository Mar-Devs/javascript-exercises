const leapYears = function(year) {
    if(year%400 == 0){
        alert(`${year} is a leap year!`)
    }
    else if(year%100 == 0){
        alert(`${year} this is not a leap year :(`)
    }
    else if(year%4==0){
        alert(`${year} this is a leap year!`)
    }
    else {
        alert(`${year} is not a leap year :(`)
    }
};

let year = window.prompt("Enter a year!")
leapYears(year)


