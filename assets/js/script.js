function showDiv(ele){

	var tableId = document.getElementById('vaccine');
    var vaccDesc = document.getElementById('info');
	var sel = ele.options[ele.selectedIndex].value;

	if (sel == 12){
		vaccDesc.innerHTML = "Vaccines help to simulate the body’s immune system and thus prevents us from getting infected.";
		console.log(tableId.rows[3].cells[0]);
		if(tableId.rows[3].cells[0].innerHTML == "Human papillomavirus (HPV)"){
			tableId.deleteRow(3);
		}
		tableId.style.display = 'block';
	}
	else if(sel == 13){
		
		vaccDesc.innerHTML = "Vaccines help to simulate the body’s immune system and thus prevents us from getting infected.";
		

		var row = tableId.insertRow(3);
		row.style.textAlign = "center";
		
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

		cell1.innerHTML = "Human papillomavirus (HPV)";
		cell2.innerHTML = "Gardasil 9";
		cell3.innerHTML = "Sexual Contact";

		tableId.style.display = 'block';
	}
	else{
		vaccDesc.innerHTML = "The Australian National Immunisation Program schedule (NIP) provides vaccines against 17 infectious diseases." +
		 "The Australian government also provides free vaccines for" + 
		  "<a href=https://www2.health.vic.gov.au/public-health/immunisation/immunisation-schedule-vaccine-eligibility-criteria/immunisation-schedule-victoria> eligible people </a>" +
		  "<br><br> Please select the age group of your child and verify if you are caught up with the immunisation schedule.";

		if(tableId.rows[3].cells[0].innerHTML == "Human papillomavirus (HPV)"){
			tableId.deleteRow(3);
		}
		tableId.style.display = 'none';
	}
}
