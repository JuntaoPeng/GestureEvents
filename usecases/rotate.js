<div id="rotate-area"></div>
<script>
  var rotateElement = document.getElementById('rotate-element');
  panElement.addEventListener('rotatestart', function (event) {
    document.write('Start to rotate on this area.');
    var touch = event.startTouches.item(0);
    if (touch) {
      document.write('The start rotate touch is located at (x: ' + touch.clientX + ', y: ' + touch.clientY + ').');
    }
  }, false);

  panElement.addEventListener('rotateend', function (event) {
    document.write('A rotate gesture is done. The rotated degree is '
      + event.degree + '.');
    var touch = event.endTouches.item(0);
    if (touch) {
      document.write('The end rotate touch is located at (x: ' + touch.clientX + ', y: ' + touch.clientY + ').');
    }
  }, false);
</script>