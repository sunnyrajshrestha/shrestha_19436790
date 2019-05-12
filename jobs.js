function formValidation() {
	// ===================================================================
	var name = document.getElementById('first_name').value;
	if (name=="") {
		alert('Must enter first name before submitting');
		return false;
	}
	// =====================================
	// ===================================================================
	var name = document.getElementById('last_name').value;
	if (name=="") {
		alert('Must enter last name before submitting');
		return false;
	}
	// =====================================
	// ===================================================================
	var name = document.getElementById('email').value;
	if (name=="") {
		alert('Must enter your email before submitting');
		return false;
	}
	// =====================================
		// ===================================================================
	var name = document.getElementById('text-box').value;
	if (name=="") {
		alert('Must enter your quries before submitting');
		return false;
	}
	// =====================================
}