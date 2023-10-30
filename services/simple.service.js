const { MoleculerError } = require("moleculer").Errors;

const ApiService = require("moleculer-web");

const MathService = require("../mixins/math.operations");

module.exports = {
  name: "calc",
  mixins: [ApiService, MathService],
  actions: {
    returnSqrt(ctx) {
      return this.getSqrt(ctx);
    },
    returnSum(ctx) {
      return this.getSum(ctx);
    },
    returnSub(ctx) {
      return this.getSub(ctx);
    },
    returnDiv(ctx) {
      return this.getDiv(ctx);
    },
    returnMult(ctx) {
      return this.getMult(ctx);
    },
  },
  settings: {
    routes: [
      {
        path: "/api/calc",
        whitelist: [
          // Access any actions in 'math' service
          /^calc\.\w+$/,
        ],
        aliases: {
          add: "calc.returnSum",
          sub: "calc.returnSub",
          mult: "calc.returnMult",
          div: "calc.returnDiv",
          sqrt: "calc.returnSqrt",
        },
      },
    ],
  },
  events: {
    "simple.logger": {
      context: true,
      handler(other) {
        console.log(
          `${this.broker.nodeID}:${this.fullName}: Event '${other.eventName}' received. Payload:`,
          other.params,
          other.meta
        );
      },
    },
    /*----------------------------------*/
    "calc.logger2": {
      context: true,
      handler(other) {
        console.log(
          `${this.broker.nodeID}:${this.fullName}: Event '${other.eventName}' received. Payload:`,
          other.params,
          other.meta
        );
      },
    },
  },
};

// node node_modules/moleculer/bin/moleculer-runner --hot --repl services\simple.service.js
// actions
// call math.div --a 120 --b 12
