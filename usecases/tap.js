<div id="tap-area"></div>
<script>
  document.getElementById('tap-area').addEventListener('tap', function (event) {
    document.write('You tapped the area with ' + event.fingers + ' finger(s).');
    var touch = event.touches.item(0);
    if (touch) {
      document.write('The tap point is located at (x: ' + touch.clientX + ', y: ' + touch.clientY + ').');
    }
  }, false);
</script>
