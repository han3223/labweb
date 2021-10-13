document.getElementById('check').onclick = function()
{
	if (document.getElementById('truee').checked) 
	{
		document.getElementById('one_qe').style.backgroundColor = 'green'
	}
	else
	{
		document.getElementById('one_qe').style.backgroundColor = 'red'
	}
	if (document.getElementById('truee1').checked) 
	{
		document.getElementById('two_qe').style.backgroundColor = 'green'
	}
	else
	{
		document.getElementById('two_qe').style.backgroundColor = 'red'
	}
	if (document.getElementById('truee2').checked) 
	{
		document.getElementById('three_qe').style.backgroundColor = 'green'
	}
	else
	{
		document.getElementById('three_qe').style.backgroundColor = 'red'
	}
}