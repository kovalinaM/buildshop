// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



// let body=document.querySelector('body');
// if(isMobile.any()){
// 		body.classList.add('touch');
// 		let arrow=document.querySelectorAll('.arrow');
// 	for(i=0; i<arrow.length; i++){
// 			let thisLink=arrow[i].previousElementSibling;
// 			let subMenu=arrow[i].nextElementSibling;
// 			let thisArrow=arrow[i];

// 			thisLink.classList.add('parent');
// 		arrow[i].addEventListener('click', function(){
// 			subMenu.classList.toggle('open');
// 			thisArrow.classList.toggle('active');
// 		});
// 	}
// }else{
// 	body.classList.add('mouse');
// }