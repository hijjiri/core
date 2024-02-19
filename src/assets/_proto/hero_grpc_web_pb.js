/**
 * @fileoverview gRPC-Web generated client stub for hero
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.hero = require('./hero_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hero.HeroServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hero.HeroServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hero.Empty,
 *   !proto.hero.HeroTypeMaster>}
 */
const methodDescriptor_HeroService_SaveIpfsSkillStock = new grpc.web.MethodDescriptor(
  '/hero.HeroService/SaveIpfsSkillStock',
  grpc.web.MethodType.UNARY,
  proto.hero.Empty,
  proto.hero.HeroTypeMaster,
  /**
   * @param {!proto.hero.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hero.HeroTypeMaster.deserializeBinary
);


/**
 * @param {!proto.hero.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hero.HeroTypeMaster)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hero.HeroTypeMaster>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hero.HeroServiceClient.prototype.saveIpfsSkillStock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hero.HeroService/SaveIpfsSkillStock',
      request,
      metadata || {},
      methodDescriptor_HeroService_SaveIpfsSkillStock,
      callback);
};


/**
 * @param {!proto.hero.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hero.HeroTypeMaster>}
 *     Promise that resolves to the response
 */
proto.hero.HeroServicePromiseClient.prototype.saveIpfsSkillStock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hero.HeroService/SaveIpfsSkillStock',
      request,
      metadata || {},
      methodDescriptor_HeroService_SaveIpfsSkillStock);
};


module.exports = proto.hero;

