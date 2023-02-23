"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const text_field_template_1 = __importDefault(require("./text-field.template"));
const constant_1 = require("../constant");
const DefaultProps = {
    id: '',
    text: '',
    label: 'label',
    type: 'text',
    placeholder: '',
    require: false,
};
class TextField {
    constructor(container, data) {
        this.template = text_field_template_1.default;
        this.updated = false;
        this.validateRules = [];
        this.validate = () => {
            const target = this.data.text ? this.data.text.trim() : '';
            const invalidateRules = this.validateRules
                .filter(validateRule => validateRule.rule.test(target) !== validateRule.match);
            return (invalidateRules.length > 0) ? invalidateRules[0] : null;
        };
        this.buildData = () => {
            const isInvalid = this.validate();
            if (this.updated) {
                return Object.assign(Object.assign({}, this.data), { updated: this.updated, valid: !isInvalid, validateMessage: !!isInvalid ? isInvalid.message : '' });
            }
            else {
                return Object.assign(Object.assign({}, this.data), { updated: this.updated, valid: true, validateMessage: '' });
            }
        };
        this.onChange = (e) => {
            const { value, id } = e.target;
            if (id === this.data.id) {
                this.updated = true;
                this.data.text = value;
                this.update();
            }
        };
        this.attachEventHandler = () => {
            var _a;
            (_a = document.querySelector(this.container)) === null || _a === void 0 ? void 0 : _a.addEventListener('change', this.onChange);
        };
        this.update = () => {
            const container = document.querySelector(`#field-${this.data.id}`);
            const docFrag = document.createElement('div');
            docFrag.innerHTML = this.template(this.buildData());
            container.innerHTML = docFrag.children[0].innerHTML;
        };
        this.addValidateRule = (rule) => {
            this.validateRules.push(rule);
        };
        this.render = (append = false) => {
            const container = document.querySelector(this.container);
            if (append) {
                const divFragment = document.createElement('div');
                divFragment.innerHTML = this.template(this.buildData());
                container.appendChild(divFragment.children[0]);
            }
            else {
                container.innerHTML = this.template(this.buildData());
            }
        };
        this.container = container;
        this.data = Object.assign(Object.assign({}, DefaultProps), data);
        if (this.data.require) {
            this.addValidateRule(constant_1.RequireRule);
        }
        (0, utils_1.nextTick)(this.attachEventHandler);
    }
    get name() {
        return this.data.id;
    }
    get value() {
        return this.data.text || '';
    }
    get isValid() {
        return !this.validate();
    }
}
exports.default = TextField;
//# sourceMappingURL=text-field.js.map