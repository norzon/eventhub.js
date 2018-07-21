declare class EventHub {
    $on: EventHub["on"];
    listen: EventHub["on"];
    $off: EventHub["off"];
    remove: EventHub["off"];
    $emit: EventHub["emit"];
    fire: EventHub["emit"];
    /**
     * Stores the callback functions in an object,
     * in order to be used later, after an emit event.
     */
    private handler;
    /**
     * Attach the given function to the key specified.
     * @param {string} event The unique key
     * @param {Function} fn The callback function to execute
     */
    on(event: string, fn: Function): void;
    /**
     * Removes a handler that was specified using the "on" function,
     * or one of it's aliases
     * @param {string} event The unique key previously given by calling the "on" function
     */
    off(event: string): void;
    /**
     * Calls the function identified by the key and passes
     * the arguments to the function
     * @param event The unique key used to attach an event
     * @param args The arguments to pass to the callback function
     */
    emit(event: string, ...args: any[]): void;
}
export = EventHub;
