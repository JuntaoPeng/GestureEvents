<div id="doubletap-area"></div>
<script>
  document.getElementById('doubletap-area').addEventListener('doubletap', function (event) {
    document.write('You double tapped the area with ' + event.fingers + ' finger(s).');
    var firstTap = event.firstTapTouches.item(0);
    if (firstTap) {
      document.write('The first tap is located at (x: ' + firstTap.clientX + ', y: ' + firstTap.clientY + ').');
    }
    var secondTap = event.secondTapTouches.item(0);
    if (secondTap) {
      document.write('The second tap is located at (x: ' + secondTap.clientX + ', y: ' + secondTap.clientY + ').');
    }
  }, false);
</script>