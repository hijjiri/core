/**
 * @fileoverview gRPC-Web generated client stub for deck
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.deck = require('./deck_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.deck.DeckServiceClient =
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
proto.deck.DeckServicePromiseClient =
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
 *   !proto.deck.Uid,
 *   !proto.deck.MiniDeck>}
 */
const methodDescriptor_DeckService_GetDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/GetDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.Uid,
  proto.deck.MiniDeck,
  /**
   * @param {!proto.deck.Uid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.MiniDeck.deserializeBinary
);


/**
 * @param {!proto.deck.Uid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.MiniDeck)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.MiniDeck>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.getDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/GetDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetDeck,
      callback);
};


/**
 * @param {!proto.deck.Uid} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.MiniDeck>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.getDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/GetDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Empty,
 *   !proto.deck.Decks>}
 */
const methodDescriptor_DeckService_GetMyDecks = new grpc.web.MethodDescriptor(
  '/deck.DeckService/GetMyDecks',
  grpc.web.MethodType.UNARY,
  proto.deck.Empty,
  proto.deck.Decks,
  /**
   * @param {!proto.deck.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Decks.deserializeBinary
);


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Decks)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Decks>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.getMyDecks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/GetMyDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetMyDecks,
      callback);
};


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Decks>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.getMyDecks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/GetMyDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetMyDecks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetMyDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.SetMyDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetMyDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetMyDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyDeck,
      callback);
};


/**
 * @param {!proto.deck.SetMyDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.StaminaRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_RecoveryStamina = new grpc.web.MethodDescriptor(
  '/deck.DeckService/RecoveryStamina',
  grpc.web.MethodType.UNARY,
  proto.deck.StaminaRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.StaminaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.StaminaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.recoveryStamina =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/RecoveryStamina',
      request,
      metadata || {},
      methodDescriptor_DeckService_RecoveryStamina,
      callback);
};


/**
 * @param {!proto.deck.StaminaRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.recoveryStamina =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/RecoveryStamina',
      request,
      metadata || {},
      methodDescriptor_DeckService_RecoveryStamina);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.UidCup,
 *   !proto.deck.MiniDeck>}
 */
const methodDescriptor_DeckService_GetCupDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/GetCupDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.UidCup,
  proto.deck.MiniDeck,
  /**
   * @param {!proto.deck.UidCup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.MiniDeck.deserializeBinary
);


/**
 * @param {!proto.deck.UidCup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.MiniDeck)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.MiniDeck>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.getCupDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/GetCupDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetCupDeck,
      callback);
};


/**
 * @param {!proto.deck.UidCup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.MiniDeck>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.getCupDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/GetCupDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetCupDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.UidsCup,
 *   !proto.deck.MiniDecksWithUid>}
 */
const methodDescriptor_DeckService_GetCupDecks = new grpc.web.MethodDescriptor(
  '/deck.DeckService/GetCupDecks',
  grpc.web.MethodType.UNARY,
  proto.deck.UidsCup,
  proto.deck.MiniDecksWithUid,
  /**
   * @param {!proto.deck.UidsCup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.MiniDecksWithUid.deserializeBinary
);


/**
 * @param {!proto.deck.UidsCup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.MiniDecksWithUid)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.MiniDecksWithUid>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.getCupDecks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/GetCupDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetCupDecks,
      callback);
};


/**
 * @param {!proto.deck.UidsCup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.MiniDecksWithUid>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.getCupDecks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/GetCupDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetCupDecks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.CupDeck,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyCupDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyCupDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.CupDeck,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.CupDeck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.CupDeck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyCupDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyCupDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyCupDeck,
      callback);
};


/**
 * @param {!proto.deck.CupDeck} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyCupDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyCupDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyCupDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Empty,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_BreakupPrimeDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/BreakupPrimeDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.Empty,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.breakupPrimeDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/BreakupPrimeDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_BreakupPrimeDeck,
      callback);
};


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.breakupPrimeDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/BreakupPrimeDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_BreakupPrimeDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Deck,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyKnightDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyKnightDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.Deck,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.Deck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyKnightDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyKnightDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyKnightDeck,
      callback);
};


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyKnightDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyKnightDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyKnightDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Deck,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyWarDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyWarDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.Deck,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.Deck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyWarDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyWarDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyWarDeck,
      callback);
};


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyWarDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyWarDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyWarDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Empty,
 *   !proto.deck.FlagDecks>}
 */
const methodDescriptor_DeckService_GetOurFlagDecks = new grpc.web.MethodDescriptor(
  '/deck.DeckService/GetOurFlagDecks',
  grpc.web.MethodType.UNARY,
  proto.deck.Empty,
  proto.deck.FlagDecks,
  /**
   * @param {!proto.deck.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.FlagDecks.deserializeBinary
);


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.FlagDecks)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.FlagDecks>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.getOurFlagDecks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/GetOurFlagDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetOurFlagDecks,
      callback);
};


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.FlagDecks>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.getOurFlagDecks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/GetOurFlagDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetOurFlagDecks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.CupDeck,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyNineDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyNineDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.CupDeck,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.CupDeck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.CupDeck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyNineDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyNineDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyNineDeck,
      callback);
};


/**
 * @param {!proto.deck.CupDeck} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyNineDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyNineDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyNineDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetThreeOnThreeOnThreeDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyThreeOnThreeOnThreeDecks = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyThreeOnThreeOnThreeDecks',
  grpc.web.MethodType.UNARY,
  proto.deck.SetThreeOnThreeOnThreeDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetThreeOnThreeOnThreeDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetThreeOnThreeOnThreeDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyThreeOnThreeOnThreeDecks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyThreeOnThreeOnThreeDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyThreeOnThreeOnThreeDecks,
      callback);
};


/**
 * @param {!proto.deck.SetThreeOnThreeOnThreeDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyThreeOnThreeOnThreeDecks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyThreeOnThreeOnThreeDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyThreeOnThreeOnThreeDecks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.DeckNumbers,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SwitchThreeOnThreeOnThreeDecksOrder = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SwitchThreeOnThreeOnThreeDecksOrder',
  grpc.web.MethodType.UNARY,
  proto.deck.DeckNumbers,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.DeckNumbers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.DeckNumbers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.switchThreeOnThreeOnThreeDecksOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SwitchThreeOnThreeOnThreeDecksOrder',
      request,
      metadata || {},
      methodDescriptor_DeckService_SwitchThreeOnThreeOnThreeDecksOrder,
      callback);
};


/**
 * @param {!proto.deck.DeckNumbers} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.switchThreeOnThreeOnThreeDecksOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SwitchThreeOnThreeOnThreeDecksOrder',
      request,
      metadata || {},
      methodDescriptor_DeckService_SwitchThreeOnThreeOnThreeDecksOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetMyArenaDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyArenaDeckV2 = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyArenaDeckV2',
  grpc.web.MethodType.UNARY,
  proto.deck.SetMyArenaDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetMyArenaDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetMyArenaDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyArenaDeckV2 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyArenaDeckV2',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyArenaDeckV2,
      callback);
};


/**
 * @param {!proto.deck.SetMyArenaDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyArenaDeckV2 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyArenaDeckV2',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyArenaDeckV2);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Deck,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyColosseumOffenseDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyColosseumOffenseDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.Deck,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.Deck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyColosseumOffenseDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyColosseumOffenseDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyColosseumOffenseDeck,
      callback);
};


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyColosseumOffenseDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyColosseumOffenseDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyColosseumOffenseDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetMyDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyColosseumDefenseDeckV2 = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyColosseumDefenseDeckV2',
  grpc.web.MethodType.UNARY,
  proto.deck.SetMyDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetMyDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetMyDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyColosseumDefenseDeckV2 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyColosseumDefenseDeckV2',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyColosseumDefenseDeckV2,
      callback);
};


/**
 * @param {!proto.deck.SetMyDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyColosseumDefenseDeckV2 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyColosseumDefenseDeckV2',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyColosseumDefenseDeckV2);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Deck,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyQuestSixDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyQuestSixDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.Deck,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.Deck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyQuestSixDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyQuestSixDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyQuestSixDeck,
      callback);
};


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyQuestSixDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyQuestSixDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyQuestSixDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetGymDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetGymDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetGymDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.SetGymDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetGymDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetGymDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setGymDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetGymDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetGymDeck,
      callback);
};


/**
 * @param {!proto.deck.SetGymDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setGymDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetGymDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetGymDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetSoulDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetSoulDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetSoulDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.SetSoulDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetSoulDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetSoulDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setSoulDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetSoulDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetSoulDeck,
      callback);
};


/**
 * @param {!proto.deck.SetSoulDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setSoulDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetSoulDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetSoulDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Empty,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_ClearSoulDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/ClearSoulDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.Empty,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.clearSoulDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/ClearSoulDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_ClearSoulDeck,
      callback);
};


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.clearSoulDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/ClearSoulDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_ClearSoulDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetSoulDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetSoulBattleDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetSoulBattleDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.SetSoulDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetSoulDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetSoulDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setSoulBattleDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetSoulBattleDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetSoulBattleDeck,
      callback);
};


/**
 * @param {!proto.deck.SetSoulDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setSoulBattleDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetSoulBattleDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetSoulBattleDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.DeckNo,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_ClearSoulBattleDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/ClearSoulBattleDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.DeckNo,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.DeckNo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.DeckNo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.clearSoulBattleDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/ClearSoulBattleDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_ClearSoulBattleDeck,
      callback);
};


/**
 * @param {!proto.deck.DeckNo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.clearSoulBattleDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/ClearSoulBattleDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_ClearSoulBattleDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Empty,
 *   !proto.deck.DeckTemplates>}
 */
const methodDescriptor_DeckService_GetMyDeckTemplates = new grpc.web.MethodDescriptor(
  '/deck.DeckService/GetMyDeckTemplates',
  grpc.web.MethodType.UNARY,
  proto.deck.Empty,
  proto.deck.DeckTemplates,
  /**
   * @param {!proto.deck.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.DeckTemplates.deserializeBinary
);


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.DeckTemplates)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.DeckTemplates>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.getMyDeckTemplates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/GetMyDeckTemplates',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetMyDeckTemplates,
      callback);
};


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.DeckTemplates>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.getMyDeckTemplates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/GetMyDeckTemplates',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetMyDeckTemplates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.HeroIds,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_CreateMyDeckTemplate = new grpc.web.MethodDescriptor(
  '/deck.DeckService/CreateMyDeckTemplate',
  grpc.web.MethodType.UNARY,
  proto.deck.HeroIds,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.HeroIds} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.HeroIds} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.createMyDeckTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/CreateMyDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_CreateMyDeckTemplate,
      callback);
};


/**
 * @param {!proto.deck.HeroIds} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.createMyDeckTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/CreateMyDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_CreateMyDeckTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.DeckTemplateNo,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_DeleteMyDeckTemplate = new grpc.web.MethodDescriptor(
  '/deck.DeckService/DeleteMyDeckTemplate',
  grpc.web.MethodType.UNARY,
  proto.deck.DeckTemplateNo,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.DeckTemplateNo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.DeckTemplateNo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.deleteMyDeckTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/DeleteMyDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_DeleteMyDeckTemplate,
      callback);
};


/**
 * @param {!proto.deck.DeckTemplateNo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.deleteMyDeckTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/DeleteMyDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_DeleteMyDeckTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetMyTemplateRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyDeckTemplate = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyDeckTemplate',
  grpc.web.MethodType.UNARY,
  proto.deck.SetMyTemplateRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetMyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetMyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyDeckTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyDeckTemplate,
      callback);
};


/**
 * @param {!proto.deck.SetMyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyDeckTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyDeckTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.TemplateNumbers,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SwitchMyDeckTemplateOrder = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SwitchMyDeckTemplateOrder',
  grpc.web.MethodType.UNARY,
  proto.deck.TemplateNumbers,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.TemplateNumbers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.TemplateNumbers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.switchMyDeckTemplateOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SwitchMyDeckTemplateOrder',
      request,
      metadata || {},
      methodDescriptor_DeckService_SwitchMyDeckTemplateOrder,
      callback);
};


/**
 * @param {!proto.deck.TemplateNumbers} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.switchMyDeckTemplateOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SwitchMyDeckTemplateOrder',
      request,
      metadata || {},
      methodDescriptor_DeckService_SwitchMyDeckTemplateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.HeroIds,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_CreateMyQuestDeckTemplate = new grpc.web.MethodDescriptor(
  '/deck.DeckService/CreateMyQuestDeckTemplate',
  grpc.web.MethodType.UNARY,
  proto.deck.HeroIds,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.HeroIds} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.HeroIds} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.createMyQuestDeckTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/CreateMyQuestDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_CreateMyQuestDeckTemplate,
      callback);
};


/**
 * @param {!proto.deck.HeroIds} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.createMyQuestDeckTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/CreateMyQuestDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_CreateMyQuestDeckTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.DeckTemplateNo,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_DeleteMyQuestDeckTemplate = new grpc.web.MethodDescriptor(
  '/deck.DeckService/DeleteMyQuestDeckTemplate',
  grpc.web.MethodType.UNARY,
  proto.deck.DeckTemplateNo,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.DeckTemplateNo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.DeckTemplateNo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.deleteMyQuestDeckTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/DeleteMyQuestDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_DeleteMyQuestDeckTemplate,
      callback);
};


/**
 * @param {!proto.deck.DeckTemplateNo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.deleteMyQuestDeckTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/DeleteMyQuestDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_DeleteMyQuestDeckTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetMyTemplateRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyQuestDeckTemplate = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyQuestDeckTemplate',
  grpc.web.MethodType.UNARY,
  proto.deck.SetMyTemplateRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetMyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetMyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyQuestDeckTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyQuestDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyQuestDeckTemplate,
      callback);
};


/**
 * @param {!proto.deck.SetMyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyQuestDeckTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyQuestDeckTemplate',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyQuestDeckTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.TemplateNumbers,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SwitchMyQuestDeckTemplateOrder = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SwitchMyQuestDeckTemplateOrder',
  grpc.web.MethodType.UNARY,
  proto.deck.TemplateNumbers,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.TemplateNumbers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.TemplateNumbers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.switchMyQuestDeckTemplateOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SwitchMyQuestDeckTemplateOrder',
      request,
      metadata || {},
      methodDescriptor_DeckService_SwitchMyQuestDeckTemplateOrder,
      callback);
};


/**
 * @param {!proto.deck.TemplateNumbers} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.switchMyQuestDeckTemplateOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SwitchMyQuestDeckTemplateOrder',
      request,
      metadata || {},
      methodDescriptor_DeckService_SwitchMyQuestDeckTemplateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Empty,
 *   !proto.deck.DeckTemplateInfo>}
 */
const methodDescriptor_DeckService_GetMyDeckTemplateInfo = new grpc.web.MethodDescriptor(
  '/deck.DeckService/GetMyDeckTemplateInfo',
  grpc.web.MethodType.UNARY,
  proto.deck.Empty,
  proto.deck.DeckTemplateInfo,
  /**
   * @param {!proto.deck.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.DeckTemplateInfo.deserializeBinary
);


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.DeckTemplateInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.DeckTemplateInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.getMyDeckTemplateInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/GetMyDeckTemplateInfo',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetMyDeckTemplateInfo,
      callback);
};


/**
 * @param {!proto.deck.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.DeckTemplateInfo>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.getMyDeckTemplateInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/GetMyDeckTemplateInfo',
      request,
      metadata || {},
      methodDescriptor_DeckService_GetMyDeckTemplateInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetRatingDuelOffenseDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyRatingDuelOffenseDecks = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyRatingDuelOffenseDecks',
  grpc.web.MethodType.UNARY,
  proto.deck.SetRatingDuelOffenseDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetRatingDuelOffenseDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetRatingDuelOffenseDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyRatingDuelOffenseDecks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyRatingDuelOffenseDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyRatingDuelOffenseDecks,
      callback);
};


/**
 * @param {!proto.deck.SetRatingDuelOffenseDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyRatingDuelOffenseDecks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyRatingDuelOffenseDecks',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyRatingDuelOffenseDecks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.SetRatingDuelDefenseDeckRequest,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyRatingDuelDefenseDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyRatingDuelDefenseDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.SetRatingDuelDefenseDeckRequest,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.SetRatingDuelDefenseDeckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.SetRatingDuelDefenseDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyRatingDuelDefenseDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyRatingDuelDefenseDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyRatingDuelDefenseDeck,
      callback);
};


/**
 * @param {!proto.deck.SetRatingDuelDefenseDeckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyRatingDuelDefenseDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyRatingDuelDefenseDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyRatingDuelDefenseDeck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.deck.Deck,
 *   !proto.deck.Empty>}
 */
const methodDescriptor_DeckService_SetMyRaidDeck = new grpc.web.MethodDescriptor(
  '/deck.DeckService/SetMyRaidDeck',
  grpc.web.MethodType.UNARY,
  proto.deck.Deck,
  proto.deck.Empty,
  /**
   * @param {!proto.deck.Deck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.deck.Empty.deserializeBinary
);


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.deck.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.deck.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.deck.DeckServiceClient.prototype.setMyRaidDeck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/deck.DeckService/SetMyRaidDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyRaidDeck,
      callback);
};


/**
 * @param {!proto.deck.Deck} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.deck.Empty>}
 *     Promise that resolves to the response
 */
proto.deck.DeckServicePromiseClient.prototype.setMyRaidDeck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/deck.DeckService/SetMyRaidDeck',
      request,
      metadata || {},
      methodDescriptor_DeckService_SetMyRaidDeck);
};


module.exports = proto.deck;

