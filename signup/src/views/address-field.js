"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_field_template_1 = __importDefault(require("./address-field.template"));
const DefaultProps = {
    id: '',
    label: 'label',
    require: false,
};
class AddressField {
    constructor(container, data) {
        this.template = address_field_template_1.default;
        this.render = (append = false) => {
            var _a;
            const container = document.querySelector(this.container);
            if (append) {
                const divFragment = document.createElement('div');
                divFragment.innerHTML = this.template(Object.assign({}, this.data));
                container.appendChild(divFragment.firstElementChild);
            }
            else {
                container.innerHTML = this.template(Object.assign({}, this.data));
            }
            (_a = container.querySelector(`#search-address`)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        this.address1 = data.roadAddress;
                        this.zipcode = data.sigunguCode;
                        container.querySelector('#address1').value = `(${this.zipcode}) ${this.address1}`;
                    }
                }).open();
            });
        };
        this.container = container;
        this.data = Object.assign(Object.assign({}, DefaultProps), data);
    }
    get isValid() {
        return true;
    }
    get name() {
        return this.data.id;
    }
    get value() {
        var _a;
        const container = document.querySelector(this.container);
        const address2 = (_a = container.querySelector('#address2')) === null || _a === void 0 ? void 0 : _a.value;
        return `${this.zipcode}|${this.address1} ${address2 || ''}`;
    }
}
exports.default = AddressField;
//# sourceMappingURL=address-field.js.map