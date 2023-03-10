"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_template_1 = __importDefault(require("./app.template"));
const constant_1 = require("./constant");
const views_1 = require("./views");
class App {
    constructor(container, data = {}) {
        this.template = app_template_1.default;
        this.active = false;
        this.initialize = () => {
            const nameField = new views_1.TextField('#required-fields', {
                id: 'name', label: '이름', type: 'text', placeholder: '이름을 입력해주세요', require: true,
            });
            const idField = new views_1.TextField('#required-fields', {
                id: 'id', label: '아이디', type: 'text', placeholder: '아이디를 입력해주세요', require: true,
            });
            const emailField = new views_1.TextField('#required-fields', {
                id: 'email', label: '이메일', type: 'email', placeholder: '이메일을 입력해주세요', require: true,
            });
            const passwordField = new views_1.PasswordField('#required-fields', {
                id: 'password', label: '비밀번호', placeholder: '비밀번호를 입력해주세요',
            });
            const addressField = new views_1.AddressField('#optional-fields', {
                id: 'address', label: '배송지 주소',
            });
            idField.addValidateRule(constant_1.CantContainWhitespace);
            idField.addValidateRule(constant_1.CantStartNumber);
            idField.addValidateRule((0, constant_1.MinimumLengthLimit)(3));
            emailField.addValidateRule(constant_1.CantContainWhitespace);
            this.fields.push(nameField);
            this.fields.push(idField);
            this.fields.push(emailField);
            this.fields.push(passwordField);
            this.fields.push(addressField);
        };
        this.validFieldMonitor = () => {
            const btnJoin = this.container.querySelector('#btn-join');
            if (this.fields.filter(field => field.isValid).length === this.fields.length) {
                this.active = true;
                btnJoin.classList.remove('bg-gray-300');
                btnJoin.classList.add('bg-green-500');
            }
            else {
                this.active = false;
                btnJoin.classList.remove('bg-green-500');
                btnJoin.classList.add('bg-gray-300');
            }
        };
        this.onSubmit = (e) => {
            e.preventDefault();
            if (!this.active)
                return;
            const submitData = this.fields
                .map(field => ({ [field.name]: field.value }))
                .reduce((a, b) => (Object.assign(Object.assign({}, a), b)), {});
            console.log(submitData);
        };
        this.render = () => {
            this.container.innerHTML = this.template(this.data);
            this.fields.forEach(field => {
                field.render(true);
            });
            this.container.addEventListener('submit', this.onSubmit);
        };
        this.container = document.querySelector(container);
        this.data = data;
        this.fields = [];
        this.initialize();
        setInterval(this.validFieldMonitor, 1000 / 30);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map