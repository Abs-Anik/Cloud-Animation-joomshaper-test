// time count script code start


	function countdown(){
		var now = new Date();
		var eventDate = new Date("May 18,2019 00:00:00");

		var currentTime = now.getTime();

		var eventTime = eventDate.getTime();

		var remTime = eventTime - currentTime;

		var s = Math.floor(remTime/1000);

		var m = Math.floor(s/60);

		var h = Math.floor(m/60);
		
		var d = Math.floor(h/24);

		h %= 24;

		m %= 60;

		s %= 60;

		h += d * 24;

		document.getElementById('hours').innerHTML = h;

		document.getElementById('minutes').innerHTML = m;

		document.getElementById('seconds').innerHTML = s;

		setTimeout(countdown,1000);


	}

	countdown();
