$(function() {

var ishController = {

var $ishTemplate = _.template($("#ish-template").html());

// render: function(ishObj) {
// 	var $finishedHtml = $(ishController.template(ishObj));
// 		$('ish-template').append($finishedHtml)
// },

all: function() {
	$.get('/api/index' function(data) {
		var ishList = data;
	})
}

for(i =0; i <ishList.length; i++) {
	console.log(ishList[i]);
	console.log($ishTemplate(ishList[i]));

	var $finishedHtml = $ishTemplate(ishList[i]);

	$ish.append(finishedHtml);
}

var $newItem = $('#new-item');
var $itemName = $('#item-name');
var $ish = $('#ish');

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

} // controller

}); // function 

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


