import { checkName, checkID2, checkMail, checkNumber2 } from '../utils/Func';

// IdFind.js
export const phonehandleIdButton = () => {
    const isChecked = checkName() && checkNumber2();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
export const mailhandleIdButton = () => {
    const isChecked = checkMail();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
export const wowhandleIdButton = (dom) => {
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = false;
    return dom;
};

// PwFind.js
export const phonehandlePwButton = () => {
    const isChecked = checkID2() && checkName() && checkNumber2();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
export const mailhandlePwButton = () => {
    const isChecked = checkID2() && checkMail();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
export const wowhandlePwButton = () => {
    const isChecked = checkID2();
    const joinButton = document.querySelector('.submitButton');
    joinButton.disabled = !isChecked;
};
