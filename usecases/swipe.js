<div id="swipe-area"></div>
<script>
  document.getElementById('swipe-area').addEventListener('swipeend', function (event) {
    document.write('A swipe gesture is done. The moving direction is '
      + event.direction + ', and the velocity is ' + event.velocity + '.');
  }, false);
</script>
