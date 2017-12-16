var arrCats = [{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nickname: 'nick-Tabby'
	},
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
		nickname: 'nick-Tiger'
	},
	{
		clickCount: 0,
		name: 'Scaredy',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
		nickname: 'nick-Scaredy'
	},
	{
		clickCount: 0,
		name: 'Shadow',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
		nickname: 'nick-Shadow'
	},
	{
		clickCount: 0,
		name: 'Sleepy',
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
		nickname: 'nick-Sleepy'
	}
];

var Cat = function(data) {
	var self = this;
	self.clickCount = ko.observable(data.clickCount);
	self.name = ko.observable(data.name);
	self.nickname = ko.observable(data.nickname);
	self.nicknameShowFlag = ko.observable(false);
	self.imgSrc = ko.observable(data.imgSrc);
	self.imgAttribution = ko.observable(data.imgAttribution);
	self.level = ko.computed(function() {
		var click = self.clickCount();
		if(click < 10) {
			return 'Newborn';
		} else if(click >= 10 && click < 100) {
			return 'Infant';
		} else {
			return 'Teen';
		}
	}, self);
	self.showName = ko.computed(function() {
		var n = self.nicknameShowFlag() ? self.nickname() : self.name();
		return n;
	}, self);
};

var viewModel = function() {
	var self = this;

	self.cats = ko.observableArray([]);

	arrCats.forEach(function(data) {
		self.cats().push(new Cat(data));
	});

	self.currentCat = ko.observable(self.cats()[0]);

	self.increasementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	self.chooseThisCat = function(data) {
		self.currentCat(data);
	};
};

ko.applyBindings(new viewModel());