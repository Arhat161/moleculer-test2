const { MoleculerError } = require("moleculer").Errors;

const ApiService = require("moleculer-web");

const MathService = require("../mixins/string.operations");

module.exports = {
  name: "test",
  mixins: [ApiService, MathService],
  settings: {
    port: 4000,
    routes: [
      {
        path: "/api/test",
        whitelist: [
          // Access any actions in 'math' service
          /^test\.\w+$/,
        ],
        aliases: {
          add: "test.getSum",
        },
      },
    ],
  },
  actions: {
    // сумма двух чисел
    getSum: {
      params: {
        a: { type: "number", convert: true },
        b: { type: "number", convert: true },
      },
      handler(ctx) {
        // отправляем события и параметры - на логгер calc.logger
        this.broker.emit("calc.logger2", { params: ctx.params });
        //this.broker.emit("simple.logger", { params: ctx.params });
        // конвертируем параметры
        let a = Number(ctx.params.a);
        let b = Number(ctx.params.b);
        // возвращаем результат
        return a + b;
      },
    },
  },
};
