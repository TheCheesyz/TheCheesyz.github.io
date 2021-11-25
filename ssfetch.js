const CryptoJS = require("crypto-js");
const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};
const decrypt = (data) => {
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};


var peopleArray = [];

function whoIsMyGuy() {
	var code = document.getElementById('codeInput').value;
	document.getElementById("myGuy").innerHTML = decrypt(code);
}

function generateSecrets() {
	shuffleArray(peopleArray);
	for(var i = 0; i < array.length; i++){
		if(i == array.length - 1){
			peopleArray[array.length - 1].name = encrypt(peopleArray[0].name);
		} else{
			peopleArray[i].name = encrypt(peopleArray[i+1].name);
		}
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