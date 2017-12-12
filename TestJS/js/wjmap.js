var wjMapUtil = (function($) {
	var mp = {};
	console.log("mp初始化")

	//添加map
	//删，改，查
	var obj = {
		addOrUpdate: addOrUpdate,
		del: del,
		selByKey: selByKey,
		selAll: selAll,
		clear: clear
	}

	return obj;

	function addOrUpdate(key, val) {
		mp[key] = val;
	}

	function selByKey(key) {
		//		判断mp是否已存在这个key
		var val = undefined;
		$.each(mp, function(k, v) {
			if(k == key) {
				val = mp[key];
			}
		})
		return val;
	}

	function selAll() {
		$.each(mp, function(k, v) {
			console.log("key=" + k + ";val=" + v)
		})
	}

	function del(key) {
		$.each(mp, function(k, v) {
			if(k == key) {
				mp[key] = undefined;
			}
		})
	}

	function clear() {
		mp = undefined;
		mp = {};
	}
})(jQuery)