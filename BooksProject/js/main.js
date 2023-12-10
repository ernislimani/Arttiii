$('#btn').click(function () {
	console.log('test 1 2');
})
$('paragrafi').append('This is some extra text');

$('#btn2').click(function(){
	//$('#h3').text($('#input').val());
}
var input= $('#input').val();

if(input == 0){
	$('.error').text('Input value is empty')
}
else{
	$('#lista').append('<li>' + input + ='</li>');
	$('.error').text('');
	$('#input').text('');
}

const slides= document.querySelectorAll(".slide");
const nextBtn= document.querySelectorAll(".nextBtn");
const prevBtn= document.querySelectorAll(".prevBtn");

slides.forEach(function(slide, index){
	slide.style.left=${index *100}%;
});

let counter = 0;

nextBtn.addEventListener("click", function(){
	counter++;
});
prevBtn.addEventListener("click", function(){
	counter--;
	carousel();
});
function carousel(){
	if (counter=== slides.length) {
		counter = 0;
	}
if (counter < 0) {
	counter= slides.length -1;

}

if(counter < slides.length -1){
	nextBtn.style.display="block";
}
else(
	nextBtn.style.display="none";)
if (counter>0) {
	prevBtn.style.displayy="block";
}else{
	prevBtn.style.displayy="none";
}

	slides.forEach(function(slide){
		slide.style.transform =`translateX(-${counter * 100}%)`;
	});
