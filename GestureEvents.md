# Gesture Events
## TapEvent
* definition: one or 2 fingers press, lift
* Usage: Select / Zoom in
* Interface
interface TapEvent {
readonly attribute TouchList touches;
readonly attribute long fingers; // only support 1 and 2
}
* Event:
tap
## PanEvent
* Definition: One or 2 fingers press, move, lift
* Usage: Dismiss, scroll, tilt / select multiple items, pan, tilt
* Interface
Interface PanEvent {
readonly attribute TouchList startTouches;
readonly attribute TouchList endTouches;
readonly attribute TouchList movingTouches;
readonly attribute long fingers; // only support 1 and 2
}
* Event:
panstart
panmove
panend
## SwipeEvent
* Definition: One fingers press, move quickly, lift
* Usage: Dismiss, scroll, tilt / select multiple items, pan, tilt
* Interface
Interface SwipeEvent {
readonly attribute Touch startTouch;
readonly attribute Touch endTouch;
readonly attribute double velocity;
Readonly attribute double direction;
}
* Event
swipestart
swipemove
swipeend
## PinchEvent
* Definition: Two fingers press, move in/outwards, lift
* Usage: Zoom in/out
* Interface
interface Enum PinchZoom {
IN,
OUT
}
Interface PinchEvent {
readonly attribute TouchList startTouches;
readonly attribute TouchList endTouches;
readonly attribute double scale;
readonly attribute enum PinchZoom zoom;
}
* Event:
pinchstart
pinchmove
pinchend
## LongPressEvent
* Definition: One or 2 fingers press, wait, lift
* Usage: Select an element, 
* Interface
Interface LongPressEvent {
readonly attribute TouchList pressTouches;
readonly attribute long fingers; // only support 1 and 2
}
* Event:
longpress
## DoubleTapEvent
* Definition: One or 2 fingers press, lift, one or 2 fingers press, lift
* Usage: Selection / Context menu
* Interface
Interface DoubleTapEvent {
readonly attribute TouchList firstTapTouches;
readonly attribute TouchList secondTapTouches;
readonly attribute long fingers; // only support 1 and 2
}
* Event:
doubletap
## RotateEvent
* Definition: 2 fingers press, simultaneously orbit both fingers around the center point, lift.
* Usage: Rotate content, a picture or a map.
* Interface
Interface RotateEvent {
readonly attribute TouchList startTouches;
readonly attribute TouchList endTouches;
readonly attribute TouchList rotatingTouches;
readonly attribute double degree;
}
* Event:
rotatestart
rotatemove
rotateend
