const log = console.log;
const myName = 'Frank Ndounga Tchaffa';
const presentation = document.querySelector('.presentation');
const logo = document.querySelector('.logo');
const profilePicture = document.querySelector('.profile-pic');

document.addEventListener('DOMContentLoaded', init);

const writeName = (name) => {
	const nameContainer = document.querySelector('.name');
	let index = 0;
	let output = '';
	const intervalID = setInterval(() => {
		if(index < name.length) {
			output = output + name[index]
			nameContainer.textContent = output;
			index++
		} else {
			clearInterval(intervalID)
			logo.classList.add('show')
		}
		
	}, 250)
	
}


function init(e) {
	log('everything is working well')
	writeName(myName)
	
	presentation.classList.add('fullfilled');
	
}
