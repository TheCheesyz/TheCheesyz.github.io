function whoIsMyGuy() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(users => {
			document.getElementById("myGuy").innerHTML=users[0].name;
		});
}
