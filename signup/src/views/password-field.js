"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const password_field_template_1 = __importDefault(require("./password-field.template"));
const constant_1 = require("../constant");
var StrongLevel;
(function (StrongLevel) {
    StrongLevel[StrongLevel["None"] = 0] = "None";
    StrongLevel[StrongLevel["Light"] = 1] = "Light";
    StrongLevel[StrongLevel["Medium"] = 2] = "Medium";
    StrongLevel[StrongLevel["Havey"] = 3] = "Havey";
})(StrongLevel || (StrongLevel = {}));
const StrongMessage = [
    '금지된 수준',
    '심각한 수준',
    '보통 수준',
    '강력한 암호',
];
const DefaultProps = {
    id: '',
    label: 'label',
    text: '',
    require: true,
    placeholder: '',
    strong: StrongLevel.None,
};
class PasswordField {
    constructor(container, data) {
        this.template = password_field_template_1.default;
        this.updated = false;
        this.validateRules = [];
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
        this.buildData = () => {
            let strongLevel = -1;
            const isInvalid = this.validate();
            if (this.data.text.length > 0) {
                strongLevel++;
            }
            if (this.data.text.length > 12) {
                strongLevel++;
            }
            if (/[!@#$%^&*()]/.test(this.data.text)) {
                strongLevel++;
            }
            if (/\d/.test(this.data.text)) {
                strongLevel++;
            }
            return Object.assign(Object.assign({}, this.data), { updated: this.updated, valid: this.updated ? !isInvalid : true, strongMessage: strongLevel < 0 ? '' : StrongMessage[strongLevel], strongLevel0: strongLevel >= 1, strongLevel1: strongLevel >= 2, strongLevel2: strongLevel >= 3, strongLevel3: strongLevel >= 4 });
        };
        this.validate = () => {
            const target = this.data.text ? this.data.text.trim() : '';
            const invalidateRules = this.validateRules
                .filter(validateRule => validateRule.rule.test(target) !== validateRule.match);
            return (invalidateRules.length > 0) ? invalidateRules[0] : null;
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
                container.appendChild(divFragment.firstElementChild);
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
exports.default = PasswordField;
//# sourceMappingURL=password-field.js.map