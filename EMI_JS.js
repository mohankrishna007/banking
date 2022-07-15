function set_loan_type(){
    var type = document.getElementById("loan_type").value;
    var rate = document.getElementById("rate");
    if(type == "home"){
        rate.value = '7';
    } else if(type == "car"){
        rate.value = '9';
    } else if(type == "personal"){
        rate.value = '12';
    }
}
function duration_validate(){
    var y = document.getElementById("years");
    var years = document.getElementById("years").value;
    var type = document.getElementById("loan_type").value;
    if(type == "home"){
        if(years<1 | years>25){
            alert("Duration should be 1 to 25 years only");
            y.value='0';
        }
    } else if(type == "car"){
        if(years<1 | years>7){
            alert("Duration should be 1 to 7 years only");
            y.value='0';
        }
    } else if(type == "personal"){
        if(years<1 | years>5){
            alert("Duration should be 1 to 5 years only");
            y.value='0';
        }
    }
}
function find_emi() {
	var amount = document.getElementById("amount").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
    var months = years/12;
	var interest = (amount * (rate * 0.01)) / months;
	var total = ((amount / months) + interest);

	document.getElementById("total").innerHTML = "EMI : " + total;
}
