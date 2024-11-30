class Emitter {
  constructor() {
    this.eventsMap = new Map();
  }
  subscribe(eventName, callback) {
    this.eventsMap.set(
      eventName,
      this.eventsMap.get(eventName)
        ? [...this.eventsMap.get(eventName), callback]
        : [callback]
    );
    return {
      release: () => {
        this.eventsMap.set(eventName, [
          ...this.eventsMap.get(eventName).filter((fn) => fn !== callback),
        ]);
      },
    };
  }
  emit(eventName, ...args) {
    const events = this.eventsMap.get(eventName) ?? [];
    for (const executer of events) executer(...args);
  }
}

const emitter = new Emitter();
const callback1 = () => {
  console.log("callback1");
};
const callback2 = () => {
  console.log("callback2");
};
const sub1 = emitter.subscribe("event1", callback1);
const sub2 = emitter.subscribe("event2", callback2);
// same callback could subscribe
// on same event multiple times
const sub3 = emitter.subscribe("event1", callback1);
emitter.emit("event1", 1, 2);
// callback1 will be called twice
sub1.release();
sub3.release();
// now even if we emit 'event1' again,
// callback1 is not called anymore
emitter.emit("event1", 1, 2);
emitter.emit("event2", 1, 2);
