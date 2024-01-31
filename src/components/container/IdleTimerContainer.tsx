import SignIn from "pages/SignIn/SignIn";
import { useRef } from "react";
import { useIdleTimer } from "react-idle-timer";

function IdleTimerContainer() {
  const idleTimerRef = useRef(null);

  const onIdle = () => {
    console.log("You are idle for 5 seconds");
    // sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  const idleTimer = useIdleTimer({
    crossTab: true,
    ref: idleTimerRef,
    timeout: 3600000,
    onIdle,
    events: [
        'mousemove',
        'keydown',
        'wheel',
        'DOMMouseScroll',
        'mousewheel',
        'mousedown',
        'touchstart',
        'touchmove',
        'MSPointerDown',
        'MSPointerMove',
        'visibilitychange',
        'focus'
      ],
  });

  return (
    <SignIn />
  );
}

export default IdleTimerContainer;
