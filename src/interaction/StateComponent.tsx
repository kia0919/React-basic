import React, { ChangeEvent, useState } from 'react'

//! 상태(status) :
// - 각각의 컴포넌트가 가지는 데이터
// - 컴포넌트의 렌더링 결과에 영향을 미침
// - 컴포넌트는 독립적인 상태를 가질 수 있음
// - 상태가 변경되면 컴포넌트가 리렌더링 됨

export default function StateComponent() {

    //! status 선언: 
    // - useState 함수로 함수 선언
    // - const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);

    // let count = 0;
    // count[상태변수로 사용], setCount[상태변경함수로 사용], useState함수 사용<type>, () 초기값 설정
    const [count, setCount] = useState<number>(0);
    // let total: number = 0;
    const [total, setTotal] = useState<number>(0);
    // let favorites: string[] = [];, string 타입이므로 초기값은 빈 값
    const [favorites, setFavorites] = useState<string[]>(['사과'])
    // 초기값은 빈 문자열.
    const [favorite, setFavorite] = useState<string>('');

    const onCountAddHandler = () => {
        //! setCount(count + 1);

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

        // 변경된 상태를 사용하고 싶을 때 임시 변수를 사용하여 간접 사용.
        const tmp = count + 1;
        setCount(tmp);
        setTotal(total + tmp);
    };

    // Input 요소의 값을 가져오고자 할 땐 onChange 이벤트의 .target.value로 가져옴
    const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // 가져온 .target.value 값을 상태에 지정
        setFavorite(event.target.value);
    };

    const onAddListHandler = () => {
        // 상태가 배열 혹은 객체이면 각각에 대해 요소를 추가, 변경이 일어나도, 
        // 상태가 변경된 것으로 인식하지 않음 (실제 주소가 변경되지 않았기 때문).
        // 상태가 변경된 것으로 인식하게 하고 싶으면 새로운 배열 혹은 객체를 생성하여,
        // 상태를 변경해야 함 (일반적으로 복사해서 변경).

        // 첫번째 방법
        // favorites.push(favorite);
        // const newFavorites = favorites.map(item => item);
        // setFavorites(newFavorites);  // 배열을 새로추가 (주소를 바꾸는 방법)

        // 2번째 스프레드(나머지) 방법 / 위랑 같은 거지만 용도에 따라 사용.
        setFavorites([...favorites, favorite]);
        setFavorite('');
    };

  return (
    <>
        <button onClick={onCountAddHandler}>+</button>
        <h1>{count}</h1>
        <h1>{total}</h1>
        <hr/>

        {/* input이 만약 상태를 변경한다면 value로 그 상태를 지정해야 불일치가 발생하지 않음 */}
        {/* inputBox에 입력 값이 바뀌면 바뀐 상태값이 화면에 표시된다.   */}
        <input onChange={onInputHandler} value={favorite}/>
        {/* button요소의 onClick이벤트 생성하여 onAddListHandler함수를 호출 입력한 값을 favorite배열에 추가하여 화면에 표시 */}
        <button onClick={onAddListHandler}>추가</button>
        {/* 상태변수의 값(입력한 값) 실시간으로 화면에 표시 */}
        <h4>{favorite}</h4>
        <ul>
            {/* map 메서드로 item요소와 index를 반복 작업 */}
            {/* 각 반복마다 li 태그 생성, 각 요소의 값을 item요소로 통해 화면에 표시 */}
            {favorites.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </>    
  );
}
