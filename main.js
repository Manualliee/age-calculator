//Get input labels
var labelOne = document.getElementById('label-one');
var labelTwo = document.getElementById('label-two');
var labelThree = document.getElementById('label-three');

//User inputs
var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');
var form = document.getElementById('age-form');

//Error handling
var dayError = document.getElementById('day-error');
var monthError = document.getElementById('month-error');
var yearError = document.getElementById('year-error');

//Get current day, month, and year
var currentDay = new Date().getDay();
var currentMonth = new Date().getMonth() + 1; 
var currentYear = new Date().getFullYear();

//display calculation results
var dayResult = document.getElementById('days-result');
var monthResult = document.getElementById('months-result');
var yearResult = document.getElementById('years-result');

form.addEventListener('submit', errorCalculation);
    
function errorCalculation(e) {
    e.preventDefault();
    
    switch (true) {
        //case where if any input is empty
        case day.value == '' || month.value == '' || year.value == '':
            if (day.value == '' && month.value == '' && year.value == '') {
                labelOne.style.color = 'hsl(0, 100%, 67%)';
                day.style.border = '1px solid hsl(0, 100%, 67%)';
                dayError.style.visibility = 'visible';
                
                labelTwo.style.color = 'hsl(0, 100%, 67%)';
                month.style.border = '1px solid hsl(0, 100%, 67%)';
                monthError.style.visibility = 'visible';
                
                labelThree.style.color = 'hsl(0, 100%, 67%)';
                year.style.border = '1px solid hsl(0, 100%, 67%)';
                yearError.style.visibility = 'visible';
        
            } else if (day.value == '' && month.value == '') {
                labelOne.style.color = 'hsl(0, 100%, 67%)';
                day.style.border = '1px solid hsl(0, 100%, 67%)';
                dayError.style.visibility = 'visible';
                
                labelTwo.style.color = 'hsl(0, 100%, 67%)';
                month.style.border = '1px solid hsl(0, 100%, 67%)';
                monthError.style.visibility = 'visible';

            } else if (day.value == '' && year.value == '') {
                labelOne.style.color = 'hsl(0, 100%, 67%)';
                day.style.border = '1px solid hsl(0, 100%, 67%)';
                dayError.style.visibility = 'visible';

                labelThree.style.color = 'hsl(0, 100%, 67%)';
                year.style.border = '1px solid hsl(0, 100%, 67%)';
                yearError.style.visibility = 'visible';

            } else if (month.value == '' && year.value == '') {
                labelTwo.style.color = 'hsl(0, 100%, 67%)';
                month.style.border = '1px solid hsl(0, 100%, 67%)';
                monthError.style.visibility = 'visible';

                labelThree.style.color = 'hsl(0, 100%, 67%)';
                year.style.border = '1px solid hsl(0, 100%, 67%)';
                yearError.style.visibility = 'visible';

            } else if (day.value == '') {
                labelOne.style.color = 'hsl(0, 100%, 67%)';
                day.style.border = '1px solid hsl(0, 100%, 67%)';
                dayError.style.visibility = 'visible';
                
            } else if (month.value == '') {
                labelTwo.style.color = 'hsl(0, 100%, 67%)';
                month.style.border = '1px solid hsl(0, 100%, 67%)';
                monthError.style.visibility = 'visible';

            } else {
                labelThree.style.color = 'hsl(0, 100%, 67%)';
                year.style.border = '1px solid hsl(0, 100%, 67%)';
                yearError.style.visibility = 'visible';

            }

            break;

        //Error message for day input
        case day.value < '01' || day.value > '31':
            labelOne.style.color = 'hsl(0, 100%, 67%)';
            day.style.border = '1px solid hsl(0, 100%, 67%)';
            dayError.style.visibility = 'visible';
            dayError.innerHTML = "Enter a valid day"

            break;

        //Error message for month input
        case month.value < 1 || month.value > 12:
            labelTwo.style.color = 'hsl(0, 100%, 67%)';
            month.style.border = '1px solid hsl(0, 100%, 67%)';
            monthError.style.visibility = 'visible';
            monthError.innerHTML = "Enter a valid month"

            break;

        // Error message for the month Feburary
        case month.value == '2' || month.value == '02':
            if (day.value > '29') {
                labelOne.style.color = 'hsl(0, 100%, 67%)';
                day.style.border = '1px solid hsl(0, 100%, 67%)';
                dayError.style.visibility = 'visible';
                dayError.innerHTML = "Enter a valid day"

                labelTwo.style.color = 'hsl(0, 100%, 67%)';
                month.style.border = '1px solid hsl(0, 100%, 67%)';
            }

            break;

        //Error message for year input
        case year.value >= currentYear:
            labelThree.style.color = 'hsl(0, 100%, 67%)';
            year.style.border = '1px solid hsl(0, 100%, 67%)';
            yearError.style.visibility = 'visible';
            yearError.innerHTML = "Year cannot be current or in the future"

            break;

        default:
            if (day.value <= currentDay && month.value <= currentMonth && year.value <= currentYear) {
        
                dayResult.innerHTML = currentDay - day.value;
                monthResult.innerHTML = currentMonth - month.value;
                yearResult.innerHTML = currentYear - year.value;

            } else if (day.value > currentDay) {
                var newCurrentDay = currentDay + 30;
                var newCurrentMonth = currentMonth - 1;

                if (newCurrentMonth < currentMonth) {
                    var newCurrentYear = currentYear - 1;
                    newCurrentMonth += 12;

                    dayResult.innerHTML = newCurrentDay - day.value;
                    monthResult.innerHTML = newCurrentMonth - month.value;
                    yearResult.innerHTML = newCurrentYear - year.value;

                }

                dayResult.innerHTML = newCurrentDay - day.value;
                monthResult.innerHTML = newCurrentMonth - month.value;
                yearResult.innerHTML = currentYear - year.value;

            } else if (month.value > currentMonth) {
                var newCurrentYear = currentYear - 1;
                currentMonth += 12;

                dayResult.innerHTML = currentDay - day.value;
                monthResult.innerHTML = currentMonth - month.value;
                yearResult.innerHTML = newCurrentYear - year.value;

            }    

            break;

    }
    /*
        dayResult.innerHTML = day.value;
        monthResult.innerHTML = month.value;
        yearResult.innerHTML = year.value; 
    */

}
