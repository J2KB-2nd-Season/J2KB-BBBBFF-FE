import styles from '../JoinPage/JoinPage.module.css';

export const loadWarning = (target) => {
    //경고창을 불러오거나, 없으면 만드는 함수
    let div;

    if (target.parentNode.querySelector(`.${styles.warning}`))
        div = target.parentNode.querySelector(`.${styles.warning}`);
    else {
        div = document.createElement('div');
        div.setAttribute('class', `${styles.warning}`);
        target.parentNode.appendChild(div);
    }
    return div;
};

export const loadWarningPW = (target) => {
    //경고창을 불러오거나, 없으면 만드는 함수
    let div;

    if (target.parentNode.parentNode.querySelector(`.${styles.warning}`))
        div = target.parentNode.parentNode.querySelector(`.${styles.warning}`);
    else {
        div = document.createElement('div');
        div.setAttribute('class', `${styles.warning}`);
        target.parentNode.parentNode.appendChild(div);
    }
    return div;
};

export const loadWarning2 = (target) => {
    //경고창을 불러오거나, 없으면 만드는 함수
    let div;

    if (target.parentNode.parentNode.querySelector(`.${styles.warning}`))
        div = target.parentNode.parentNode.querySelector(`.${styles.warning}`);
    else {
        div = document.createElement('div');
        div.setAttribute('class', `${styles.warning}`);
        target.parentNode.parentNode.appendChild(div);
    }
    return div;
};

export const warnForm = (name, text) => {
    //경고창에 메시지 반환하는 함수
    const div = loadWarning(name);
    name.style.outline = '0.3px solid red';
    div.innerText = text;
    div.style.color = 'red';
    return false;
};

export const warnFormPW = (name, text) => {
    //경고창에 메시지 반환하는 함수
    const div = loadWarningPW(name);
    name.parentNode.style.outline = '0.3px solid red';
    div.innerText = text;
    div.style.color = 'red';
    return false;
};

export const warnForm2 = (name, text) => {
    //경고창에 메시지 반환하는 함수
    const div = loadWarning2(name);
    name.style.outline = '0.3px solid red';
    div.innerText = text;
    div.style.color = 'red';
    return false;
};

export const recoverForm = (name) => {
    //경고창 메시지 없애는 함수
    const div = loadWarning(name);
    name.style.outline = '0.3px solid lightgray';
    div.innerText = '';
    return true;
};

export const recoverFormPW = (name) => {
    //경고창 메시지 없애는 함수
    const div = loadWarningPW(name);
    name.parentNode.style.outline = '0.3px solid lightgray';
    div.innerText = '';
    return true;
};

export const recoverForm2 = (name) => {
    //경고창 메시지 없애는 함수
    const div = loadWarning2(name);
    name.style.outline = '0.3px solid lightgray';
    div.innerText = '';
    return true;
};

export const checkForm = (equation, target, text) => {
    //정규표현식을 받아 유효성 검사하는 함수
    if (!equation.test(target.value)) return warnForm(target, text);
    else return recoverForm(target);
};

export const checkForm2 = (equation, target, text) => {
    //정규표현식을 받아 유효성 검사하는 함수
    if (!equation.test(target.value)) return warnForm2(target, text);
    else return recoverForm2(target);
};

export const checkName = () => {
    //이름 체크하는 함수 - 정규표현식 사용
    const target = document.querySelector('#member_name')
        ? document.querySelector('#member_name')
        : document.querySelector('.NameInput');
    const nameCheck = /^[가-힣]+$/;
    return checkForm(nameCheck, target, '유효한 이름(성함)이 아닙니다.');
};

export const checkID = () => {
    //아이디 체크하는 함수 - 정규표현식 사용
    const target = document.querySelector('#member_id')
        ? document.querySelector('#member_id')
        : document.querySelector('.IdInput');
    const div = loadWarning(target);
    if (target.value === '') return warnForm(target, '아이디는 필수입력 사항입니다.');
    else if (target.value.length < 5) return warnForm(target, '아이디는 5자 이상이어야 합니다.');
    const nameCheck = /^[a-z0-9]+$/;
    if (!nameCheck.test(target.value)) {
        return warnForm(target, '영문소문자와 숫자만 사용 가능합니다.');
    } else {
        div.innerText = '사용 가능한 아이디입니다.';
        target.style.outline = '0.3px solid lightgray';
        div.style.color = 'blue';
        return true;
    }
    //아이디 중복을 체크해야 하는데 어떻게 해야 할지 모르겠음 ㅜㅜ
};

export const checkID2 = () => {
    //아이디 체크하는 함수 - 정규표현식 사용
    const target = document.querySelector('#member_id')
        ? document.querySelector('#member_id')
        : document.querySelector('.IdInput');
    const div = loadWarning(target);
    if (target.value === '') return warnForm(target, '아이디는 필수입력 사항입니다.');
    else if (target.value.length < 5) return warnForm(target, '아이디는 5자 이상이어야 합니다.');
    const nameCheck = /^[a-z0-9]+$/;
    if (!nameCheck.test(target.value)) {
        return warnForm(target, '영문소문자와 숫자만 사용 가능합니다.');
    } else {
        div.innerText = '';
        target.style.outline = '0.3px solid lightgray';
        div.style.color = 'black';
        return true;
    }
    //아이디 중복을 체크해야 하는데 어떻게 해야 할지 모르겠음 ㅜㅜ
};

export const checkPW = () => {
    //비밀번호 체크하는 함수 - 정규표현식을 딱히 쓰지는 않았습니다.
    const target = document.querySelector('#member_pw');
    if (target.value === '') {
        return warnFormPW(target, '비밀번호는 필수입력 사항입니다.');
    } else if (target.value.length < 8) {
        return warnFormPW(target, '비밀번호는 8자 이상 30자 이하여야 합니다.');
    } else return recoverFormPW(target);
};

export const checkPW2 = () => {
    //비밀번호 확인 체크하는 함수
    const target = document.querySelector('#member_pw');
    const target2 = document.querySelector('#member_pw2');
    if (target2.value === '') return warnFormPW(target2, '비밀번호 확인은 필수입니다.');
    if (target.value === target2.value) return recoverFormPW(target2);
    else return warnFormPW(target2, '비밀번호가 일치하지 않습니다.');
};

export const checkMail = () => {
    //이메일 체크하는 함수 - 정규표현식 사용
    const target = document.querySelector('#member_email')
        ? document.querySelector('#member_email')
        : document.querySelector('.EmailInput');
    if (target.value === '') return warnForm(target, '이메일은 필수입력 사항입니다.');
    const mailCheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    return checkForm(mailCheck, target, '올바른 이메일 형식이 아닙니다.');
};

export const checkNumber = () => {
    //전화번호 체크하는 함수 - 정규표현식 사용
    const target = document.querySelector('#member_phon')
        ? document.querySelector('#member_phon')
        : document.querySelector('.PhoneInput');
    if (target.value === '') return warnForm(target, '전화번호는 필수입력 사항입니다.');
    const numberCheck = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return checkForm(numberCheck, target, '올바른 전화번호가 아닙니다.');
};

export const checkNumber2 = () => {
    //전화번호 체크하는 함수 - 정규표현식 사용
    const target = document.querySelector('.PhoneInput');
    if (target.click()) {
        if (target.value === '') return warnForm2(target, '전화번호는 필수입력 사항입니다.');
    }
    const numberCheck = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return checkForm2(numberCheck, target, '올바른 전화번호가 아닙니다.');
};

export const checkAddress = () => {
    //주소 체크하는 함수 - 비어 있는지만 체크했습니다.
    const target = document.querySelector('#member_adrs');
    if (target.value === '') return warnForm(target, '주소는 필수입력 사항입니다.');
    else return recoverForm(target);
};

export const handleButton = () => {
    //조건을 모두 만족해야 회원가입 버튼이 활성화되는 함수
    const isChecked =
        checkName() && checkID() && checkPW() && checkPW2() && checkMail() && checkNumber() && checkAddress();
    const joinButton = document.querySelector(`.${styles.joinButton}`);
    joinButton.disabled = !isChecked;
};
