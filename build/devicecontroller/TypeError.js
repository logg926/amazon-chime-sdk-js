"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
const GetUserMediaError_1 = require("./GetUserMediaError");
class TypeError extends GetUserMediaError_1.default {
    constructor(cause) {
        super(cause);
    }
}
exports.default = TypeError;
//# sourceMappingURL=TypeError.js.map