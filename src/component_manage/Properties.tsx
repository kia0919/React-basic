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
    // ?=선택적. 원래 interface에 지정한 속성은 반드시 사용하지만 ? 사용으로 사용하지 않아도 됨
    nickName?: string;
}

//Child 함수형 컴포넌트props 매개변수를 받아 전달된 속성을 참조
function Child({title, content, nickName='비공개' }: Props) {   // 매개변수를 객체로 넣고 Props타입을 사용으로 코드를 더 간결하게 사용 가능

    // const title = props.title;
    // const content = props.title;

    // const { title, content } = props;

    // 함수형은 this가 없어서 props 매개변수를 직접 받아 사용 props.title를 넣어서 사용할 수 있지만,
    // 위에 변수에 할당하여서 반환 내용에 title, content만 넣어서 사용할 수 있다.
    return (
        <div>
            <h1>{title}</h1>
            <h4>{nickName}</h4>
            <p>{content}</p>
        </div>
    )
}

export default function Properties() {
  return (
    <>
        <Child title='제목1' content='내용1' nickName='로제' />
        <Child title='국제인구 이동' content='보도자료' />
        <Child  title='외국인 지역별 통계' content='제가 못찾는 것일까요?'/>
    </>
  )
}