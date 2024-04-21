import React from 'react'

// 리스트 렌더링:
// - JSX 내부에서 반복적으로 렌더링하는 요소에 대해 반복 처리
// - JSX 안에서는 for 혹은 while과 같은 반복문 사용할 수 없음
// - 리스트의 각종 메서드를 활용

// interface: 속성 및 타입 지정
interface Human {
    name: string;
    age: number;
    job: string;
}

function ListItem ({name, age, job}: Human) {

    return (
        <div>
                <h1>이름: {name}</h1>
                <h4>나이: {age}</h4>
                <h4>직업: {job}</h4>
        </div>
    )
}

export default function ListRendering() {

    const humans: Human[] = [
        // 객체로 생성.
        { name: '홍길동', age: 20, job: '학생' },
        { name: '김철수', age: 30, job: '개발자' },
        { name: '이영희', age: 27, job: '경찰' },
        { name: '김민수', age: 12, job: '학생' }
    ];

    // 해당 조건이 true인 것만 
    const student = humans.filter(item => item.job === '학생');

            { /* 배열을 JSX에 반환하면 배열의 각 요소를 하나씩 꺼내와서 렌더링 */ }
            {/* { [ '요소1', '요소2', '요소3' ] } */}

            {/* forEach는 값을 반환하지 않음 */}
            {/* {humans.forEach((item, index,) => {
                return<ListItem name = {item.name} age={item.age} job={item.job} />
            })}; => void, undefiend */}

            {/* 반환 가능 */}
            {/* {humans.map((item, index,) => {
                return<ListItem name = {item.name} age={item.age} job={item.job} />
            })}; => [ListItem, ListItem, ListItem, ListItem] */}
            
            // - jSX에 리스트 고급 함수를 사용할 때 결과를 반환하는 함수를 사용해야함
            // - forEach는 결과를 반환하지 않아 사용X -> map 사용 
            // - 특정 조건에 해당하는 요소만 출력하고 싶으면 filter 메서드를 응용해서 사용

            // - 완전 단순한 반복 (횟수 반복)을 사용할 땐 반복하고자 하는 횟수의 길이를 가지는 배열을 생성해서 해당 배열로 반복작업
            const count = new Array(3).fill(0) ;

            return (
                <>
    
            {humans.map((item, index,) => {
                //  return<ListItem name = {item.name} age={item.age} job={item.job} />
                return<ListItem key={index} {...item} />    // 스프레드 사용
            })};
            
            {/* index는 사용하지 않으므로 지우고, 매개변수가 하나여서 매개변수 소괄호, return을 지운다 ,
            ...: 스프레드 사용 */}
            {humans.map(item => <ListItem key={item.name} {...item} /> )};
            {student.map(item => <ListItem key={item.name} {...item} /> )};
            {count.map( (item) => <h1 key={item}>반복 아이템</h1> ) }
            

        </>
    )

}
