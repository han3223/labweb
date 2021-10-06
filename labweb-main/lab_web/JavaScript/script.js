var password = document.getElementById('password')
var repassword = document.getElementById('repeatpassword')
var chek = document.getElementById('galochka')

repassword.onblur = function()
{
	if (password.value != repassword.value) {
		alert('Пароли не совпадают!')
	}

	else{
		chek.style.opacity = '100'
	}
}