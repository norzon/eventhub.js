"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// @ts-ignore
(function (global, factory) {
  // @ts-ignore
  if (typeof define === "function" && define.amd) {
    // @ts-ignore
    define(["exports"], factory);
  } // @ts-ignore
  else if (typeof exports !== "undefined") {
      // @ts-ignore
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      mod.exports = factory(mod.exports);
      global = Object.assign(global, mod.exports);
    } // @ts-ignore

})(typeof self !== "undefined" ? self : void 0, function (exports) {
  var EventHub =
  /*#__PURE__*/
  function () {
    function EventHub() {
      _classCallCheck(this, EventHub);

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


    _createClass(EventHub, [{
      key: "on",
      value: function on(event, fn) {
        this.handler[event] = fn;
      }
      /**
       * Removes a handler that was specified using the "on" function,
       * or one of it's aliases
       * @param {string} event The unique key previously given by calling the "on" function
       */

    }, {
      key: "off",
      value: function off(event) {
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

    }, {
      key: "emit",
      value: function emit(event) {
        if (typeof this.handler[event] === "function") {
          var _this$handler;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          (_this$handler = this.handler)[event].apply(_this$handler, args);
        }
      }
    }]);

    return EventHub;
  }();

  exports.EventHub = EventHub;
  return exports;
});