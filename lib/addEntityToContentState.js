/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 *  strict-local
 */

'use strict';

var addEntityToEntityMap = require('./addEntityToEntityMap');

function addEntityToContentState(contentState, instance) {
  return contentState.set('entityMap', addEntityToEntityMap(contentState.getEntityMap(), instance));
}

module.exports = addEntityToContentState;