function Member(first, last, year, assoc) {
	this.first = first;
	this.last = last;
	this.assoc = assoc; // This is "A" for apprenti "P" for patrooler
}

members_json = '[{"first":"Andy","last":"Johnson","assoc":"P"},{"first":"Matt","last":"Fulton","assoc":"P"},{"first":"Honor","last":"Paine","assoc":"P"},{"first":"Leanne","last":"Hatch","assoc":"P"},{"first":"Otto","last":"Salmi","assoc":"P"},{"first":"Raiden","last":"Meyer","assoc":"P"},{"first":"Ivo","last":"Erben","assoc":"P"},{"first":"Matt","last":"Gardner","assoc":"P"},{"first":"Avery","last":"Frankenberg","assoc":"P"},{"first":"Kate","last":"French","assoc":"P"},{"first":"Michael","last":"Cather","assoc":"P"},{"first":"Sarah","last":"Kennedy","assoc":"P"},{"first":"Daryl","last":"Holthoff","assoc":"P"},{"first":"Sarah","last":"Kolk","assoc":"P"},{"first":"Eric","last":"Gokee","assoc":"P"},{"first":"Kevin","last":"Gross","assoc":"P"},{"first":"Whitaker","last":"Fanestil","assoc":"P"},{"first":"Christina","last":"Schoeller","assoc":"C"},{"first":"Mike","last":"Bayer","assoc":"P"},{"first":"Madison","last":"Hazard","assoc":"P"},{"first":"Ryan","last":"Ewing","assoc":"C"},{"first":"Charlotte","last":"Driscoll","assoc":"C"},{"first":"Jordan","last":"Sandford","assoc":"P"},{"first":"Russell","last":"Beckerman","assoc":"P"},{"first":"Sophia","last":"Kocher","assoc":"C"},{"first":"Kiera","last":"Klinsky","assoc":"C"},{"first":"Matt","last":"Moniz","assoc":"P"},{"first":"Coby","last":"Gibson","assoc":"C"},{"first":"Katie","last":"Bogart","assoc":"P"},{"first":"Michael","last":"Beutner","assoc":"P"},{"first":"Ella","last":"Dobson","assoc":"C"},{"first":"Diana","last":"Uhrig","assoc":"P"},{"first":"Nolan","last":"Sankey","assoc":"C"},{"first":"James","last":"Dinulos","assoc":"P"},{"first":"Andrew","last":"Binder","assoc":"C"},{"first":"Ann","last":"Carpenter","assoc":"P"},{"first":"Brody","last":"Mcnutt","assoc":"P"},{"first":"Trevor","last":"Hopkins","assoc":"C"},{"first":"Gracie","last":"Durham","assoc":"C"},{"first":"Colin","last":"Fennelly","assoc":"C"},{"first":"Brian","last":"Akin","assoc":"P"},{"first":"Darby","last":"Read","assoc":"C"},{"first":"Annie","last":"Yanofsky","assoc":"C"},{"first":"Jason","last":"Cushman","assoc":"C"},{"first":"David","last":"Niehaus","assoc":"C"},{"first":"Krissy","last":"Saraceno","assoc":"P"},{"first":"Jim","last":"Geiling","assoc":"P"},{"first":"Henry","last":"Hilton2","assoc":"P"},{"first":"Lucas","last":"Andersen","assoc":"P"},{"first":"Saheer2","last":"Mathrani","assoc":"P"},{"first":"Winston","last":"Trope","assoc":"P"},{"first":"Henry","last":"Hilton","assoc":"P"},{"first":"Saheer","last":"Mathrani","assoc":"P"},{"first":"Karam","last":"Sandhu","assoc":"P"},{"first":"Dasbach","last":"Burdon","assoc":""},{"first":"Caroline","last":"Lauer","assoc":"P"},{"first":"Hatch","last":"Leanne","assoc":"P"},{"first":"","last":"","assoc":""},{"first":"Alana","last":"Mcclements","assoc":"A"},{"first":"Emery","last":"Rheam","assoc":"A"},{"first":"Sophie","last":"Kylander","assoc":"A"},{"first":"Izzy","last":"Kocher","assoc":"A"},{"first":"Grace","last":"Hammarskjold","assoc":"A"},{"first":"Henry","last":"Prestegaard","assoc":"A"},{"first":"Campbell","last":"Whalen","assoc":"A"},{"first":"Benjamin","last":"Cape","assoc":"A"},{"first":"Blake","last":"Daugherty","assoc":"A"},{"first":"Ish","last":"Mclaughlin","assoc":"A"},{"first":"James","last":"Fleming","assoc":"A"},{"first":"Everett","last":"Magnuson","assoc":"A"},{"first":"Nicholas","last":"Schoeller","assoc":"A"},{"first":"Una","last":"Wesvold","assoc":"A"},{"first":"Niklas","last":"Koehne","assoc":"A"},{"first":"Billy","last":"Gano","assoc":"A"}]'

members = JSON.parse(members_json)
count = 0
$("#apprenti_block").append("<div class='card-columns' id='apprenti-deck'></div>")
m_top = 25
size = 400
$.each(members, function(index, val) {
	if (val.assoc == "A"){

		// text = '<div class="card member-box" height="18rem">\
		// 		    <img class="card-img-top" src="images/members/'+val.first+'.png" alt="Card image cap">\
		// 		    <div class="img-caption" hidden><h2>'+ val.first +' '+ val.last +'</h2></div>\
  // 				</div>'
  	 	// Place Holder
  		text = '<div class="card member-box" height="18rem">\
				    <img class="card-img-top" src="images/members/izzy.png" alt="Card image cap">\
				    <div class="img-caption w-100" hidden>\
				    	<h2>'+ val.first +' '+ val.last +'</h2>\
				    	<p>Home Mountain: Crystal Mountain, WA</p>\
				    	<p>Run of Choice: Winslow</p></div>\
  				</div>'

		$("#apprenti-deck").append(text)

		count += 1
	}
})

$(".member-box").hover(function() {
	$(this).children('.img-caption').removeAttr('hidden');
	$(this).children('img').css('opacity', '.5');
}, function() {
	$(this).children('.img-caption').attr('hidden', true);
	$(this).children('img').css('opacity', '1');
});