var peopleArray = [];

function whoIsMyGuy() {
	var code = document.getElementById('codeInput').value;
	document.getElementById("myGuy").innerHTML = atob(code);
}

function generateSecrets() {
	shuffleArray(peopleArray);
	for(var i = 0; i < peopleArray.length; i++){
		if(i == peopleArray.length - 1){
			peopleArray[peopleArray.length - 1].name = peopleArray[0].name;
		} else{
			peopleArray[i].name = peopleArray[i+1].name;
		}
	}
	for(var i = 0; i < peopleArray.length; i++){
		peopleArray[i].name = btoa(peopleArray[i].name);
	}
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
	console.log(person);
}