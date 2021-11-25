var peopleArray = [];

function whoIsMyGuy() {
	var code = document.getElementById('codeInput').value;
	document.getElementById("myGuy").innerHTML = code;

}

function generateSecrets() {
	shuffleArray(peopleArray);
	console.log(peopleArray);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function addToList() {
	var person = {
		name : document.getElementById('name').value,
		email : document.getElementById('email').value
	}
	peopleArray.push(person);
}