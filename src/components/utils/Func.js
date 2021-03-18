import styles from '../JoinPage/JoinPage.module.css';

const checkForm = (equation, target, text) => {
    if (!equation.test(target.value)) {
        return warnForm(target, text);
    } else {
        return recoverForm(target);
    }
};

const loadWarning = (target) => {
    let div;

    if (target.parentNode.querySelector(`.${styles.warning}`)) {
        div = target.parentNode.querySelector(`.${styles.warning}`);
    } else {
        div = document.createElement('div');
        div.setAttribute('class', `${styles.warning}`);
        target.parentNode.appendChild(div);
    }

    return div;
};

const warnForm = (target, text) => {
    const div = loadWarning(target);
    target.style.outline = '0.3px solid red';
    div.innerText = text;
    div.style.color = 'red';

    return false;
};

const recoverForm = (target) => {
    const div = loadWarning(target);
    target.style.outline = '0.3px solid lightgray';
    div.innerText = '';

    return true;
};

const checkName = () => {
    const target = document.querySelector('#member_name');
    const checkedName = /^[가-힣]+$/;

    if (target.value === '') {
        return warnForm(target, '이름을 입력해주세요');
    } else {
        return checkForm(checkedName, target, '유효한 이름(성함)이 아닙니다.');
    }
};

const checkId = () => {
    const target = document.querySelector('#member_id');
    const checkedId = /^[A-za-z]{5,20}$/g;

    if (target.value === '') {
        return warnForm(target, '아이디는 필수입력 사항입니다.');
    } else {
        return checkForm(checkedId, target, '유효한 아이디가 아닙니다.');
    }
};

const checkPw = () => {
    const target = document.querySelector('#member_pw');
    // 비밀번호 정규화를 하면 조건이 참이 안 돼서 주석 처리 합니다.
    // const checkedPw = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;

    if (target.value === '') {
        return warnForm(target.parentNode, '비밀번호는 필수입력 사항입니다.');
    } else if (target.value.length < 8 || target.value.length > 20) {
        return warnForm(target.parentNode, '8~20자 이내로 입력해 주세요 ');
    } else if (target.value.length >= 8 || target.value.length <= 20) {
        return recoverForm(target.parentNode);
        // checkForm(checkedPw, target.parentNode, '유효한 비밀번호가 아닙니다.');
    }
};

const checkPw2 = () => {
    const target = document.querySelector('#member_pw');
    const target2 = document.querySelector('#member_pw2');

    if (target2.value === '') {
        return warnForm(target2.parentNode, '비밀번호 확인은 필수입니다.');
    } else if (target.value !== target2.value) {
        return warnForm(target2.parentNode, '비밀번호가 일치하지 않습니다.');
    } else if (target.value === target2.value) {
        return recoverForm(target2.parentNode);
    }
};

const checkPw3 = () => {
    const target = document.querySelector('#member_pw');
    const target3 = document.querySelector('#member_pw3') ? document.querySelector('#member_pw3') : null;

    if (target3) {
        if (target3.value === '') {
            return warnForm(target3.parentNode, '비밀번호 확인은 필수입니다.');
        } else if (target.value !== target3.value) {
            return warnForm(target3.parentNode, '비밀번호가 일치하지 않습니다.');
        } else if (target.value === target3.value) {
            return recoverForm(target3.parentNode);
        }
    }
};

const checkMail = () => {
    const target = document.querySelector('#member_email');
    const checkedMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (target.value === '') {
        return warnForm(target, '이메일은 필수입력 사항입니다.');
    } else {
        return checkForm(checkedMail, target, '유효한 이메일이 아닙니다.');
    }
};

const checkNumber = () => {
    const target = document.querySelector('#member_phon');
    const checkedNumber = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;

    if (target.value === '') {
        return warnForm(target, '전화번호는 필수입력 사항입니다.');
    } else {
        return checkForm(checkedNumber, target, '올바른 전화번호가 아닙니다.');
    }
};

const checkAddress = () => {
    const target = document.querySelector('#member_adrs');

    if (target.value === '') {
        return warnForm(target, '전화번호는 필수입력 사항입니다.');
    } else {
        return recoverForm(target);
    }
};

const handleButton = () => {
    //조건을 모두 만족해야 회원가입 버튼이 활성화되는 함수
    const isChecked = checkPw3()
        ? checkName() && checkId() && checkPw() && checkPw2() && checkMail() && checkNumber() && checkAddress()
        : checkName() &&
          checkId() &&
          checkPw() &&
          checkPw2() &&
          checkPw3() &&
          checkMail() &&
          checkNumber() &&
          checkAddress();

    const joinButton = document.querySelector(`.${styles.joinButton}`);
    joinButton.disabled = !isChecked;
};

export { checkName, checkId, checkPw, checkPw2, checkPw3, checkMail, checkNumber, checkAddress, handleButton };
