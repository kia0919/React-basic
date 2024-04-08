import React, { useState } from 'react'

// 상태(status) :
// - 각각의 컴포넌트가 가지는 데이터
// - 컴포넌트의 렌더링 결과에 영향을 미침
// - 컴포넌트는 독립적인 상태를 가질 수 있음
// - 상태가 변경되면 컴포넌트가 리렌더링 됨

export default function StateComponent() {

    // status 선언: 
    // - useState 함수로 함수 선언
    // - const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);

    // let count = 0;
    // count[상태변수로 사용], setCount[상태변경함수로 사용]
    const [count, setCount] = useState<number>(0);

    const onCountAddHandler = () => {
        // setCount(count + 1);

        // 상태변수는 반드시 상태변경함수로 변경해야 리렌더링이 된다.
        // count++;

        // 3씩 더해지는게 아닌, 1번 동작이 된후 재연결 후 리렌더링하여 동작 한다.
        // 상태변경 함수를 통해서 함수를 변경한다고 바로 적용되지 않음.
        // 리렌더링된 후 상태변경 함수가 적용됨
        // setCount(count + 1);
        // console.log(count);
        // setCount(count + 1);
        // console.log(count);
        // setCount(count + 1);
        // console.log(count);

        
        //  setCount((count) => count +1);
        // 상태변경 함수에 콜백 함수를 전달하면 해당 콜백 함수는 상태 변경 작업을 누적해서 함
        // setCount((count) => count +1);
        // console.log(count);
        // setCount((count) => count +1);
        // console.log(count);
        // setCount((count) => count +1);
        // console.log(count);
        // setCount(count + 1);
        // console.log(count);
    };

  return (
    <>
        <button onClick={onCountAddHandler}>+</button>
        <h1>{count}</h1>
    </>    
  );
}
