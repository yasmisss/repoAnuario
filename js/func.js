/* Archivo con funcionalidad JS */

function putHand(item) {
	item.style.cursor = 'hand';
}

function hide_unHide(item) {

   var elem = document.getElementById(item) {
      if (elem.style.display == 'block') {
         elem.style.display = 'none';
      } else {
         elem.style.display = 'block';
      }
}