<div id="pinch-area"></div>
<script>
  document.getElementById('pinch-area').addEventListener('pinchend', function (event) {
    document.write('A pinch gesture is done. The pinch zoom direction is '
      + event.zoom + ', and the scale is ' + event.scale + '.');
  }, false);
</script>
