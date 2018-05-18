<div id="longpress-area"></div>
<script>
  document.getElementById('longpress-area').addEventListener('longpress', function (event) {
    document.write('You long pressed the area with ' + event.fingers + ' finger(s).');
    var touch = event.pressTouches.item(0);
    if (touch) {
      document.write('The first press is located at (x: ' + touch.clientX + ', y: ' + touch.clientY + ').');
    }
  }, false);
</script>