interface EventHubConfig {}

class EventHub {

    private handler: { [key: string]: Function } = {};

    $on: Function = this.on;
    listen: Function = this.on;

    $off: Function = this.off;
    remove: Function = this.off;
    
    $emit: Function = this.emit;
    fire: Function = this.emit;

    on (event: string, fn: Function): void {
        this.handler[event] = fn;
    }

    off (event: string) {
        delete this.handler[event];
        if (this.handler[event] != undefined) {
            this.handler[event] == undefined;
        }
    }

    emit (event: string, ...a: any[]) {
        if (typeof this.handler[event] === "function") {
            this.handler[event](...a);
        }
    }
}