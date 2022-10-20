function buttonclick(a){
    document.getElementById("screen").value += a;
}

function che(){
    var res=[];
    // var answer;

    if(document.getElementById("screen").value.includes("+")){
		res = document.getElementById("screen").value.split('+');
		return parseInt(res[0]) + parseInt(res[1]);
	}
    else if(document.getElementById("screen").value.includes("-")){
		res = document.getElementById("screen").value.split('-');
		return parseInt(res[0]) - parseInt(res[1]);
	}
    else if(document.getElementById("screen").value.includes("/")){
		res = document.getElementById("screen").value.split('/');
		return parseInt(res[0]) / parseInt(res[1]);
	}
    else{
		res = document.getElementById("screen").value.split('*');
		return answer= parseInt(res[0]) * parseInt(res[1]);
	}

}
		
function equalClick(){	
    var a = che()
    document.getElementById('screen').value = a; 
}
function clearScreen(){
document.getElementById('screen').value=" ";	
}