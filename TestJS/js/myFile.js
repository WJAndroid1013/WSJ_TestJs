function showFile() {
	var f2 = document.getElementById("myFile");

	var f = $("#myFile")[0];
	
	var sNameT = "";

	$.each(f.files, function(k, v) {
		console.log("k:" + k + "--------------" + v.name);

		getPath(v);
		
		sNameT+=","+v.name;

	});
	sNameT = sNameT.substring(1);
	
	$("#dd").val(sNameT)
	
	
}

//视频音频上传预览
/**
 * file:file对象
 * */
function getPath(file) {
	var fPath;
	if(file.files && file.files[0]) {
		file = file.files[0];
	}
	fPath = createObjectURL(file);
	console.log("getPath fPath " + fPath);
	return fPath;
}

function createObjectURL(object) {
	return(window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
}