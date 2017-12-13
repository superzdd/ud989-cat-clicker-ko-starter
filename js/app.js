var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');
	this.level = ko.computed(function(){
		var click = this.clickCount();
		if(click < 10){
			return 'Newborn';
		}else if(click >= 10 && click < 100){
			return 'Infant';
		}else{
			return 'Teen';
		}
	},this);
};

var viewModel = function() {
	this.currentCat = ko.observable(new Cat());
	this.arrCats = ko.observableArray([{
				clickCount: 0,
				name: 'Tabby',
				imgSrc: 'img/434164568_fea0ad4013_z.jpg',
				imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568'
			},
			{
				clickCount: 0,
				name: 'Tiger',
				imgSrc: 'img/4154543904_6e2428c421_z.jpg',
				imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904'
			},
			{
				clickCount: 0,
				name: 'Scaredy',
				imgSrc: 'img/22252709_010df3379e_z.jpg',
				imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709'
			},
			{
				clickCount: 0,
				name: 'Shadow',
				imgSrc: 'img/1413379559_412a540d29_z.jpg',
				imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559'
			},
			{
				clickCount: 0,
				name: 'Sleepy',
				imgSrc: 'img/9648464288_2516b35537_z.jpg',
				imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288'
			}
		]),
		this.increasementCounter = function() {
			this.currentCat().clickCount(this.currentCat().clickCount() + 1);
		}
};

ko.applyBindings(new viewModel());