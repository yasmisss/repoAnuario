/* Archivo con funcionalidad JS */

function hide_unHide(item) {

   var elem = document.getElementById(item) {
      if (elem.style.display == 'block') {
         elem.style.display = 'none';
      } else {
         elem.style.display = 'block';
      }
}