"use strict";

module.exports = {
  name: "math.operation",

  // методы миксина
  methods: {
    // сумма двух чисел
    getSum: {
      params: {
        a: "number",
        b: "number",
      },
      handler(ctx) {
        // отправляем события и параметры - на логгер simple.logger
        this.broker.emit("simple.logger", { params: ctx.params });
        // конвертируем параметры
        let a = Number(ctx.params.a);
        let b = Number(ctx.params.b);
        // возвращаем результат
        return a + b;
      },
    },
    // разность двух чисел
    getSub: {
      params: {
        a: "number",
        b: "number",
      },
      handler(ctx) {
        // отправляем события и параметры - на логгер simple.logger
        this.broker.emit("simple.logger", { params: ctx.params });
        return Number(ctx.params.a) - Number(ctx.params.b);
      },
    },
    // деление числа A на число B
    getDiv: {
      params: {
        a: "number",
        b: "number",
      },
      handler(ctx) {
        // отправляем события и параметры - на логгер simple.logger
        this.broker.emit("simple.logger", { params: ctx.params });
        let a = Number(ctx.params.a);
        let b = Number(ctx.params.b);
        let result;
        if (b != 0 && !Number.isNaN(b)) result = a / b;
        else throw new MoleculerError("Divide by zero!", 422, null, ctx.params);
        return result;
      },
    },
    // умножение числа A на число B
    getMult: {
      params: {
        a: "number",
        b: "number",
      },
      handler(ctx) {
        // отправляем события и параметры - на логгер simple.logger
        this.broker.emit("simple.logger", { params: ctx.params });
        return Number(ctx.params.a) * Number(ctx.params.b);
      },
    },
    // корень квадратный
    getSqrt: {
      params: {
        a: "number",
      },
      handler(ctx) {
        // отправляем события и параметры - на логгер simple.logger
        this.broker.emit("simple.logger", { params: ctx.params });
        let a = Number(ctx.params.a);
        if (a != 0 && !Number.isNaN(a)) return Math.sqrt(a);
        else throw new MoleculerError("Zero!", 422, null, ctx.params);
      },
    },
  },
};
