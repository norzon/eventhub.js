(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    class EventHub {
        constructor() {
            this.$on = this.on;
            this.listen = this.on;
            this.$off = this.off;
            this.remove = this.off;
            this.$emit = this.emit;
            this.fire = this.emit;
            /**
             * Stores the callback functions in an object,
             * in order to be used later, after an emit event.
             */
            this.handler = {};
        }
        /**
         * Attach the given function to the key specified.
         * @param {string} event The unique key
         * @param {Function} fn The callback function to execute
         */
        on(event, fn) {
            this.handler[event] = fn;
        }
        /**
         * Removes a handler that was specified using the "on" function,
         * or one of it's aliases
         * @param {string} event The unique key previously given by calling the "on" function
         */
        off(event) {
            delete this.handler[event];
            if (this.handler[event] != undefined) {
                this.handler[event] == undefined;
            }
        }
        /**
         * Calls the function identified by the key and passes
         * the arguments to the function
         * @param event The unique key used to attach an event
         * @param args The arguments to pass to the callback function
         */
        emit(event, ...args) {
            if (typeof this.handler[event] === "function") {
                this.handler[event](...args);
            }
        }
    }
    exports.default = EventHub;
});
