"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storage = require("./src/storage");

Object.keys(_storage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _storage[key];
    }
  });
});

var _judgment = require("./src/judgment");

Object.keys(_judgment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _judgment[key];
    }
  });
});
