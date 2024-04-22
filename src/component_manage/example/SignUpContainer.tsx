import React from 'react'
//? InputBox가 EventComponent파일을 받아와서 EventComponent파일도 같이 가져옴
import InputBox, { InputBoxProps } from './InputBox';
import './style.css';
import './common.css';

const InputBoxes: InputBoxProps[] = [
    {
        label: '아이디',
        type: 'text',
        placeholder: '아이디를 입력하세요.',
        buttonTitle: '중복 확인'
    },
    {
        label: '비밀번호',
        type: 'password',
        placeholder: '비밀번호를 입력하세요.'
    },
    {
        label: '비밀번호 확인',
        type: 'password',
        placeholder: '비밀번호를 입력하세요.'
    },
    {
        label: '이메일',
        type: 'text',
        placeholder: '이메일을 입력하세요.',
        buttonTitle: '이메일 인증'
    },
    {
        label: '인증번호',
        type: 'text',
        placeholder: '인증번호 4자리를 입력하세요.',
        buttonTitle: '인증 확인'
    },
];

export default function SignUpContainer() {
    //! InputBoxes 배열을 매핑하여 InputBox 컴포넌트로 변환하고, 각각의 컴포넌트를 InputBoxComponents에 저장
    const InputBoxComponents = 
        InputBoxes.map((item, index) => <InputBox key={index} {...item} />)

    return (
        <>
            {InputBoxComponents}
        </>
    );
}