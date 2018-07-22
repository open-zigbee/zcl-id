# Introduction

## Overview

**zigbee-bridge-definitions** is a dictionary of identifiers defined by [_ZigBee Cluster Library Specification_](https://github.com/zigbeer/documents/blob/master/zcl-id/ZIGBEE_CLUSTER_LIBRARY_SPECIFICATION.pdf).

## Installation

> $ npm install zigbee-bridge-definitions --save

## Usage

**zigbee-bridge-definitions** provides you with APIs to get the key-value pairs of ZCL identifiers, i.e. profile, cluster, foundation and functional command, attribute and attribute data type. Each method returns an item with properties of `'key'` and `'value'` to show you the identifier in string and in number, respectively.

Here are some quick examples:

```js
const defs = require('zigbee-bridge-definitions');

// Profile Id
defs.profile(260).key;            // 'HA'
defs.profile('HA').value;         // 260
defs.profile('no_such_profile');  // undefined

// Cluster Id
defs.cluster(0).key;              // 'genBasic'
defs.cluster('genBasic').value;   // 0
defs.cluster('no_such_cluster');  // undefined

// Device Id
defs.device(260, 10).key;             // 'doorLock'
defs.device('HA', 'doorLock').value;  // 10
defs.device('HA', 'no_such_device');  // undefined

// Foundation Cmd Id
defs.foundation(2).key;              // 'write'
defs.foundation('write').value;      // 2
defs.foundation('invalid_command');  // undefined

// Functional Cmd Id
defs.functional(3, 0).key;                          // 'identify'
defs.functional('genIdentify', 'identify').value;   // 0
defs.functional('genIdentify', 'invalid_command');  // 0

// Functional CmdRsp Id
defs.getCmdRsp(9, 0).key;                        // 'alarm'
defs.getCmdRsp('genAlarms', 'alarm').value;      // 0
defs.getCmdRsp('genAlarms', 'invalid_command');  // undefined

// Attribute Id
defs.attr(0, 3).key;                       // 'hwVersion'
defs.attr('genBasic', 'hwVersion').value;  // 3
defs.attr('genBasic', 'no_such_attr');     // undefined

// Attribute DataType Id
defs.attrType(0, 1).key;                        // 'uint8'
defs.attrType('genBasic', 'appVersion').value;  // 32
defs.attrType('genBasic', 'no_such_attr');      // undefined

// DataType Id
defs.dataType(33).key;              // 'uint16'
defs.dataType('uint16').value;      // 33
defs.dataType('no_such_datatype');  // undefined

// Status Id
defs.dataType(133).key;               // 'invalidField'
defs.dataType('invalidField').value;  // 133
defs.dataType('no_such_status');      // undefined
```