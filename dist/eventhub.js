"use strict";
class EventHub {
    constructor() {
        this.handler = {};
        this.$on = this.on;
        this.listen = this.on;
        this.$off = this.off;
        this.remove = this.off;
        this.$emit = this.emit;
        this.fire = this.emit;
    }
    on(event, fn) {
        this.handler[event] = fn;
    }
    off(event) {
        delete this.handler[event];
        if (this.handler[event] != undefined) {
            this.handler[event] == undefined;
        }
    }
    emit(event, ...a) {
        if (typeof this.handler[event] === "function") {
            this.handler[event](...a);
        }
    }
}
