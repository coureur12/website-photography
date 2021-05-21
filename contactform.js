
	// Liste des expressions régulières nécessaires:
	// regex nom et prénom:/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/,
	// regex e-mail: ^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$
    // regex telephone: ^(0|0041|\+41)\s?((7([6-9]))|(22|24|56|61|91|31|32|34|81|26|21|41|62|55|27|71|33|52|43|44))\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$

	//check la validité du nom
	function validateName() {

		let inputName = form.inputName.value;
		let nameValidationMsg = document.getElementById('msgvalidationnom');

		if (inputName) {
			//si l'input respecte le regex, le message de succès s'affiche
			if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(inputName)) {
				nameValidationMsg.textContent = "Nom valide";
				nameValidationMsg.classList.remove('text-alert');
				nameValidationMsg.classList.add('text-success');

			} else {
				//si l'input ne respecte pas le regex, le message d'alerte s'affiche
				nameValidationMsg.textContent = "Le nom ne doit pas contenir de caractères spéciaux.";
				nameValidationMsg.classList.add('text-alert');
				nameValidationMsg.classList.remove('text-success');
			}
		} else {
			//si l'input est vide, le message d'alerte s'affiche
			nameValidationMsg.textContent = "Le nom ne peut pas être vide.";
		}
	}
	//check la validité du téléphone
    function validatePhone() {

		let inputPhone = form.inputPhone.value;
		let PhoneValidationMsg = document.getElementById('msgvalidationphone')
		if (inputPhone) {
			//si l'input respecte le regex, le message de succès s'affiche
			if (/^(0|0041|\+41)\s?((7([6-9]))|(22|24|56|61|91|31|32|34|81|26|21|41|62|55|27|71|33|52|43|44))\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/.test(inputPhone)) {

				PhoneValidationMsg.textContent = "Téléphone valide";
				PhoneValidationMsg.classList.remove('text-alert');
				PhoneValidationMsg.classList.add('text-success');
			} else {
				//si l'input ne respecte pas le regex, le message d'alerte s'affiche
				PhoneValidationMsg.textContent = "Le téléphone est invalide.";
				PhoneValidationMsg.classList.add('text-alert');
				PhoneValidationMsg.classList.remove('text-success');
			}
		} else {
			//si l'input est vide, le message d'alerte s'affiche
			EmailValidationMsg.textContent = "Le téléphone ne peut pas être vide.";
		}
	}
	//check la validité de l'email
	function validateEmail() {

		let inputEmail = form.inputEmail.value;
		let EmailValidationMsg = document.getElementById('msgvalidationemail')
		if (inputEmail) {
			//si l'input respecte le regex, le message de succès s'affiche
			if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(inputEmail)) {

				EmailValidationMsg.textContent = "Email valide";
				EmailValidationMsg.classList.remove('text-alert');
				EmailValidationMsg.classList.add('text-success');
			} else {
				//si l'input ne respecte pas le regex, le message d'alerte s'affiche
				EmailValidationMsg.textContent = "L'email ne doit pas contenir de caractères spéciaux.";
				EmailValidationMsg.classList.add('text-alert');
				EmailValidationMsg.classList.remove('text-success');
			}
		} else {
			//si l'input est vide, le message d'alerte s'affiche
			EmailValidationMsg.textContent = "L'email ne peut pas être vide.";
		}
	}
	//check la majorité de l'user
	function validateAge() {
		let inputAge = form.inputAge.value;
		let AgeValidationMsg = document.getElementById('msgvalidationage')
		if (inputAge) {
			//si l'input respecte la fourchette, le message de succès s'affiche
			if (inputAge <= 99 && inputAge > 17) {
				AgeValidationMsg.textContent = "Age valide";
				AgeValidationMsg.classList.remove('text-alert');
				AgeValidationMsg.classList.add('text-success');
			} else {
				//si l'input ne respecte pas le regex, le message d'alerte s'affiche
				AgeValidationMsg.textContent = "Les mineurs ne peuvent pas s'inscrire. Au delà de 99 ans, le concours n'est pas pertinent.";
				AgeValidationMsg.classList.add('text-alert');
				AgeValidationMsg.classList.remove('text-success');
			}
		} else {
			//si l'input est vide, le message d'alerte s'affiche
			AgeValidationMsg.textContent = "L'age ne peut pas être vide.";
		}
	}