// **********************************************************************
//
// Copyright (c) 2003-2017 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.4
//
// <auto-generated>
//
// Generated from file `pointcloud.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var jderobot = require("primitives").jderobot;
    var Slice = Ice.Slice;
    Slice.defineSequence(jderobot, "RGBPointsPCLHelper", "jderobot.RGBPoint", true);

    jderobot.pointCloudData = Slice.defineObject(
        function(p)
        {
            Ice.Object.call(this);
            this.p = p !== undefined ? p : null;
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::pointCloudData"
        ],
        -1,
        function(__os)
        {
            jderobot.RGBPointsPCLHelper.write(__os, this.p);
        },
        function(__is)
        {
            this.p = jderobot.RGBPointsPCLHelper.read(__is);
        },
        false);

    jderobot.pointCloudDataPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.pointCloudData.ice_staticId, undefined);

    Slice.defineOperations(jderobot.pointCloudData, jderobot.pointCloudDataPrx);

    jderobot.pointCloud = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::pointCloud"
        ],
        -1, undefined, undefined, false);

    jderobot.pointCloudPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.pointCloud.ice_staticId, undefined);

    Slice.defineOperations(jderobot.pointCloud, jderobot.pointCloudPrx,
    {
        "getCloudData": [, 2, 2, , , ["jderobot.pointCloudData", true], , , , , true]
    });
    exports.jderobot = jderobot;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
