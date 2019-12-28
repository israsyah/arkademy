//Soal2
function form(nama,usia,username){
	if(/([A-Z]){3,}/.test(nama)){
   		if(/^[0-9]{1,2}[:.,-]?$/.test(usia)){
    		if(/[a-z]{4,}/.test(username)){
            	return "Success"
            }
          	else{
            	return "Username Wrong"
            }
    	}else{
    		return "Age Wrong"
    	}   
	}else{
	return "Name Wrong"
	}
}

console.log(form('NFL',22,"isra"))