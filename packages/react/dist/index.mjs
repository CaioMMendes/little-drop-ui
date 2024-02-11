var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/index.tsx
import { twMerge } from "tailwind-merge";
import { jsx } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, {
    className,
    size = "sm",
    variant = "primary"
  } = _b, rest = __objRest(_b, [
    "className",
    "size",
    "variant"
  ]);
  console.log(variant);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadValues({
      className: twMerge(
        "flex items-center justify-center  rounded-full px-4  py-2 text-3xl",
        className,
        size === "sm" ? "h-9" : "h-12",
        variant === "primary" && "bg-onyx-600 text-slate-100",
        variant === "secondary" && "bg-red-500 text-black",
        variant === "tertiary" && "bg-orange-500 text-green-400"
      )
    }, rest)
  );
};
export {
  Button
};
