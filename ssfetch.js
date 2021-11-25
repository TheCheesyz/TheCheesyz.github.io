function whoIsMyGuy() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(users => {
			console.log(users);
		});
}

//document.getElementById("myGuy").innerHTML="Paragraph changed.";