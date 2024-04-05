import React from 'react'
import InputBox from './InputBox';
import './style.css';
import './common.css';

export default function SignInContainer() {
    return (
        <>
            <InputBox label='아이디' type='text' placeholder='아이디를 입력하세요.' button='중복확인'/>
            <InputBox label='비밀번호' type='password' placeholder='비밀번호를 입력하세요.'/>
        </>
    );
}
