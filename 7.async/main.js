function testCase () {
    clock = new AlarmClock();

    let t = clock.getCurrentFormattedTime();

    clock.addClock(t, () => console.log("ping-pong"),1);

    clock.addClock(("14:59"), () => {
        console.log("ping-pong 2");
        clock.removeClock(2);
    }, 2);

    clock.addClock(("15:00"), () => {
        console.log("ping-pong 3");
        clock.stop();
        clock.clearAlarms();
        clock.printAlarms();
    }, 3);

    clock.printAlarms();

    clock.start();
    
}
