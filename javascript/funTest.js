if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission().then(response => {
        if (response === 'granted') {
            startListeningToDeviceMotion();
        } else {
            console.log('Permission denied');
        }
    }).catch(console.error);
} else {
    startListeningToDeviceMotion();
}

function startListeningToDeviceMotion() {
    window.addEventListener('devicemotion', function(event) {
        const x = event.acceleration.x;
        const y = event.acceleration.y;
        const z = event.acceleration.z;

        console.log(`X: ${x}, Y: ${y}, Z: ${z}`);

        const shakeThreshold = 50;
        if (Math.abs(x) + Math.abs(y) + Math.abs(z) > shakeThreshold) {
            navigator.vibrate(50);
        }
    });
}