
document. getElementById ('select') .onclick = function() {

var checkboxes = 
document.querySelectorAll('input[type="checkbox"]:checked');

 alert(checkboxes.length);
}
