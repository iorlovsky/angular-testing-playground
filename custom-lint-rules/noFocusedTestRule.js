"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = 'Use of focused tests is forbidden';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var Walk = /** @class */ (function (_super) {
    __extends(Walk, _super);
    function Walk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forbiddenExpressions = ['fdescribe', 'fit'];
        return _this;
    }
    Walk.prototype.visitCallExpression = function (node) {
        if (this.isForbiddenExpression(node)) {
            this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), Rule.FAILURE_STRING);
        }
        _super.prototype.visitCallExpression.call(this, node);
    };
    Walk.prototype.isForbiddenExpression = function (node) {
        return this.forbiddenExpressions.includes(node.expression.getText());
    };
    return Walk;
}(Lint.RuleWalker));
