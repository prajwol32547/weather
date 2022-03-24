let back=document.getElementById('back');
let one=document.querySelector(".one");
let two=document.querySelector(".two");
let info=document.querySelector(".result");
let area=document.querySelector(".location");
let name=document.getElementById('name');
let tempp=document.getElementById('temp');
let loc=document.getElementById('loc');
let weat=document.getElementById('weat');
let feel=document.querySelector(".feel");
let humid=document.querySelector(".humid");
let img=document.getElementById('image');

let api;

back.addEventListener('click',()=>{
two.style.display="none";
one.style.display="block";

});

name.addEventListener('keyup',e=>{
if(e.key == "Enter" && name.value!=""){
	reqApi(name.value);
}
});
area.addEventListener('click',()=>{
reqApi(name.value);
});


function reqApi(place){
     //info.innerHTML="getting weather report...";
     //info.classList.add('pending');
	api='https://api.openweathermap.org/data/2.5/weather?q='+place+'&units=metric&appid=ac7c75b9937a495021393024d0a90c44';
	fetch(api).then(response=>response.json()).then(result=>weatheDetails(result));
    two.style.display="block";
    one.style.display="none";


}
function weatheDetails(info){
	const city=info.name;
	const country=info.sys.country;
	const {description,id}=info.weather[0];
	const {feels_like,humidity,temp}=info.main;

	loc.innerHTML=city+","+country;
	weat.innerHTML=description;
	tempp.innerHTML=temp+"°c";
	feel.innerHTML=feels_like+"°c"+"<br>"+"feels like";
	humid.innerHTML=humidity+"%"+"<br>"+"Humidity";
	if(description=="broken clouds"||description=="overcast clouds"){
     img.src="cloudy.png";
	}
	if(description=="sunny"||description=="few clouds"){
		img.src="sunny.jpg";
	}
	
	if(description=="rainy"){
	img.src="moderate rain.jpg";
	}
	//if((description=="Thunder")||(description=="Thunder with rain")
	//img.src= "thunder.png";
	

}
