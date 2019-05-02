"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var x = new like_component_1.LikeComponent(10, true);
x.onclick();
console.log("likesCount: " + x.likesCount + " and isSelected " + x.isSelected);
