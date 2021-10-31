const NAME_INPUT = document.getElementById("firstname");
const SURNAME_INPUT = document.getElementById("lastname");
const EMAIL_INPUT = document.getElementById("email");
const LOGIN_INPUT = document.getElementById("loginaccount");
const PASSWORD_INPUT = document.getElementById("passwordaccount");
const CREATE_BUTTON = document.getElementById("buttoncreateaccount");
const ACCOUNTS_CONTAINER = document.getElementById("Accounts");
const FORM = document.getElementById("form");

let ACCOUNT = [];

FORM.addEventListener('submit', function createaccount(event) {
    event.preventDefault();

    const Create = new createAccount(NAME_INPUT.value, SURNAME_INPUT.value, EMAIL_INPUT.value, LOGIN_INPUT.value, PASSWORD_INPUT.value);
    const validator = new Validator(NAME_INPUT.value, SURNAME_INPUT.value, EMAIL_INPUT.value, LOGIN_INPUT.value, PASSWORD_INPUT.value);

    if (validator.checkAllFields()) {
        console.log('Всё хорошо')
    } else {
        console.log('Ошибка!')
    }

    console.log(Create);
    clearValues();
    redrawList();
});

function clearValues() {
    NAME_INPUT.value = ' ';
    SURNAME_INPUT.value = ' ';
    EMAIL_INPUT.value = ' ';
    LOGIN_INPUT.value = ' ';
    PASSWORD_INPUT.value = ' ';
}

function redrawList() {
    let itemsMarkup = ' ';
    ACCOUNT.forEach((item) => {
        itemsMarkup += item.getMarkup();
    })
    ACCOUNTS_CONTAINER.innerHTML = itemsMarkup;
}


function createAccount(name, surname, email, login, password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.login = login;
    this.password = password;

    ACCOUNT = [
        ...ACCOUNT,
        this,
    ];
}

createAccount.prototype.getMarkup = function () {
    return `
<div class="accounts-container" >
    Имя: ${this.name} <br>
    Фамилия: ${this.surname} <br>
    EMAIL: ${this.email} <br>
    Login: ${this.login} <br>
    Password: ${this.password} <br>
</div>
`;

}

class Validator {
    constructor(name, surname, email, login, password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.login = login;
        this.password = password;

    }

    PASSWORD_LENGTH = 8;
    static domains = ['.com', '.ru', '.ua'];

    checkEmail = (email) => {
        return this.hasAt(email) && this.correctDomains(email);
    }

    hasAt(str) {
        return str.includes('@')
    }

    correctDomains(str) {
        return Validator.domains.some((domain) => str.endsWith(domain));
    }

    checkAllFields = () => {
        if (this.checkEmail(this.email) && this.checkPassword(this.password)) {
            return true
        } else {
            return false
        }

    }

    checkPassword = (password) => {
        if (password.length >= this.PASSWORD_LENGTH) {
            return true
        } else {
            return false
        }
    }

}