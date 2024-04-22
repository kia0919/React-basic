import { useState } from "react";

// 컴포넌트로 상태 전달:
// - 부모요소에 자식요소로 상태를 전달하려면 Properties로 전달
// - 문제점 : 
// - 자식 컴포넌트에서 상태를 변경하면 부모 컴포넌트가 리렌더링 됨
// - 해당 상태를 쓰지 않는 부모 컴포넌트의 자식 컴포넌트도 같이 렌러딩이 됨
// - 상태 선언을 최대한 낮은 부모 컴포넌트에서 선언하여 전달
// - 이 문제를 해결하기 위해 글로벌 상태(context, Redux, zustand)라고하는 상태관리가 파생됨

//# 인터페이스 객체속성 및 타입 지정
interface Sub1Props {
    count: number;
    onClickHandler: () => void;
}

//# 자식 컴포넌트 1
//! SubComponent1함수에  Sub1Props인터페이스 가져 옴
function SubComponent1 ({ count, onClickHandler }: Sub1Props) {
    //* 반환
    return (
        //* {count}를 객체로 가져와 사용, 배격색 red, 온클릭 이벤트 onClickHandler 타입 지정
        //* onClickHandler은 void로 반환받으므로 클릭시에도 아무것도 표시되지 않음
        <h1 style={{backgroundColor: 'red'}} onClick={onClickHandler}>{count}</h1>
    );
}
//# 자식 컴포넌트 2
//! SubComponent2함수에 Sub1Props 받아옴
function SubComponent2 (props: Sub1Props) {
    //* 상태함수, 상태변경함수 지정하고 타입(number[]: 배열 타입) 및 초기값([]: 빈 배열) 설정
    const [numbers, setNumbers] = useState<number[]>([]);
    //* onClickHandler함수 선언
    const onClickHandler = () => {
        //* numbers상태함수에 push(배열 끝에 0요소 추가)
        numbers.push(0);
        //* 상태변경함수로 numbers 상태 업데이트
        setNumbers(numbers);
    }
    //* 리턴
    return (
        //* 8픽셀의 여백, 배격색 blue
        <div style={{ padding: '8px', backgroundColor: 'blue' }}>
            {/* onCLick이벤트를 onClickHandler에 사용, 앞에서 지정한 numbers배열을 가져오고 .length로 numbers배열 길이를 뜻함   */}
            <h2 onClick={onClickHandler}>{numbers.length}</h2>
            {/*  SubComponent1컴포넌트에 props 객체속성을 모두 가져옴  */}
            <SubComponent1 { ...props } />
        </div>
    );
}

//# 부모컴포넌트
//* 해당 파일을 가져오기 위해 ForwordingStateComponent상태를 전달하기 위함
export default function ForwordingStateComponent() {
    //*  useState로 상태관리
    const [count, setCount] = useState<number>(0);
    //* 클릭 핸들러 지정
    const onPlusButtonClickHandler = () => {
        //* 상태변경함수 사용으로 상태 업데이트
        setCount(count + 1);
    };

    return (
        <>  
            {/* SubComponent1(자식 컴포넌트1) 렌더링 */}
            <SubComponent1 count={count} onClickHandler={onPlusButtonClickHandler} />
            {/* SubComponent2(자식 컴포넌트2) 렌더링 */}
            <SubComponent2 count={count} onClickHandler={onPlusButtonClickHandler} />
            {/* 버튼 클릭 핸들러함수 + 렌더링 */}
            <button onClick={onPlusButtonClickHandler}>+</button>
        </>
    );
}