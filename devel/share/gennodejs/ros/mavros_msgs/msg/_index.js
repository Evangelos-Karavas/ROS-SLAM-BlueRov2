
"use strict";

let CellularStatus = require('./CellularStatus.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let ESCStatus = require('./ESCStatus.js');
let Altitude = require('./Altitude.js');
let MountControl = require('./MountControl.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let VehicleInfo = require('./VehicleInfo.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let StatusText = require('./StatusText.js');
let GPSRAW = require('./GPSRAW.js');
let RTKBaseline = require('./RTKBaseline.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let DebugValue = require('./DebugValue.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let Vibration = require('./Vibration.js');
let WaypointReached = require('./WaypointReached.js');
let ExtendedState = require('./ExtendedState.js');
let RTCM = require('./RTCM.js');
let HilSensor = require('./HilSensor.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let FileEntry = require('./FileEntry.js');
let Waypoint = require('./Waypoint.js');
let HomePosition = require('./HomePosition.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let LandingTarget = require('./LandingTarget.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let Param = require('./Param.js');
let CommandCode = require('./CommandCode.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let GPSINPUT = require('./GPSINPUT.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let TerrainReport = require('./TerrainReport.js');
let ESCInfo = require('./ESCInfo.js');
let ManualControl = require('./ManualControl.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let WaypointList = require('./WaypointList.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let State = require('./State.js');
let HilControls = require('./HilControls.js');
let ActuatorControl = require('./ActuatorControl.js');
let Mavlink = require('./Mavlink.js');
let HilGPS = require('./HilGPS.js');
let Thrust = require('./Thrust.js');
let GPSRTK = require('./GPSRTK.js');
let LogData = require('./LogData.js');
let ParamValue = require('./ParamValue.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let LogEntry = require('./LogEntry.js');
let BatteryStatus = require('./BatteryStatus.js');
let RCOut = require('./RCOut.js');
let VFR_HUD = require('./VFR_HUD.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let RCIn = require('./RCIn.js');
let RadioStatus = require('./RadioStatus.js');
let Tunnel = require('./Tunnel.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let PositionTarget = require('./PositionTarget.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let Trajectory = require('./Trajectory.js');

module.exports = {
  CellularStatus: CellularStatus,
  OpticalFlowRad: OpticalFlowRad,
  ESCStatus: ESCStatus,
  Altitude: Altitude,
  MountControl: MountControl,
  MagnetometerReporter: MagnetometerReporter,
  VehicleInfo: VehicleInfo,
  TimesyncStatus: TimesyncStatus,
  ESCStatusItem: ESCStatusItem,
  StatusText: StatusText,
  GPSRAW: GPSRAW,
  RTKBaseline: RTKBaseline,
  WheelOdomStamped: WheelOdomStamped,
  AttitudeTarget: AttitudeTarget,
  DebugValue: DebugValue,
  HilStateQuaternion: HilStateQuaternion,
  Vibration: Vibration,
  WaypointReached: WaypointReached,
  ExtendedState: ExtendedState,
  RTCM: RTCM,
  HilSensor: HilSensor,
  CompanionProcessStatus: CompanionProcessStatus,
  FileEntry: FileEntry,
  Waypoint: Waypoint,
  HomePosition: HomePosition,
  CamIMUStamp: CamIMUStamp,
  LandingTarget: LandingTarget,
  ESCInfoItem: ESCInfoItem,
  NavControllerOutput: NavControllerOutput,
  EstimatorStatus: EstimatorStatus,
  Param: Param,
  CommandCode: CommandCode,
  OverrideRCIn: OverrideRCIn,
  GPSINPUT: GPSINPUT,
  GlobalPositionTarget: GlobalPositionTarget,
  TerrainReport: TerrainReport,
  ESCInfo: ESCInfo,
  ManualControl: ManualControl,
  ESCTelemetry: ESCTelemetry,
  WaypointList: WaypointList,
  HilActuatorControls: HilActuatorControls,
  PlayTuneV2: PlayTuneV2,
  State: State,
  HilControls: HilControls,
  ActuatorControl: ActuatorControl,
  Mavlink: Mavlink,
  HilGPS: HilGPS,
  Thrust: Thrust,
  GPSRTK: GPSRTK,
  LogData: LogData,
  ParamValue: ParamValue,
  CameraImageCaptured: CameraImageCaptured,
  LogEntry: LogEntry,
  BatteryStatus: BatteryStatus,
  RCOut: RCOut,
  VFR_HUD: VFR_HUD,
  ESCTelemetryItem: ESCTelemetryItem,
  RCIn: RCIn,
  RadioStatus: RadioStatus,
  Tunnel: Tunnel,
  ADSBVehicle: ADSBVehicle,
  PositionTarget: PositionTarget,
  OnboardComputerStatus: OnboardComputerStatus,
  Trajectory: Trajectory,
};
