// const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '964ca79449msh99de29b569822ecp16a1ebjsnb7439aaa9931',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }





const inputBox = document.getElementById("input")
const cancle = document.getElementById("cancle")
const searchIcon = document.getElementById("search")
searchIcon.addEventListener("click", function () {
	inputBox.classList.add("active")
	cancle.classList.add("active")
})

cancle.addEventListener("click",function(){
	inputBox.classList.remove("active")
	cancle.classList.remove("active")

})


