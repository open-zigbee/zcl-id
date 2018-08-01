const _ = require('busyman');
const Enum = require('enum');

const _common = require('./definitions/common.json');
const _clusterDefs = require('./definitions/cluster_defs.json');
const clusterWithNewFormat = require('./definitions/clusterWithNewFormat');

const propUnwritable = {
    writable: false,
    enumerable: false,
    configurable: true,
};

let zclId = {};

/*
    Loading Enumerations
*/
Object.defineProperty(zclId, '_common', _.assign({value: _common}, propUnwritable));
Object.defineProperty(zclId, 'profileId', _.assign({value: new Enum(_common.profileId)}, propUnwritable));
Object.defineProperty(zclId, 'foundationId', _.assign({value: new Enum(_common.foundation)}, propUnwritable));
Object.defineProperty(zclId, 'dataTypeId', _.assign({value: new Enum(_common.dataType)}, propUnwritable));
Object.defineProperty(zclId, 'statusId', _.assign({value: new Enum(_common.status)}, propUnwritable));
Object.defineProperty(zclId, 'clusterId', _.assign({value: new Enum(_common.clusterId)}, propUnwritable));
Object.defineProperty(zclId, 'deviceId', _.assign({value: {HA: new Enum(_common.haDevId)}}, propUnwritable));

function isValidArgType(param) {
    let isValid = true;

    if (typeof param !== 'number' && typeof param !== 'string') {
        isValid = false;
    } else if (typeof param === 'number') {
        isValid = !isNaN(param);
    }

    return isValid;
}

/*
    zclId Methods
*/
Object.defineProperty(zclId, '_getCluster', _.assign({
    value(cluster) {
        if (zclId[cluster]) {
            return zclId[cluster];
        } else if (_clusterDefs[cluster]) {
            zclId[cluster] = clusterWithNewFormat(_clusterDefs[cluster]);
            _clusterDefs[cluster] = null;
            return zclId[cluster];
        }
        // return: {
        //     attr,
        //     attrType,
        //     cmd,
        //     cmdRsp
        // }
    },
}, propUnwritable));


zclId.profile = function(profId) {
    // profId: String | Number
    if (!isValidArgType(profId)) {
        throw new TypeError('profId should be a number or a string.');
    }

    let profNumber = parseInt(profId);
    let profItem;

    if (!isNaN(profNumber)) {
        profId = profNumber;
    }

    profItem = zclId.profileId.get(profId);

    if (profItem) {
        // { key: 'HA', value: 260 }
        return {
            key: profItem.key,
            value: profItem.value,
        };
    }
};

zclId.device = function(profId, devId) {
    // profId: String | Number, devId: String | Number
    if (!isValidArgType(profId)) {
        throw new TypeError('profId should be a number or a string.');
    }

    if (!isValidArgType(devId)) {
        throw new TypeError('devId should be a number or a string.');
    }

    let profNumber = parseInt(profId);
    let devNumber = parseInt(devId);
    let profItem;
    let devItem;

    if (!isNaN(profNumber)) {
        profId = profNumber;
    }

    if (!isNaN(devNumber)) {
        devId = devNumber;
    }

    profItem = zclId.profileId.get(profId);

    if (profItem) {
        devItem = zclId.deviceId[profItem.key].get(devId);
    }

    if (devItem) {
        // { key: 'ON_OFF_SWITCH', value: 0 }
        return {
            key: devItem.key,
            value: devItem.value,
        };
    }
};

zclId.cluster = function(cId) {
    // cId: String | Number
    if (!isValidArgType(cId)) {
        throw new TypeError('cId should be a number or a string.');
    }

    let cNumber = parseInt(cId);
    let cItem;

    if (!isNaN(cNumber)) {
        cId = cNumber;
    }

    cItem = zclId.clusterId.get(cId);

    if (cItem) {
        // { key: 'genBasic', value: 0 }
        return {
            key: cItem.key,
            value: cItem.value,
        };
    }
};

zclId.foundation = function(cmdId) {
    // cmdId: String | Number
    if (!isValidArgType(cmdId)) {
        throw new TypeError('cmdId should be a number or a string.');
    }

    let cmdNumber = parseInt(cmdId);
    let cmdItem;

    if (!isNaN(cmdNumber)) {
        cmdId = cmdNumber;
    }

    cmdItem = zclId.foundationId.get(cmdId);

    if (cmdItem) {
        // { key: 'read', value: 0 }
        return {
            key: cmdItem.key,
            value: cmdItem.value,
        };
    }
};

zclId.functional = function(cId, cmdId) {
    // cId: String | Number, cmdId: String | Number
    if (!isValidArgType(cId)) {
        throw new TypeError('cId should be a number or a string.');
    }

    if (!isValidArgType(cmdId)) {
        throw new TypeError('cmdId should be a number or a string.');
    }

    let cNumber = parseInt(cId);
    let cmdNumber = parseInt(cmdId);
    let cItem;
    let cmdItem;
    let cInfo;

    if (!isNaN(cNumber)) {
        cId = cNumber;
    }

    if (!isNaN(cmdNumber)) {
        cmdId = cmdNumber;
    }

    cItem = zclId.clusterId.get(cId);

    if (cItem) {
        cInfo = zclId._getCluster(cItem.key);
    }

    if (cInfo && !_.isNil(cInfo.cmd)) {
        cmdItem = cInfo.cmd.get(cmdId);
    }

    if (cmdItem) {
        // { key: 'view', value: 1 }
        return {
            key: cmdItem.key,
            value: cmdItem.value,
        };
    }
};

// TODO
zclId.getCmdRsp = function(cId, rspId) {
    // cId: String | Number, rspId: String | Number
    if (!isValidArgType(cId)) {
        throw new TypeError('cId should be a number or a string.');
    }

    if (!isValidArgType(rspId)) {
        throw new TypeError('rspId should be a number or a string.');
    }

    let cNumber = parseInt(cId);
    let cmdNumber = parseInt(rspId);
    let cItem;
    let cmdItem;
    let cInfo;

    if (!isNaN(cNumber)) {
        cId = cNumber;
    }

    if (!isNaN(cmdNumber)) {
        rspId = cmdNumber;
    }

    cItem = zclId.clusterId.get(cId);

    if (cItem) {
        cInfo = zclId._getCluster(cItem.key);
    }

    if (cInfo && !_.isNil(cInfo.cmdRsp)) {
        cmdItem = cInfo.cmdRsp.get(rspId);
    }

    if (cmdItem) {
        // { key: 'viewRsp', value: 1 }
        return {
            key: cmdItem.key,
            value: cmdItem.value,
        };
    }
};

zclId.attrList = function(cId) {
    // cId: String | Number
    if (!isValidArgType(cId)) {
        throw new TypeError('cId should be a number or a string.');
    }

    let cItem = zclId.cluster(cId);
    let clst = cItem ? zclId._getCluster(cItem.key) : undefined;

    if (!cItem || !clst) return;

    let attrs = _.map(clst.attr.enums, function(item) {
        return {attrId: item.value};
    });

    _.forEach(attrs, function(item) {
        let type = zclId.attrType(cItem.key, item.attrId);
        item.dataType = type
            ? type.value
            : 255;
    });

    return attrs;
};

zclId.attr = function(cId, attrId) {
    // cId: String | Number, attrId: String | Number
    if (!isValidArgType(cId)) {
        throw new TypeError('cId should be a number or a string.');
    }

    if (!isValidArgType(attrId)) {
        throw new TypeError('attrId should be a number or a string.');
    }

    let cNumber = parseInt(cId);
    let attrNumber = parseInt(attrId);
    let cItem;
    let attrItem;
    let cInfo;

    if (!isNaN(cNumber)) {
        cId = cNumber;
    }

    if (!isNaN(attrNumber)) {
        attrId = attrNumber;
    }

    cItem = zclId.clusterId.get(cId);

    if (cItem) {
        cInfo = zclId._getCluster(cItem.key);
    }

    if (cInfo && !_.isNil(cInfo.attr)) {
        attrItem = cInfo.attr.get(attrId);
    }

    if (attrItem) {
        // { key: 'modelId', value: 5 }
        return {
            key: attrItem.key,
            value: attrItem.value,
        };
    }
};

zclId.attrType = function(cId, attrId) {
    // cId: String | Number, attrId: String | Number
    if (!isValidArgType(cId)) {
        throw new TypeError('cId should be a number or a string.');
    }

    if (!isValidArgType(attrId)) {
        throw new TypeError('attrId should be a number or a string.');
    }

    let cNumber = parseInt(cId);
    let attrNumber = parseInt(attrId);
    let cItem;
    let attrItem;
    let attrName;
    let attrType;
    let cInfo;

    if (!isNaN(cNumber)) {
        cId = cNumber;
    }

    if (!isNaN(attrNumber)) {
        attrId = attrNumber;
    }

    cItem = zclId.clusterId.get(cId);

    if (cItem) {
        cInfo = zclId._getCluster(cItem.key);
    }

    attrName = zclId.attr(cId, attrId);

    if (cInfo && !_.isNil(cInfo.attrType) && attrName) {
        attrItem = cInfo.attrType.get(attrName.key);
        attrType = zclId.dataType(attrItem.value);
    }

    if (attrType) {
        // { key: 'CHAR_STR', value: 66 }
        return {
            key: attrType.key,
            value: attrType.value,
        };
    }
};

zclId.dataType = function(type) {
    // type: String | Number
    if (!isValidArgType(type)) {
        throw new TypeError('dataType should be a number or a string.');
    }

    let typeNumber = parseInt(type);
    let typeItem;

    if (!isNaN(typeNumber)) {
        type = typeNumber;
    }

    typeItem = zclId.dataTypeId.get(type);

    if (typeItem) {
        // { key: 'DATA8', value: 8 }
        return {
            key: typeItem.key,
            value: typeItem.value,
        };
    }
};

zclId.status = function(status) {
    // status: String | Number
    if (!isValidArgType(status)) {
        throw new TypeError('status should be a number or a string.');
    }

    let statusNumber = parseInt(status);
    let statusItem;

    if (!isNaN(statusNumber)) {
        status = statusNumber;
    }

    statusItem = zclId.statusId.get(status);

    if (statusItem) {
        // { key: 'DATA8', value: 8 }
        return {
            key: statusItem.key,
            value: statusItem.value,
        };
    }
};

module.exports = zclId;