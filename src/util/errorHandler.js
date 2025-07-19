"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataError = exports.NetworkError = void 0;
exports.validateNetwork = validateNetwork;
exports.ValidateData = ValidateData;
var NetworkError = /** @class */ (function (_super) {
    __extends(NetworkError, _super);
    function NetworkError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'Network Error';
        return _this;
    }
    return NetworkError;
}(Error));
exports.NetworkError = NetworkError;
var DataError = /** @class */ (function (_super) {
    __extends(DataError, _super);
    function DataError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'Data Error';
        return _this;
    }
    return DataError;
}(Error));
exports.DataError = DataError;
function validateNetwork(response) {
    if (!response.ok) {
        throw new NetworkError("Error: ".concat(response.status));
    }
}
function ValidateData(data) {
    if (typeof data !== 'object' || data === null) {
        throw new DataError('Error validating data, please try again');
    }
}
