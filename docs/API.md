# API

<!-- TOC -->

- [Methods](#methods)
    - [.profile(profId)](#profileprofid)
    - [.cluster(cId)](#clustercid)
    - [.device(profId, devId)](#deviceprofid-devid)
    - [.foundation(cmdId)](#foundationcmdid)
    - [.functional(cId, cmdId)](#functionalcid-cmdid)
    - [.getCmdRsp(cId, rspId)](#getcmdrspcid-rspid)
    - [.attr(cId, attrId)](#attrcid-attrid)
    - [.attrType(cId, attrId)](#attrtypecid-attrid)
    - [.dataType(type)](#datatypetype)
    - [.status(status)](#statusstatus)
    - [.attrList(cId)](#attrlistcid)
- [Identifiers](#identifiers)
    - [Profile](#profile)
    - [HA Device ID](#ha-device-id)
    - [Cluster](#cluster)
    - [DataType](#datatype)
    - [Status](#status)

<!-- /TOC -->

## Methods

### .profile(profId)

Returns the profile identifier.

**Arguments:**

1. `profId` (_String_ | _Number_): Profile id, which can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.profile('HA');               // { key: 'HA', value: 260 }
defs.profile('260');              // { key: 'HA', value: 260 }
defs.profile(260);                // { key: 'HA', value: 260 }
defs.profile('no_such_profile');  // undefined
```

*************************************************

### .cluster(cId)

Returns the cluster identifier.

**Arguments:**

1. `cId` (_String_ | _Number_): Cluster id, which can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.cluster('genAlarms');        // { key: 'genAlarms', value: 9 }
defs.cluster('9');                // { key: 'genAlarms', value: 9 }
defs.cluster(9);                  // { key: 'genAlarms', value: 9 }
defs.cluster('no_such_cluster');  // undefined
```

*************************************************

### .device(profId, devId)

Returns the device identifier under the specified profile.

**Arguments:**

1. `profId` (_String_ | _Number_): Profile id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.
2. `devId` (_String_ | _Number_): Device id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.device('HA', 'simpleSensor');    // { key: 'simpleSensor', value: 12 }
defs.device('260', '12');             // { key: 'simpleSensor', value: 12 }
defs.device(260, 12);                 // { key: 'simpleSensor', value: 12 }
defs.device('no_such_profile', 12);   // undefined
defs.device('HA', 'no_such_device');  // undefined
```

*************************************************

### .foundation(cmdId)

Returns the foundation command identifier.

**Arguments:**

1. `cmdId` (_String_ | _Number_): Command id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.foundation('write');        // { key: 'write', value: 2 }
defs.foundation('2');            // { key: 'write', value: 2 }
defs.foundation(2);              // { key: 'write', value: 2 }
defs.foundation('invalid_cmd');  // undefined
```

*************************************************

### .functional(cId, cmdId)

Returns the functional command identifier under the specified cluster.

**Arguments:**

1. `cId` (_String_ | _Number_): Cluster id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.
2. `cmdId` (_String_ | _Number_): Command id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.functional('genBasic', 'resetFactDefault');         // { key: 'resetFactDefault', value: 0 }
defs.functional('0', '0');                               // { key: 'resetFactDefault', value: 0 }
defs.functional(0, 0);                                   // { key: 'resetFactDefault', value: 0 }
defs.functional('no_such_cluster', 'resetFactDefault');  // undefined
defs.functional('genBasic', 'invalid_cmd');              // undefined
```

*************************************************
### .getCmdRsp(cId, rspId)

Returns the identifier of functional command response under the specified cluster.

**Arguments:**

1. `cId` (_String_ | _Number_): Cluster id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.
2. `rspId` (_String_ | _Number_): Response id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.getCmdRsp('genAlarms', 'alarm');        // { key: 'alarm', value: 0 }
defs.getCmdRsp('9', '0');                    // { key: 'alarm', value: 0 }
defs.getCmdRsp(9, 0);                        // { key: 'alarm', value: 0 }
defs.getCmdRsp('no_such_cluster', 'alarm');  // undefined
defs.getCmdRsp('genAlarms', 'invalid_cmd');  // undefined
```

*************************************************

### .attr(cId, attrId)

Returns the attribute identifier under the specified cluster.

**Arguments:**

1. `cId` (_String_ | _Number_): Cluster id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.
2. `attrId` (_String_ | _Number_): Attribute id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.attr('genBasic', 'hwVersion');         // { key: 'hwVersion', value: 3 }
defs.attr('0', '3');                        // { key: 'hwVersion', value: 3 }
defs.attr(0, 3);                            // { key: 'hwVersion', value: 3 }
defs.attr('no_such_cluster', 'hwVersion');  // undefined
defs.attr('genBasic', 'no_such_attr');      // undefined
```

*************************************************

### .attrType(cId, attrId)

Returns the attribute data type identifier under the specified cluster.

**Arguments:**

1. `cId` (_String_ | _Number_): Cluster id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.
2. `attrId` (_String_ | _Number_): Attribute id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.attrType('genBasic', 'appVersion');         // { key: 'uint8', value: 32 }
defs.attrType('0', '1');                         // { key: 'uint8', value: 32 }
defs.attrType(0, 1);                             // { key: 'uint8', value: 32 }
defs.attrType('no_such_cluster', 'appVersion');  // undefined
defs.attrType('genBasic', 'no_such_attr');       // undefined
```

*************************************************

### .dataType(type)

Returns the data type identifier.

**Arguments:**

1. `type` (_String_ | _Number_): Data type, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.dataType('uint16');             // { key: 'uint16', value: 33 }
defs.dataType('33');                 // { key: 'uint16', value: 33 }
defs.dataType(33);                   // { key: 'uint16', value: 33 }
defs.dataType('invalid_data_type');  // undefined
```

*************************************************

### .status(status)

Returns the status identifier.

**Arguments:**

1. `status` (_String_ | _Number_): Cluster id, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.status('invalidField');    // { key: 'invalidField', value: 133 }
defs.status('133');             // { key: 'invalidField', value: 133 }
defs.status(133);               // { key: 'invalidField', value: 133 }
defs.status('invalid_status');  // undefined
```

*************************************************

### .attrList(cId)

Returns all possible attributes within a cluster.

**Arguments:**

1. `cId` (_String_ | _Number_): Status, which can be given with a string or a number. A numbered string like '128' will be recognized as a number 128.

**Returns:**

* (_Array_ | _Undefined_): Returns an array with each element in the shape of `{ attrId: 2, dataType: 41 }`, otherwise returns `undefined` if not found.

**Examples:**

```js
defs.attrList('genDeviceTempCfg');

/*
[
  { attrId: 0, dataType: 41 },
  { attrId: 1, dataType: 41 },
  { attrId: 2, dataType: 41 },
  { attrId: 3, dataType: 33 },
  { attrId: 16, dataType: 24 },
  { attrId: 17, dataType: 41 },
  { attrId: 18, dataType: 41 },
  { attrId: 19, dataType: 34 },
  { attrId: 20, dataType: 34 }
]
*/

defs.attrList(2);

/*
[
  { attrId: 0, dataType: 41 },
  { attrId: 1, dataType: 41 },
  { attrId: 2, dataType: 41 },
  { attrId: 3, dataType: 33 },
  { attrId: 16, dataType: 24 },
  { attrId: 17, dataType: 41 },
  { attrId: 18, dataType: 41 },
  { attrId: 19, dataType: 34 },
  { attrId: 20, dataType: 34 }
]
*/

defs.attrList('invalid_cluster');  // undefined
```

## Identifiers  

### Profile  

```js
{
  "HA": 260,   // ZigBee Home Automation
  "BA": 261,   // ZigBee Building Automation
  "TS": 263,   // ZigBee Telecom Services
  "HC": 264,   // ZigBee Health Care
  "SE": 265,   // ZigBee Smart Energy
  "RS": 266,   // ZigBee Retail Services
  "LL": 49246  // ZigBee Light Link
}
```  

### HA Device ID  

```js
{
  "onOffSwitch": 0,
  "levelControlSwitch": 1,
  "onOffOutput": 2,
  "levelControllableOutput": 3,
  "sceneSelector": 4,
  "configurationTool": 5,
  "remoteControl": 6,
  "combinedInterface": 7,
  "rangeExtender": 8,
  "mainsPowerOutlet": 9,
  "doorLock": 10,
  "doorLockController": 11,
  "simpleSensor": 12,
  "consumptionAwarenessDevice": 13,
  "homeGateway": 80,
  "smartPlug": 81,
  "whiteGoods": 82,
  "meterInterface": 83,
  "testDevice": 255,
  "onOffLight": 256,
  "dimmableLight": 257,
  "coloredDimmableLight": 258,
  "onOffLightSwitch": 259,
  "dimmerSwitch": 260,
  "colorDimmerSwitch": 261,
  "lightSensor": 262,
  "occupancySensor": 263,
  "shade": 512,
  "shadeController": 513,
  "windowCoveringDevice": 514,
  "windowCoveringController": 515,
  "heatingCoolingUnit": 768,
  "thermostat": 769,
  "temperatureSensor": 770,
  "pump": 771,
  "pumpController": 772,
  "pressureSensor": 773,
  "flowSensor": 774,
  "miniSplitAc": 775,
  "iasControlIndicatingEquipment": 1024,
  "iasAncillaryControlEquipment": 1025,
  "iasZone": 1026,
  "iasWarningDevice": 1027
}
```

### Cluster  

```js
{
  "genBasic": 0,
  "genPowerCfg": 1,
  "genDeviceTempCfg": 2,
  "genIdentify": 3,
  "genGroups": 4,
  "genScenes": 5,
  "genOnOff": 6,
  "genOnOffSwitchCfg": 7,
  "genLevelCtrl": 8,
  "genAlarms": 9,
  "genTime": 10,
  "genRssiLocation": 11,
  "genAnalogInput": 12,
  "genAnalogOutput": 13,
  "genAnalogValue": 14,
  "genBinaryInput": 15,
  "genBinaryOutput": 16,
  "genBinaryValue": 17,
  "genMultistateInput": 18,
  "genMultistateOutput": 19,
  "genMultistateValue": 20,
  "genCommissioning": 21,
  "genPartition": 22,
  "genOta": 25,
  "genPowerProfile": 26,
  "genApplianceCtrl": 27,
  "genPollCtrl": 32,
  "genGreenPowerProxy": 33,
  "closuresShadeCfg": 256,
  "closuresDoorLock": 257,
  "closuresWindowCovering": 258,
  "hvacPumpCfgCtrl": 512,
  "hvacThermostat": 513,
  "hvacFanCtrl": 514,
  "hvacDehumidificationCtrl": 515,
  "hvacUserInterfaceCfg": 516,
  "lightingColorCtrl": 768,
  "lightingBallastCfg": 769,
  "msIlluminanceMeasurement": 1024,
  "msIlluminanceLevelSensing": 1025,
  "msTemperatureMeasurement": 1026,
  "msPressureMeasurement": 1027,
  "msFlowMeasurement": 1028,
  "msRelativeHumidity": 1029,
  "msOccupancySensing": 1030,
  "ssIasZone": 1280,
  "ssIasAce": 1281,
  "ssIasWd": 1282,
  "piGenericTunnel": 1536,
  "piBacnetProtocolTunnel": 1537,
  "piAnalogInputReg": 1538,
  "piAnalogInputExt": 1539,
  "piAnalogOutputReg": 1540,
  "piAnalogOutputExt": 1541,
  "piAnalogValueReg": 1542,
  "piAnalogValueExt": 1543,
  "piBinaryInputReg": 1544,
  "piBinaryInputExt": 1545,
  "piBinaryOutputReg": 1546,
  "piBinaryOutputExt": 1547,
  "piBinaryValueReg": 1548,
  "piBinaryValueExt": 1549,
  "piMultistateInputReg": 1550,
  "piMultistateInputExt": 1551,
  "piMultistateOutputReg": 1552,
  "piMultistateOutputExt": 1553,
  "piMultistateValueReg": 1554,
  "piMultistateValueExt": 1555,
  "pi11073ProtocolTunnel": 1556,
  "sePrice": 1792,
  "seDrlc": 1793,
  "seMetering": 1794,
  "seMessaging": 1795,
  "seTunneling": 1796,
  "sePrepayment": 1797,
  "seEnergyMgmt": 1798,
  "seCalendar": 1799,
  "seDeviceMgmt": 1800,
  "seEvents": 1801,
  "seMduPairing": 1802,
  "seKeyEstablishment": 2048,
  "haApplianceIdentification": 2816,
  "haMeterIdentification": 2817,
  "haApplianceEventsAlerts": 2818,
  "haApplianceStatistics": 2819,
  "haElectricalMeasurement": 2820,
  "haDiagnostic": 2821,
  "lightLink": 4096,
  "manuSpecificCluster": 65535
}
```

### DataType  

```js
{
  "noData": 0,
  "data8": 8,
  "data16": 9,
  "data24": 10,
  "data32": 11,
  "data40": 12,
  "data48": 13,
  "data56": 14,
  "data64": 15,
  "boolean": 16,
  "bitmap8": 24,
  "bitmap16": 25,
  "bitmap24": 26,
  "bitmap32": 27,
  "bitmap40": 28,
  "bitmap48": 29,
  "bitmap56": 30,
  "bitmap64": 31,
  "uint8": 32,
  "uint16": 33,
  "uint24": 34,
  "uint32": 35,
  "uint40": 36,
  "uint48": 37,
  "uint56": 38,
  "uint64": 39,
  "int8": 40,
  "int16": 41,
  "int24": 42,
  "int32": 43,
  "int40": 44,
  "int48": 45,
  "int56": 46,
  "int64": 47,
  "enum8": 48,
  "enum16": 49,
  "semiPrec": 56,
  "singlePrec": 57,
  "doublePrec": 58,
  "octetStr": 65,
  "charStr": 66,
  "longOctetStr": 67,
  "longCharStr": 68,
  "array": 72,
  "struct": 76,
  "set": 80,
  "bag": 81,
  "tod": 224,
  "date": 225,
  "utc": 226,
  "attrId": 233,
  "bacOid": 234,
  "ieeeAddr": 240,
  "secKey": 241,
  "unknown": 255
}
```

### Status  

```js
{
  "success": 0,
  "failure": 1,
  "notAuthorized": 126,
  "malformedCmd": 128,
  "unsupClusterCmd": 129,
  "unsupGeneralCmd": 130,
  "unsupManuClusterCmd": 131,
  "unsupManuGeneralCmd": 132,
  "invalidField": 133,
  "unsupAttribute": 134,
  "invalidValue": 135,
  "readOnly": 136,
  "insufficientSpace": 137,
  "duplicateExists": 138,
  "notFound": 139,
  "unreportableAttribute": 140,
  "invalidDataType": 141,
  "invalidSelector": 142,
  "writeOnly": 143,
  "inconsistentStartupState": 144,
  "definedOutOfBand": 145,
  "inconsistent": 146,
  "actionDenied": 147,
  "timeout": 148,
  "abort": 149,
  "invalidImage": 150,
  "waitForData": 151,
  "noImageAvailable": 152,
  "requireMoreImage": 153
}
```