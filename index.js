// function AddAnimation(){
// 	const button = document.getElementsByClassName("button")[0];
// 	button.classList.add("button-animation");
// 	setTimeout(()=>{button.classList.remove("button-animation");},200)
// }
const items = [
	{
		title: "T-Shirt",
		color: "Green",
		gender: "Male",
		imageUrl: "url of image"
	},
	{
		title: "Short",
		color: "Blue",
		gender: "Female",
		imageUrl: "url of image"
	},
	{
		title: "T-Shirt",
		color: "Green",
		gender: "Male",
		imageUrl: "url of image"
	},
	{
		title: "Short",
		color: "Blue",
		gender: "Female",
		imageUrl: "url of image"
	}
]

function renderItemsContainer(filterObj) {
	console.log(filterObj)
	let filteredItems = items;
	if(filterObj)
		filteredItems =	filteredItems.filter(item => item[filterObj.filterCriteria] == filterObj.filterValue)

	const itemsHtml = filteredItems.map(item=>{
		return `<div class="item-title">${item.title}</div>
						<div class="item-color">${item.color}</div>
						<div class="item-gender">${item.gender}</div>
						<div class="image"><img src="${item.imageUrl}" alt=""></div>
						<div class="add-to-cart"><button>Add</button></div>`
	}).join('')
	
	let itemsContainer = document.getElementById("items-container");
	
	itemsContainer.innerHTML = itemsHtml;	
}

window.addEventListener('load', function() {

renderItemsContainer(null)

})