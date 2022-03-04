var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module, temp) => {
    return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// external:google-protobuf
var google_protobuf_exports = {};
import * as google_protobuf_star from "google-protobuf";
var init_google_protobuf = __esm({
  "external:google-protobuf"() {
    __reExport(google_protobuf_exports, google_protobuf_star);
  }
});

// src/proto/echo_pb.js
var require_echo_pb = __commonJS({
  "src/proto/echo_pb.js"(exports) {
    var jspb = (init_google_protobuf(), __toCommonJS(google_protobuf_exports));
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.grpc.gateway.testing.ClientStreamingEchoRequest", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.ClientStreamingEchoResponse", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.EchoRequest", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.EchoResponse", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.Empty", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.OneOfSample", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.OneOfSample.TestOneofCase", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.Score", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.ServerStreamingEchoRequest", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.ServerStreamingEchoResponse", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.Student", null, global);
    goog.exportSymbol("proto.grpc.gateway.testing.Suject", null, global);
    proto.grpc.gateway.testing.Empty = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.Empty, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.Empty.displayName = "proto.grpc.gateway.testing.Empty";
    }
    proto.grpc.gateway.testing.Student = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.grpc.gateway.testing.Student.repeatedFields_, null);
    };
    goog.inherits(proto.grpc.gateway.testing.Student, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.Student.displayName = "proto.grpc.gateway.testing.Student";
    }
    proto.grpc.gateway.testing.Suject = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.grpc.gateway.testing.Suject.repeatedFields_, null);
    };
    goog.inherits(proto.grpc.gateway.testing.Suject, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.Suject.displayName = "proto.grpc.gateway.testing.Suject";
    }
    proto.grpc.gateway.testing.Score = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.Score, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.Score.displayName = "proto.grpc.gateway.testing.Score";
    }
    proto.grpc.gateway.testing.OneOfSample = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.grpc.gateway.testing.OneOfSample.oneofGroups_);
    };
    goog.inherits(proto.grpc.gateway.testing.OneOfSample, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.OneOfSample.displayName = "proto.grpc.gateway.testing.OneOfSample";
    }
    proto.grpc.gateway.testing.EchoRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.EchoRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.EchoRequest.displayName = "proto.grpc.gateway.testing.EchoRequest";
    }
    proto.grpc.gateway.testing.EchoResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.EchoResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.EchoResponse.displayName = "proto.grpc.gateway.testing.EchoResponse";
    }
    proto.grpc.gateway.testing.ServerStreamingEchoRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.ServerStreamingEchoRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.ServerStreamingEchoRequest.displayName = "proto.grpc.gateway.testing.ServerStreamingEchoRequest";
    }
    proto.grpc.gateway.testing.ServerStreamingEchoResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.ServerStreamingEchoResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.ServerStreamingEchoResponse.displayName = "proto.grpc.gateway.testing.ServerStreamingEchoResponse";
    }
    proto.grpc.gateway.testing.ClientStreamingEchoRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.ClientStreamingEchoRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.ClientStreamingEchoRequest.displayName = "proto.grpc.gateway.testing.ClientStreamingEchoRequest";
    }
    proto.grpc.gateway.testing.ClientStreamingEchoResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.ClientStreamingEchoResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.ClientStreamingEchoResponse.displayName = "proto.grpc.gateway.testing.ClientStreamingEchoResponse";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.Empty.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.Empty.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.Empty.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.Empty.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.Empty();
      return proto.grpc.gateway.testing.Empty.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.Empty.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.Empty.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.Empty.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.Empty.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.grpc.gateway.testing.Student.repeatedFields_ = [3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.Student.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.Student.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.Student.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, ""),
          sex: jspb.Message.getFieldWithDefault(msg, 2, ""),
          favoratesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.Student.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.Student();
      return proto.grpc.gateway.testing.Student.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.Student.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setName(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setSex(value);
            break;
          case 3:
            var value = reader.readString();
            msg.addFavorates(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.Student.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.Student.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.Student.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getSex();
      if (f.length > 0) {
        writer.writeString(2, f);
      }
      f = message.getFavoratesList();
      if (f.length > 0) {
        writer.writeRepeatedString(3, f);
      }
    };
    proto.grpc.gateway.testing.Student.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.Student.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.Student.prototype.getSex = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.grpc.gateway.testing.Student.prototype.setSex = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.grpc.gateway.testing.Student.prototype.getFavoratesList = function() {
      return jspb.Message.getRepeatedField(this, 3);
    };
    proto.grpc.gateway.testing.Student.prototype.setFavoratesList = function(value) {
      return jspb.Message.setField(this, 3, value || []);
    };
    proto.grpc.gateway.testing.Student.prototype.addFavorates = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
    };
    proto.grpc.gateway.testing.Student.prototype.clearFavoratesList = function() {
      return this.setFavoratesList([]);
    };
    proto.grpc.gateway.testing.Suject.repeatedFields_ = [1, 2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.Suject.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.Suject.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.Suject.toObject = function(includeInstance, msg) {
        var f, obj = {
          liberalArtsList: jspb.Message.toObjectList(msg.getLiberalArtsList(), proto.grpc.gateway.testing.Score.toObject, includeInstance),
          scienceList: jspb.Message.toObjectList(msg.getScienceList(), proto.grpc.gateway.testing.Score.toObject, includeInstance)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.Suject.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.Suject();
      return proto.grpc.gateway.testing.Suject.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.Suject.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.grpc.gateway.testing.Score();
            reader.readMessage(value, proto.grpc.gateway.testing.Score.deserializeBinaryFromReader);
            msg.addLiberalArts(value);
            break;
          case 2:
            var value = new proto.grpc.gateway.testing.Score();
            reader.readMessage(value, proto.grpc.gateway.testing.Score.deserializeBinaryFromReader);
            msg.addScience(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.Suject.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.Suject.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.Suject.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getLiberalArtsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.grpc.gateway.testing.Score.serializeBinaryToWriter);
      }
      f = message.getScienceList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(2, f, proto.grpc.gateway.testing.Score.serializeBinaryToWriter);
      }
    };
    proto.grpc.gateway.testing.Suject.prototype.getLiberalArtsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.grpc.gateway.testing.Score, 1);
    };
    proto.grpc.gateway.testing.Suject.prototype.setLiberalArtsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.grpc.gateway.testing.Suject.prototype.setLiberalArtsList.getValueType = function() {
      return proto.grpc.gateway.testing.Score;
    };
    proto.grpc.gateway.testing.Suject.prototype.setLiberalArtsList.valueType = proto.grpc.gateway.testing.Score;
    proto.grpc.gateway.testing.Suject.prototype.addLiberalArts = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpc.gateway.testing.Score, opt_index);
    };
    proto.grpc.gateway.testing.Suject.prototype.clearLiberalArtsList = function() {
      return this.setLiberalArtsList([]);
    };
    proto.grpc.gateway.testing.Suject.prototype.getScienceList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.grpc.gateway.testing.Score, 2);
    };
    proto.grpc.gateway.testing.Suject.prototype.setScienceList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.grpc.gateway.testing.Suject.prototype.setScienceList.getValueType = function() {
      return proto.grpc.gateway.testing.Score;
    };
    proto.grpc.gateway.testing.Suject.prototype.setScienceList.valueType = proto.grpc.gateway.testing.Score;
    proto.grpc.gateway.testing.Suject.prototype.addScience = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.grpc.gateway.testing.Score, opt_index);
    };
    proto.grpc.gateway.testing.Suject.prototype.clearScienceList = function() {
      return this.setScienceList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.Score.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.Score.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.Score.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, ""),
          score: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.Score.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.Score();
      return proto.grpc.gateway.testing.Score.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.Score.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setName(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setScore(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.Score.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.Score.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.Score.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getScore();
      if (f.length > 0) {
        writer.writeString(2, f);
      }
    };
    proto.grpc.gateway.testing.Score.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.Score.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.Score.prototype.getScore = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.grpc.gateway.testing.Score.prototype.setScore = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.grpc.gateway.testing.OneOfSample.oneofGroups_ = [[4, 9]];
    proto.grpc.gateway.testing.OneOfSample.TestOneofCase = {
      TEST_ONEOF_NOT_SET: 0,
      NAME: 4,
      SUB_MESSAGE: 9
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.getTestOneofCase = function() {
      return jspb.Message.computeOneofCase(this, proto.grpc.gateway.testing.OneOfSample.oneofGroups_[0]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.OneOfSample.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.OneOfSample.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.OneOfSample.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 4, ""),
          subMessage: (f = msg.getSubMessage()) && proto.grpc.gateway.testing.Score.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.OneOfSample.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.OneOfSample();
      return proto.grpc.gateway.testing.OneOfSample.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.OneOfSample.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 4:
            var value = reader.readString();
            msg.setName(value);
            break;
          case 9:
            var value = new proto.grpc.gateway.testing.Score();
            reader.readMessage(value, proto.grpc.gateway.testing.Score.deserializeBinaryFromReader);
            msg.setSubMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.OneOfSample.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.OneOfSample.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeString(4, f);
      }
      f = message.getSubMessage();
      if (f != null) {
        writer.writeMessage(9, f, proto.grpc.gateway.testing.Score.serializeBinaryToWriter);
      }
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 4, "");
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.setName = function(value) {
      return jspb.Message.setOneofField(this, 4, proto.grpc.gateway.testing.OneOfSample.oneofGroups_[0], value);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.clearName = function() {
      return jspb.Message.setOneofField(this, 4, proto.grpc.gateway.testing.OneOfSample.oneofGroups_[0], void 0);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.hasName = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.getSubMessage = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.Score, 9);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.setSubMessage = function(value) {
      return jspb.Message.setOneofWrapperField(this, 9, proto.grpc.gateway.testing.OneOfSample.oneofGroups_[0], value);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.setSubMessage.getValueType = function() {
      return proto.grpc.gateway.testing.Score;
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.setSubMessage.valueType = proto.grpc.gateway.testing.Score;
    proto.grpc.gateway.testing.OneOfSample.prototype.clearSubMessage = function() {
      return this.setSubMessage(void 0);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.hasSubMessage = function() {
      return jspb.Message.getField(this, 9) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.EchoRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.EchoRequest.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.EchoRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, ""),
          student: (f = msg.getStudent()) && proto.grpc.gateway.testing.Student.toObject(includeInstance, f),
          suject: (f = msg.getSuject()) && proto.grpc.gateway.testing.Suject.toObject(includeInstance, f),
          keyvalueMap: (f = msg.getKeyvalueMap()) ? f.toObject(includeInstance, void 0) : [],
          keyScroeMap: (f = msg.getKeyScroeMap()) ? f.toObject(includeInstance, proto.grpc.gateway.testing.Score.toObject) : [],
          oneOfSample: (f = msg.getOneOfSample()) && proto.grpc.gateway.testing.OneOfSample.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.EchoRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.EchoRequest();
      return proto.grpc.gateway.testing.EchoRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.EchoRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          case 2:
            var value = new proto.grpc.gateway.testing.Student();
            reader.readMessage(value, proto.grpc.gateway.testing.Student.deserializeBinaryFromReader);
            msg.setStudent(value);
            break;
          case 3:
            var value = new proto.grpc.gateway.testing.Suject();
            reader.readMessage(value, proto.grpc.gateway.testing.Suject.deserializeBinaryFromReader);
            msg.setSuject(value);
            break;
          case 4:
            var value = msg.getKeyvalueMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          case 5:
            var value = msg.getKeyScroeMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.grpc.gateway.testing.Score.deserializeBinaryFromReader, "", new proto.grpc.gateway.testing.Score());
            });
            break;
          case 6:
            var value = new proto.grpc.gateway.testing.OneOfSample();
            reader.readMessage(value, proto.grpc.gateway.testing.OneOfSample.deserializeBinaryFromReader);
            msg.setOneOfSample(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.EchoRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.EchoRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getStudent();
      if (f != null) {
        writer.writeMessage(2, f, proto.grpc.gateway.testing.Student.serializeBinaryToWriter);
      }
      f = message.getSuject();
      if (f != null) {
        writer.writeMessage(3, f, proto.grpc.gateway.testing.Suject.serializeBinaryToWriter);
      }
      f = message.getKeyvalueMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
      f = message.getKeyScroeMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.grpc.gateway.testing.Score.serializeBinaryToWriter);
      }
      f = message.getOneOfSample();
      if (f != null) {
        writer.writeMessage(6, f, proto.grpc.gateway.testing.OneOfSample.serializeBinaryToWriter);
      }
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getStudent = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.Student, 2);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setStudent = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setStudent.getValueType = function() {
      return proto.grpc.gateway.testing.Student;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setStudent.valueType = proto.grpc.gateway.testing.Student;
    proto.grpc.gateway.testing.EchoRequest.prototype.clearStudent = function() {
      return this.setStudent(void 0);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.hasStudent = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getSuject = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.Suject, 3);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setSuject = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setSuject.getValueType = function() {
      return proto.grpc.gateway.testing.Suject;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setSuject.valueType = proto.grpc.gateway.testing.Suject;
    proto.grpc.gateway.testing.EchoRequest.prototype.clearSuject = function() {
      return this.setSuject(void 0);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.hasSuject = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getKeyvalueMap = function(opt_noLazyCreate) {
      return jspb.Message.getMapField(this, 4, opt_noLazyCreate, null);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setKeyvalueMap = function(k, v) {
      this.getKeyvalueMap().set(k, v);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setKeyvalueMap.getValueType = function() {
      return this.getKeyvalueMap();
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.clearKeyvalueMap = function() {
      this.getKeyvalueMap().clear();
      return this;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getKeyScroeMap = function(opt_noLazyCreate) {
      return jspb.Message.getMapField(this, 5, opt_noLazyCreate, proto.grpc.gateway.testing.Score);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setKeyScroeMap = function(k, v) {
      this.getKeyScroeMap().set(k, v);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setKeyScroeMap.getValueType = function() {
      return this.getKeyScroeMap();
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.clearKeyScroeMap = function() {
      this.getKeyScroeMap().clear();
      return this;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getOneOfSample = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.OneOfSample, 6);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setOneOfSample = function(value) {
      return jspb.Message.setWrapperField(this, 6, value);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setOneOfSample.getValueType = function() {
      return proto.grpc.gateway.testing.OneOfSample;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setOneOfSample.valueType = proto.grpc.gateway.testing.OneOfSample;
    proto.grpc.gateway.testing.EchoRequest.prototype.clearOneOfSample = function() {
      return this.setOneOfSample(void 0);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.hasOneOfSample = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.EchoResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.EchoResponse.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.EchoResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, ""),
          messageCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
          resp: (f = msg.getResp()) && proto.grpc.gateway.testing.EchoRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.EchoResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.EchoResponse();
      return proto.grpc.gateway.testing.EchoResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.EchoResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          case 2:
            var value = reader.readInt32();
            msg.setMessageCount(value);
            break;
          case 3:
            var value = new proto.grpc.gateway.testing.EchoRequest();
            reader.readMessage(value, proto.grpc.gateway.testing.EchoRequest.deserializeBinaryFromReader);
            msg.setResp(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.EchoResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.EchoResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getMessageCount();
      if (f !== 0) {
        writer.writeInt32(2, f);
      }
      f = message.getResp();
      if (f != null) {
        writer.writeMessage(3, f, proto.grpc.gateway.testing.EchoRequest.serializeBinaryToWriter);
      }
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.getMessageCount = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setMessageCount = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.getResp = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.EchoRequest, 3);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setResp = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setResp.getValueType = function() {
      return proto.grpc.gateway.testing.EchoRequest;
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setResp.valueType = proto.grpc.gateway.testing.EchoRequest;
    proto.grpc.gateway.testing.EchoResponse.prototype.clearResp = function() {
      return this.setResp(void 0);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.hasResp = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.ServerStreamingEchoRequest.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.ServerStreamingEchoRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, ""),
          messageCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
          messageInterval: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.ServerStreamingEchoRequest();
      return proto.grpc.gateway.testing.ServerStreamingEchoRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          case 2:
            var value = reader.readInt32();
            msg.setMessageCount(value);
            break;
          case 3:
            var value = reader.readInt32();
            msg.setMessageInterval(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.ServerStreamingEchoRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getMessageCount();
      if (f !== 0) {
        writer.writeInt32(2, f);
      }
      f = message.getMessageInterval();
      if (f !== 0) {
        writer.writeInt32(3, f);
      }
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.getMessageCount = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.setMessageCount = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.getMessageInterval = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.setMessageInterval = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.ServerStreamingEchoResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.ServerStreamingEchoResponse.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.ServerStreamingEchoResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.ServerStreamingEchoResponse();
      return proto.grpc.gateway.testing.ServerStreamingEchoResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.ServerStreamingEchoResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.ClientStreamingEchoRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.ClientStreamingEchoRequest.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.ClientStreamingEchoRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.ClientStreamingEchoRequest();
      return proto.grpc.gateway.testing.ClientStreamingEchoRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.ClientStreamingEchoRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.ClientStreamingEchoResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.ClientStreamingEchoResponse.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.ClientStreamingEchoResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          messageCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.ClientStreamingEchoResponse();
      return proto.grpc.gateway.testing.ClientStreamingEchoResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readInt32();
            msg.setMessageCount(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.ClientStreamingEchoResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessageCount();
      if (f !== 0) {
        writer.writeInt32(1, f);
      }
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.prototype.getMessageCount = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.prototype.setMessageCount = function(value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    goog.object.extend(exports, proto.grpc.gateway.testing);
  }
});
export default require_echo_pb();
