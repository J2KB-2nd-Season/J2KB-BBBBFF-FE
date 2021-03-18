const checkId = () => {
    const id = document.getElementById('loginIdInput');
    const checkedId = /^[A-za-z]{5,20}$/g;
    const length = id.value.length;
    if (length >= 5 && length <= 20) {
        if (checkedId.test(id.value)) {
            return true;
        }
    }
    return false;
};
const checkPw = () => {
    const pw = document.getElementById('loginPwInput');
    // 비밀번호 정규화를 하면 조건이 참이 안 돼서 주석 처리 합니다.
    // const checkedPw = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
    const length = pw.value.length;
    if (length >= 8 && length <= 20) {
        // if (checkedPw.test(pw.value)) {
        //     return true;
        // }
        return true;
    }
    return false;
};

const loginButton = () => {
    let isChecked = checkId() && checkPw();
    const btn = document.querySelector('.JoinPage_loginButton__3rsP-');
    if (isChecked) {
        btn.disabled = !isChecked;
    } else {
        btn.disabled = !isChecked;
    }
};

export { checkId, checkPw, loginButton };
