/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.calculator.SumRequest', null, global);
goog.exportSymbol('proto.calculator.SumResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.calculator.SumRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.calculator.SumRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.calculator.SumRequest.displayName = 'proto.calculator.SumRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.calculator.SumResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.calculator.SumResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.calculator.SumResponse.displayName = 'proto.calculator.SumResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.calculator.SumRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.calculator.SumRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.calculator.SumRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calculator.SumRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstInt64: jspb.Message.getFieldWithDefault(msg, 1, 0),
    secondInt64: jspb.Message.getFieldWithDefault(msg, 2, 0),
    firstFloat: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    secondFloat: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    firstDouble: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    secondDouble: +jspb.Message.getFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.calculator.SumRequest}
 */
proto.calculator.SumRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.calculator.SumRequest;
  return proto.calculator.SumRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.calculator.SumRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.calculator.SumRequest}
 */
proto.calculator.SumRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFirstInt64(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSecondInt64(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFirstFloat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSecondFloat(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFirstDouble(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSecondDouble(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.calculator.SumRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.calculator.SumRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.calculator.SumRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calculator.SumRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstInt64();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSecondInt64();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFirstFloat();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getSecondFloat();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getFirstDouble();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getSecondDouble();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional int64 first_int64 = 1;
 * @return {number}
 */
proto.calculator.SumRequest.prototype.getFirstInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.calculator.SumRequest.prototype.setFirstInt64 = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 second_int64 = 2;
 * @return {number}
 */
proto.calculator.SumRequest.prototype.getSecondInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.calculator.SumRequest.prototype.setSecondInt64 = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float first_float = 3;
 * @return {number}
 */
proto.calculator.SumRequest.prototype.getFirstFloat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.calculator.SumRequest.prototype.setFirstFloat = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float second_float = 4;
 * @return {number}
 */
proto.calculator.SumRequest.prototype.getSecondFloat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.calculator.SumRequest.prototype.setSecondFloat = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double first_double = 5;
 * @return {number}
 */
proto.calculator.SumRequest.prototype.getFirstDouble = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.calculator.SumRequest.prototype.setFirstDouble = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double second_double = 6;
 * @return {number}
 */
proto.calculator.SumRequest.prototype.getSecondDouble = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.calculator.SumRequest.prototype.setSecondDouble = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.calculator.SumResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.calculator.SumResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.calculator.SumResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calculator.SumResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    int64SumResult: jspb.Message.getFieldWithDefault(msg, 1, 0),
    floatSumResult: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    doubleSumResult: +jspb.Message.getFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.calculator.SumResponse}
 */
proto.calculator.SumResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.calculator.SumResponse;
  return proto.calculator.SumResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.calculator.SumResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.calculator.SumResponse}
 */
proto.calculator.SumResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInt64SumResult(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloatSumResult(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleSumResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.calculator.SumResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.calculator.SumResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.calculator.SumResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calculator.SumResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInt64SumResult();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFloatSumResult();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDoubleSumResult();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional int64 int64_sum_result = 1;
 * @return {number}
 */
proto.calculator.SumResponse.prototype.getInt64SumResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.calculator.SumResponse.prototype.setInt64SumResult = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float float_sum_result = 2;
 * @return {number}
 */
proto.calculator.SumResponse.prototype.getFloatSumResult = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.calculator.SumResponse.prototype.setFloatSumResult = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double double_sum_result = 3;
 * @return {number}
 */
proto.calculator.SumResponse.prototype.getDoubleSumResult = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.calculator.SumResponse.prototype.setDoubleSumResult = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


goog.object.extend(exports, proto.calculator);
