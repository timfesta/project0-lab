$(function() {

var $newItem = $('#new-item');
var $itemName = $('#item-name');
var $ish = $('#ish');

var $ishTemplate = _.template($("#ish-template").html());

var ishList = [
	{
		description: "I know how hard it is for you to put food on your family.",
		name: "George Bush",
		badge: 14
	},
	{
		description: "When someone comes up and says something like, 'I am a god,' everybody says 'Who does he think he is?' I just told you who I thought I was. A god. I just told you",
		name: "Kanye",
		badge: 14
	},
	{
		description: "There has got to be more to life than just being really, really, really ridiculously good looking",
		name: "Derek Zoolander",
		badge: 14
	}
];

for(i =0; i <ishList.length; i++) {
	console.log(ishList[i]);
	console.log($ishTemplate(ishList[i]));

	var finishedHtml = $ishTemplate(ishList[i]);

	$ish.append(finishedHtml);
}

$newItem.on('submit', function(event) {
	console.log("submitting form");
	event.preventDefault();
	console.log($itemName.val());

	var newIsh = {
		description: $itemName.val(),
		name: "Tim",
		badge: 14
	};

	var finishedObject = $ishTemplate(newIsh);

	$ish.append(finishedObject);



$ish.on('click', '.badge', function (taco) {
	console.log('click')
})

});

});

// 0)links
// 1) event listner on badges (on click, target the class)
// console
// 2)page to be updated (plus 1)
	// know what it is aka know jQ for text
	// add 1
	// update ie send back to the page up of that badge
	// google string to interger
// 3)save to an array
// add up all the #'s'


