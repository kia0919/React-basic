import React from 'react'

// Properties (속성)
// - 부모 컴포넌트(호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *객체*
// - 부모 컴포넌트에서는 HTML과 동일한 방식 (속성명 = 데이터)로 전달
// - 자식 컴포넌트에서는 JS의 매개변수 방식으로 받음
// - 전달할 수 있는 데이터는 JS로 표현할 수 있는 모든 형태
interface Props {   
    // title, content:Props의 속성
    title: string;
    content: string;
}

//Child 함수형 컴포넌트props 매개변수를 받아 전달된 속성을 참조
function Child(props: Props) {

    // props = {
    //     title: '제목1',
    //     content: '내용1'
    // }

    // 함수형은 this가 없어서 props 매개변수를 직접 받아 사용
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default function Properties() {
  return (
    <>
        <Child title='제목1' content='내용1'/>
        <Child/>
        <Child/>
    </>
  )
}
