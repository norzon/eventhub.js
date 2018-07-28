// @ts-ignore
(function (global, factory) {
    // @ts-ignore
    if (typeof define === "function" && define.amd) {
        // @ts-ignore
        define(["exports"], factory);
    }
    // @ts-ignore
    else if (typeof exports !== "undefined") {
        // @ts-ignore
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        mod.exports = factory(mod.exports);
        global = Object.assign(global, mod.exports);
    }
// @ts-ignore
})(typeof self !== "undefined" ? self : this, function (exports) {
    class EventHub {

        $on: EventHub["on"] = this.on;
        listen: EventHub["on"] = this.on;
        
        $off: EventHub["off"] = this.off;
        remove: EventHub["off"] = this.off;
        
        $emit: EventHub["emit"] = this.emit;
        fire: EventHub["emit"] = this.emit;
    
        /**
         * Stores the callback functions in an object,
         * in order to be used later, after an emit event.
         */
        private handler: { [key: string]: Function } = {};
    
        /**
         * Attach the given function to the key specified.
         * @param {string} event The unique key
         * @param {Function} fn The callback function to execute
         */
        on (event: string, fn: Function): void {
            this.handler[event] = fn;
        }
    
        /**
         * Removes a handler that was specified using the "on" function,
         * or one of it's aliases
         * @param {string} event The unique key previously given by calling the "on" function
         */
        off (event: string): void {
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
        emit (event: string, ...args: any[]): void {
            if (typeof this.handler[event] === "function") {
                this.handler[event](...args);
            }
        }
    }
    exports.EventHub = EventHub;
    return exports;
});
