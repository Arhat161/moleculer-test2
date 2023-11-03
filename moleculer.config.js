"use strict";

module.exports = {
  transporter: "TCP",
  logger: [
    // The console logger will use the `logLevel` global setting.
    {
      type: "Console",
      options: {
        // Overwrite the global setting.
        level: "trace",
      }
    }
  ],
  logLevel: "info",
  cacher: {
    type: "memory",
    options: {
      maxParamsLength: 100
    }
  },
  metrics: false,

  tracing: {
    enabled: true,
    exporter: [
      {
        type: "Console",
        options: {
          width: 100,
          colors: true,
        }
      }
    ]
  },

  validator: true
};