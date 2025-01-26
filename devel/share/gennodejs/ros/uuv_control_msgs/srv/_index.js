
"use strict";

let InitWaypointsFromFile = require('./InitWaypointsFromFile.js')
let AddWaypoint = require('./AddWaypoint.js')
let Hold = require('./Hold.js')
let InitHelicalTrajectory = require('./InitHelicalTrajectory.js')
let SetPIDParams = require('./SetPIDParams.js')
let ResetController = require('./ResetController.js')
let InitWaypointSet = require('./InitWaypointSet.js')
let SetSMControllerParams = require('./SetSMControllerParams.js')
let GetSMControllerParams = require('./GetSMControllerParams.js')
let GetWaypoints = require('./GetWaypoints.js')
let SwitchToManual = require('./SwitchToManual.js')
let SetMBSMControllerParams = require('./SetMBSMControllerParams.js')
let SwitchToAutomatic = require('./SwitchToAutomatic.js')
let GoToIncremental = require('./GoToIncremental.js')
let IsRunningTrajectory = require('./IsRunningTrajectory.js')
let InitCircularTrajectory = require('./InitCircularTrajectory.js')
let GetMBSMControllerParams = require('./GetMBSMControllerParams.js')
let ClearWaypoints = require('./ClearWaypoints.js')
let GoTo = require('./GoTo.js')
let InitRectTrajectory = require('./InitRectTrajectory.js')
let GetPIDParams = require('./GetPIDParams.js')
let StartTrajectory = require('./StartTrajectory.js')

module.exports = {
  InitWaypointsFromFile: InitWaypointsFromFile,
  AddWaypoint: AddWaypoint,
  Hold: Hold,
  InitHelicalTrajectory: InitHelicalTrajectory,
  SetPIDParams: SetPIDParams,
  ResetController: ResetController,
  InitWaypointSet: InitWaypointSet,
  SetSMControllerParams: SetSMControllerParams,
  GetSMControllerParams: GetSMControllerParams,
  GetWaypoints: GetWaypoints,
  SwitchToManual: SwitchToManual,
  SetMBSMControllerParams: SetMBSMControllerParams,
  SwitchToAutomatic: SwitchToAutomatic,
  GoToIncremental: GoToIncremental,
  IsRunningTrajectory: IsRunningTrajectory,
  InitCircularTrajectory: InitCircularTrajectory,
  GetMBSMControllerParams: GetMBSMControllerParams,
  ClearWaypoints: ClearWaypoints,
  GoTo: GoTo,
  InitRectTrajectory: InitRectTrajectory,
  GetPIDParams: GetPIDParams,
  StartTrajectory: StartTrajectory,
};
