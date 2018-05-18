<div id="pan-area"></div>
<script>
  var panElement = document.getElementById('pan-area');
  var startPosition = { x: 0, y: 0  };
  panElement.addEventListener('panstart', function (event) {
    document.write('Start to pan on this area with ' + event.fingers + ' finger(s).');
    var touch = event.startTouches.item(0);
    if (touch) {
      startPosition.x = touch.clientX;
      startPosition.y = touch.clientY;
    }
  }, false);

  panElement.addEventListener('panend', function (event) {
    var touch = event.endTouches.item(0);
    if (touch) {
      var moveX = touch.clientX - startPosition.x;
      var moveY = touch.clientY - startPosition.y;
      document.write('You have moved x:' + moveX + ' and y:' + moveY + 'distances.');
    }
  }, false);
</script>
