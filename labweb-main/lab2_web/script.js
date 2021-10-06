var form = document.getElementById('form_block')
var enterForm = document.getElementById('subform')
var exitForm = document.getElementById('background_block')

enterForm.onclick = function()
{
	form.style.opacity = '100' 
 	form.style.zIndex = '99'
 	form.style.right = '0'
}

exitForm.onclick = function()
{
	form.style.opacity = '0' 
 	form.style.zIndex = '-99'
 	form.style.right = '1000000px'
}