 var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge=prompt("Enter your age");
     floatDays = parseFloat(floatAge*365.25);
     floatMonths = parseFloat(floatAge*12);
     intWeeks= parseInt(floatDays/7);
     intFortnights=parseInt(floatDays/14);
     alert("Age per year=" + floatAge); 
     alert("Age per month=" + floatMonths);
     alert("Age per week=" + intWeeks);
     alert("Age per fortnight=" + intFortnights);
     alert("Age per day=" + floatDays);
     