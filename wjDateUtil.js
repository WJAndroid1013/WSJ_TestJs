var wjDateUtil = (function($) {
	var TAG = "wjDateUtil";
	
	//这里只会在加载时，执行一次，类似于java的static
//	console.log("******************************8")

	var obj = {
		getYear: getYear,
		getMonth: getMonth,
		getDay: getDay,
		getWeekday: getWeekday,
		
		getHour: getHour,
		getMinutes: getMinutes,
		getSeconds: getSeconds,
		
		geYmd: geYmd,
		getHms: getHms,
		getYmdHms: getYmdHms,
	};

	return obj;

	function getYear() {
		var cDate = new Date();
		return cDate.getFullYear();
	}

	function getMonth() {
		var cDate = new Date();
		return cDate.getMonth()+1;
	}

	//weekday:星期几
	function getWeekday() {
		var cDate = new Date();
		return  cDate.getDay(); 
	}
	
	function getDay(){
		var cDate = new Date();
		return cDate.getDate(); 
	}
	
	function getHour(){
		var cDate = new Date();
		return cDate.getHours(); 
	}
	
	function getMinutes(){
		var cDate = new Date();
		return cDate.getMinutes(); 
	}
	
	function getSeconds(){
		var cDate = new Date();
		return cDate.getSeconds(); 
	}
	
	
	function geYmd() {
		return getYear()+"-"+getMonth()+"-"+getDay();
	}
	
	
	function getHms() {
		return getHour()+"-"+getMinutes()+"-"+getSeconds();
	}
	
	function getYmdHms() {
		return geYmd()+" "+getHour()+"-"+getMinutes()+"-"+getSeconds();
	}
	
	
	

})(jQuery);