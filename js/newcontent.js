 //select button for "type of model"

      $('body').on('click', '.btn-group button', function (e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    
    //do any other button related things
});

document.getElementById("additionbutton").addEventListener("click", function(){		
     document.getElementById('viewmodeladdition').style.display='block';
	 document.getElementById('viewmodelsubtraction').style.display='none';
	 document.getElementById('viewmodelmultiplication').style.display='none';
	 document.getElementById('viewmodeldivision').style.display='none';
		document.getElementById('modelA1').style.display='inline';
		document.getElementById('modelA2').style.display='inline';
		document.getElementById('formquestion').style.display='block';
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
					
		document.getElementById('upload').style.display='block';
	
		
});

document.getElementById("subtractionbutton").addEventListener("click", function(){		
     document.getElementById('viewmodeladdition').style.display='none';
	 document.getElementById('viewmodelsubtraction').style.display='block';
	 document.getElementById('viewmodelmultiplication').style.display='none';
	 document.getElementById('viewmodeldivision').style.display='none';
		document.getElementById('modelS1').style.display='inline';
		document.getElementById('modelS2').style.display='inline';
		document.getElementById('formquestion').style.display='block';
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
					
		document.getElementById('upload').style.display='block';
});

document.getElementById("multiplicationbutton").addEventListener("click", function(){		
	 document.getElementById('viewmodeladdition').style.display='none';
	 document.getElementById('viewmodelsubtraction').style.display='none';
	 document.getElementById('viewmodelmultiplication').style.display='block';
	 document.getElementById('viewmodeldivision').style.display='none';
		document.getElementById('modelM1').style.display='inline';
		document.getElementById('formquestion').style.display='block';
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
				
		document.getElementById('upload').style.display='block';
});

document.getElementById("divisionbutton").addEventListener("click", function(){		
	 document.getElementById('viewmodeladdition').style.display='none';
	 document.getElementById('viewmodelsubtraction').style.display='none';
	 document.getElementById('viewmodelmultiplication').style.display='none';
	 document.getElementById('viewmodeldivision').style.display='block';
		document.getElementById('modelD1').style.display='inline';
		document.getElementById('modelD2').style.display='inline';
		document.getElementById('formquestion').style.display='block';
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';

		document.getElementById('upload').style.display='block';
});

document.getElementById("additionA1").addEventListener("click", function(){
				document.getElementById('valueunknownaddition1').style.display='block';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
				document.getElementById('optionA11').style.display='inline';
				document.getElementById('optionA21').style.display='none';
				document.getElementById('optionS11').style.display='none';
				document.getElementById('optionS12').style.display='none';
				document.getElementById('optionS21').style.display='none';
				document.getElementById('optionS22').style.display='none';
				document.getElementById('optionM11').style.display='none';
				document.getElementById('optionD11').style.display='none';
				document.getElementById('optionD21').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
		
			});


document.getElementById("additionA2").addEventListener("click", function(){
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='block';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
				document.getElementById('optionA11').style.display='none';
				document.getElementById('optionA21').style.display='inline';
				document.getElementById('optionS11').style.display='none';
				document.getElementById('optionS12').style.display='none';
				document.getElementById('optionS21').style.display='none';
				document.getElementById('optionS22').style.display='none';
				document.getElementById('optionM11').style.display='none';
				document.getElementById('optionD11').style.display='none';
				document.getElementById('optionD21').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
		
			});
			
document.getElementById("subtractionS1").addEventListener("click", function(){
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='block';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
				document.getElementById('optionA11').style.display='none';
				document.getElementById('optionA21').style.display='none';
				document.getElementById('optionS11').style.display='inline';
				document.getElementById('optionS12').style.display='inline';
				document.getElementById('optionS21').style.display='none';
				document.getElementById('optionS22').style.display='none';
				document.getElementById('optionM11').style.display='none';
				document.getElementById('optionD11').style.display='none';
				document.getElementById('optionD21').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
		
			});

document.getElementById("subtractionS2").addEventListener("click", function(){
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='block';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
				document.getElementById('optionA11').style.display='none';
				document.getElementById('optionA21').style.display='none';
				document.getElementById('optionS11').style.display='none';
				document.getElementById('optionS12').style.display='none';
				document.getElementById('optionS21').style.display='inline';
				document.getElementById('optionS22').style.display='inline';
				document.getElementById('optionM11').style.display='none';
				document.getElementById('optionD11').style.display='none';
				document.getElementById('optionD21').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
		
			});

document.getElementById("multiplicationM1").addEventListener("click", function(){
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='block';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='none';
				document.getElementById('optionA11').style.display='none';
				document.getElementById('optionA21').style.display='none';
				document.getElementById('optionS11').style.display='none';
				document.getElementById('optionS12').style.display='none';
				document.getElementById('optionS21').style.display='none';
				document.getElementById('optionS22').style.display='none';
				document.getElementById('optionM11').style.display='inline';
				document.getElementById('optionD11').style.display='none';
				document.getElementById('optionD21').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
		
			});

document.getElementById("divisionD1").addEventListener("click", function(){
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='block';
				document.getElementById('valueunknowndivision2').style.display='none';
				document.getElementById('optionA11').style.display='none';
				document.getElementById('optionA21').style.display='none';
				document.getElementById('optionS11').style.display='none';
				document.getElementById('optionS12').style.display='none';
				document.getElementById('optionS21').style.display='none';
				document.getElementById('optionS22').style.display='none';
				document.getElementById('optionM11').style.display='none';
				document.getElementById('optionD11').style.display='inline';
				document.getElementById('optionD21').style.display='none';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
		
			});

document.getElementById("divisionD2").addEventListener("click", function(){
				document.getElementById('valueunknownaddition1').style.display='none';
				document.getElementById('valueunknownaddition2').style.display='none';
				document.getElementById('valueunknownsubtraction1').style.display='none';
				document.getElementById('valueunknownsubtraction2').style.display='none';
				document.getElementById('valueunknownmultiplication1').style.display='none';
				document.getElementById('valueunknowndivision1').style.display='none';
				document.getElementById('valueunknowndivision2').style.display='block';
				document.getElementById('optionA11').style.display='none';
				document.getElementById('optionA21').style.display='none';
				document.getElementById('optionS11').style.display='none';
				document.getElementById('optionS12').style.display='none';
				document.getElementById('optionS21').style.display='none';
				document.getElementById('optionS22').style.display='none';
				document.getElementById('optionM11').style.display='none';
				document.getElementById('optionD11').style.display='none';
				document.getElementById('optionD21').style.display='inline';
					document.getElementById('valueA11').style.display='none';
					document.getElementById('valueA21').style.display='none';
					document.getElementById('valueS11').style.display='none';
					document.getElementById('valueS12').style.display='none';
					document.getElementById('valueS21').style.display='none';
					document.getElementById('valueS22').style.display='none';
					document.getElementById('valueM11').style.display='none';
					document.getElementById('valueD11').style.display='none';
					document.getElementById('valueD21').style.display='none';
		
			});

document.getElementById("optionA11").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='block';
				document.getElementById('valueA12').style.display='none';
				document.getElementById('valueS11').style.display='none';
				document.getElementById('valueS12').style.display='none';
				document.getElementById('valueS21').style.display='none';
				document.getElementById('valueS22').style.display='none';
				document.getElementById('valueM11').style.display='none';
				document.getElementById('valueD11').style.display='none';
				document.getElementById('valueD21').style.display='none';
				
			});

document.getElementById("optionA21").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='none';
				document.getElementById('valueA21').style.display='block';
				document.getElementById('valueS11').style.display='none';
				document.getElementById('valueS12').style.display='none';
				document.getElementById('valueS21').style.display='none';
				document.getElementById('valueS22').style.display='none';
				document.getElementById('valueM11').style.display='none';
				document.getElementById('valueD11').style.display='none';
				document.getElementById('valueD21').style.display='none';
				
			});
			
document.getElementById("optionS11").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='none';
				document.getElementById('valueA21').style.display='none';
				document.getElementById('valueS11').style.display='block';
				document.getElementById('valueS12').style.display='none';
				document.getElementById('valueS21').style.display='none';
				document.getElementById('valueS22').style.display='none';
				document.getElementById('valueM11').style.display='none';
				document.getElementById('valueD11').style.display='none';
				document.getElementById('valueD21').style.display='none';
				
			});			

document.getElementById("optionS12").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='none';
				document.getElementById('valueA21').style.display='none';
				document.getElementById('valueS11').style.display='none';
				document.getElementById('valueS12').style.display='block';
				document.getElementById('valueS21').style.display='none';
				document.getElementById('valueS22').style.display='none';
				document.getElementById('valueM11').style.display='none';
				document.getElementById('valueD11').style.display='none';
				document.getElementById('valueD21').style.display='none';
				
			});
			
document.getElementById("optionS21").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='none';
				document.getElementById('valueA21').style.display='none';
				document.getElementById('valueS11').style.display='none';
				document.getElementById('valueS12').style.display='none';
				document.getElementById('valueS21').style.display='block';
				document.getElementById('valueS22').style.display='none';
				document.getElementById('valueM11').style.display='none';
				document.getElementById('valueD11').style.display='none';
				document.getElementById('valueD21').style.display='none';
				
			});
			
document.getElementById("optionS22").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='none';
				document.getElementById('valueA21').style.display='none';
				document.getElementById('valueS11').style.display='none';
				document.getElementById('valueS12').style.display='none';
				document.getElementById('valueS21').style.display='none';
				document.getElementById('valueS22').style.display='block';
				document.getElementById('valueM11').style.display='none';
				document.getElementById('valueD11').style.display='none';
				document.getElementById('valueD21').style.display='none';
				
			});
			
document.getElementById("optionM11").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='none';
				document.getElementById('valueA21').style.display='none';
				document.getElementById('valueS11').style.display='none';
				document.getElementById('valueS12').style.display='none';
				document.getElementById('valueS21').style.display='none';
				document.getElementById('valueS22').style.display='none';
				document.getElementById('valueM11').style.display='block';
				document.getElementById('valueD11').style.display='none';
				document.getElementById('valueD21').style.display='none';
				
			});
			
document.getElementById("optionD11").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='none';
				document.getElementById('valueA21').style.display='none';
				document.getElementById('valueS11').style.display='none';
				document.getElementById('valueS12').style.display='none';
				document.getElementById('valueS21').style.display='none';
				document.getElementById('valueS22').style.display='none';
				document.getElementById('valueM11').style.display='none';
				document.getElementById('valueD11').style.display='block';
				document.getElementById('valueD21').style.display='none';
				
			});
			
document.getElementById("optionD21").addEventListener("click", function(){
				document.getElementById('valueA11').style.display='none';
				document.getElementById('valueA21').style.display='none';
				document.getElementById('valueS11').style.display='none';
				document.getElementById('valueS12').style.display='none';
				document.getElementById('valueS21').style.display='none';
				document.getElementById('valueS22').style.display='none';
				document.getElementById('valueM11').style.display='none';
				document.getElementById('valueD11').style.display='none';
				document.getElementById('valueD21').style.display='block';
				
			});