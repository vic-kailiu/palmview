function logIntoServer(log){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var query = generateSQL(log);
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			alert(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET","ajax_log.php?query="+query,false);
	xmlhttp.send();
}
function getSQLTimeString(date){
	return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+':'+date.getMilliseconds();
}
function generateSQL(log){
	var query="";
	for(var i=0; i<log.length;i++ ){
		query += "INSERT INTO LOG(`studentID`,`phaseID`,`time`,`actionType`,`correct`,`action`,`duration`,`target1`,`target2`,`sessionID`)VALUES("+log[i][0]+","+log[i][1]+",'"+log[i][2]+"','"+log[i][3]+"'";
		for(var j=4;j<=9;j++){
			if(log[i][j]=='null'){
				query += ",NULL";
			} else {
				(j==4||j==6)?query += ","+log[i][j]+"":query += ",'"+log[i][j]+"'";
			}
		}
		query += ");";
	}
	return query;
}