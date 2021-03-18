import { checkName, checkId, checkMail, checkNumber } from '../utils/Func';

// IdFind.js
const phonehandleIdButton = () => {
    const isChecked = checkName() && checkNumber();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
const mailhandleIdButton = () => {
    const isChecked = checkMail();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
const wowhandleIdButton = (dom) => {
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = false;
    return dom;
};

// PwFind.js
const phonehandlePwButton = () => {
    const isChecked = checkId() && checkName() && checkNumber();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
const mailhandlePwButton = () => {
    const isChecked = checkId() && checkMail();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
const wowhandlePwButton = () => {
    const isChecked = checkId();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};

export {
    phonehandleIdButton,
    mailhandleIdButton,
    wowhandleIdButton,
    phonehandlePwButton,
    mailhandlePwButton,
    wowhandlePwButton,
};
