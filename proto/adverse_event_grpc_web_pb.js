/**
 * @fileoverview gRPC-Web generated client stub for datacenter
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')
const proto = {};
proto.datacenter = require('./adverse_event_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.datacenter.AdverseEventClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.datacenter.AdverseEventPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.datacenter.AdverseEventClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.datacenter.AdverseEventClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.datacenter.AdverseEventModel,
 *   !proto.datacenter.ResAdverseEvent>}
 */
const methodInfo_AdverseEvent_Save = new grpc.web.AbstractClientBase.MethodInfo(
  proto.datacenter.ResAdverseEvent,
  /** @param {!proto.datacenter.AdverseEventModel} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.datacenter.ResAdverseEvent.deserializeBinary
);


/**
 * @param {!proto.datacenter.AdverseEventModel} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.datacenter.ResAdverseEvent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.datacenter.ResAdverseEvent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.datacenter.AdverseEventClient.prototype.save =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/datacenter.AdverseEvent/Save',
      request,
      metadata,
      methodInfo_AdverseEvent_Save,
      callback);
};


/**
 * @param {!proto.datacenter.AdverseEventModel} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.datacenter.ResAdverseEvent>}
 *     The XHR Node Readable Stream
 */
proto.datacenter.AdverseEventPromiseClient.prototype.save =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.save(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.datacenter.RepSearch,
 *   !proto.datacenter.ResSearch>}
 */
const methodInfo_AdverseEvent_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.datacenter.ResSearch,
  /** @param {!proto.datacenter.RepSearch} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.datacenter.ResSearch.deserializeBinary
);


/**
 * @param {!proto.datacenter.RepSearch} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.datacenter.ResSearch)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.datacenter.ResSearch>|undefined}
 *     The XHR Node Readable Stream
 */
proto.datacenter.AdverseEventClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/datacenter.AdverseEvent/Search',
      request,
      metadata,
      methodInfo_AdverseEvent_Search,
      callback);
};


/**
 * @param {!proto.datacenter.RepSearch} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.datacenter.ResSearch>}
 *     The XHR Node Readable Stream
 */
proto.datacenter.AdverseEventPromiseClient.prototype.search =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.search(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.datacenter.RepAdverseEventView,
 *   !proto.datacenter.ResAdverseEvent>}
 */
const methodInfo_AdverseEvent_View = new grpc.web.AbstractClientBase.MethodInfo(
  proto.datacenter.ResAdverseEvent,
  /** @param {!proto.datacenter.RepAdverseEventView} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.datacenter.ResAdverseEvent.deserializeBinary
);


/**
 * @param {!proto.datacenter.RepAdverseEventView} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.datacenter.ResAdverseEvent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.datacenter.ResAdverseEvent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.datacenter.AdverseEventClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/datacenter.AdverseEvent/View',
      request,
      metadata,
      methodInfo_AdverseEvent_View,
      callback);
};


/**
 * @param {!proto.datacenter.RepAdverseEventView} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.datacenter.ResAdverseEvent>}
 *     The XHR Node Readable Stream
 */
proto.datacenter.AdverseEventPromiseClient.prototype.view =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.view(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.datacenter;

