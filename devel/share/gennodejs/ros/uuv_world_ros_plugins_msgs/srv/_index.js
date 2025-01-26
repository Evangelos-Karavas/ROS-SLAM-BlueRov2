
"use strict";

let GetCurrentModel = require('./GetCurrentModel.js')
let GetOriginSphericalCoord = require('./GetOriginSphericalCoord.js')
let TransformToSphericalCoord = require('./TransformToSphericalCoord.js')
let SetOriginSphericalCoord = require('./SetOriginSphericalCoord.js')
let TransformFromSphericalCoord = require('./TransformFromSphericalCoord.js')
let SetCurrentVelocity = require('./SetCurrentVelocity.js')
let SetCurrentModel = require('./SetCurrentModel.js')
let SetCurrentDirection = require('./SetCurrentDirection.js')

module.exports = {
  GetCurrentModel: GetCurrentModel,
  GetOriginSphericalCoord: GetOriginSphericalCoord,
  TransformToSphericalCoord: TransformToSphericalCoord,
  SetOriginSphericalCoord: SetOriginSphericalCoord,
  TransformFromSphericalCoord: TransformFromSphericalCoord,
  SetCurrentVelocity: SetCurrentVelocity,
  SetCurrentModel: SetCurrentModel,
  SetCurrentDirection: SetCurrentDirection,
};
