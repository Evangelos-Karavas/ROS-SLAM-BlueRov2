
"use strict";

let MessageInterval = require('./MessageInterval.js')
let ParamPull = require('./ParamPull.js')
let WaypointClear = require('./WaypointClear.js')
let FileMakeDir = require('./FileMakeDir.js')
let CommandLong = require('./CommandLong.js')
let FileRename = require('./FileRename.js')
let FileWrite = require('./FileWrite.js')
let ParamPush = require('./ParamPush.js')
let LogRequestData = require('./LogRequestData.js')
let FileRead = require('./FileRead.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let FileRemove = require('./FileRemove.js')
let StreamRate = require('./StreamRate.js')
let MountConfigure = require('./MountConfigure.js')
let CommandInt = require('./CommandInt.js')
let CommandTOL = require('./CommandTOL.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let FileClose = require('./FileClose.js')
let CommandHome = require('./CommandHome.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let ParamGet = require('./ParamGet.js')
let SetMavFrame = require('./SetMavFrame.js')
let FileTruncate = require('./FileTruncate.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let SetMode = require('./SetMode.js')
let CommandAck = require('./CommandAck.js')
let ParamSet = require('./ParamSet.js')
let WaypointPush = require('./WaypointPush.js')
let CommandBool = require('./CommandBool.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let WaypointPull = require('./WaypointPull.js')
let FileOpen = require('./FileOpen.js')
let LogRequestList = require('./LogRequestList.js')
let FileList = require('./FileList.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let FileChecksum = require('./FileChecksum.js')

module.exports = {
  MessageInterval: MessageInterval,
  ParamPull: ParamPull,
  WaypointClear: WaypointClear,
  FileMakeDir: FileMakeDir,
  CommandLong: CommandLong,
  FileRename: FileRename,
  FileWrite: FileWrite,
  ParamPush: ParamPush,
  LogRequestData: LogRequestData,
  FileRead: FileRead,
  CommandTriggerControl: CommandTriggerControl,
  FileRemove: FileRemove,
  StreamRate: StreamRate,
  MountConfigure: MountConfigure,
  CommandInt: CommandInt,
  CommandTOL: CommandTOL,
  CommandTriggerInterval: CommandTriggerInterval,
  FileClose: FileClose,
  CommandHome: CommandHome,
  VehicleInfoGet: VehicleInfoGet,
  ParamGet: ParamGet,
  SetMavFrame: SetMavFrame,
  FileTruncate: FileTruncate,
  CommandVtolTransition: CommandVtolTransition,
  SetMode: SetMode,
  CommandAck: CommandAck,
  ParamSet: ParamSet,
  WaypointPush: WaypointPush,
  CommandBool: CommandBool,
  WaypointSetCurrent: WaypointSetCurrent,
  WaypointPull: WaypointPull,
  FileOpen: FileOpen,
  LogRequestList: LogRequestList,
  FileList: FileList,
  FileRemoveDir: FileRemoveDir,
  LogRequestEnd: LogRequestEnd,
  FileChecksum: FileChecksum,
};
