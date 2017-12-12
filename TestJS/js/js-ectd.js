//类似static方法
var wjDateUtil = (function($) {
	//设置标记
	var TAG ="wjDateUtil "
	
	var obj = {
		mysout: mysout,
		getBtnVal: getBtnVal,
	};

	return obj;//这是必须的

	function mysout() {
		console.log(TAG+"time----" + new Date().getTime());
	}

	function getBtnVal(mid) {
		return $("#" + mid).text();
	}
})(jQuery);