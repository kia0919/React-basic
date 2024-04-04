
import React from 'react'

export default function CurlyBraces() {

    // CurlyBraces:
    // - JSX에서 자바스크립트를 작성하는 방법
    // - JSX 안에 {  }로 영역을 지정하고 그 안에 자바스크립트를  작성

    const title = 'Curly Braces';

    // 1. 요소의 컨텐츠에 자바스크립트 표현식을 쓰고자할 때
    // 2. 주석 처리 - JSX에서는 HTML이 아니라 HTML 주석이 적용 X(<!-- -->이 안됨)
    // 3. JSX에서 속성을 스타일을 인라인 스타일로 지정할 때
    //      - JSX에서는 인라인 스타일을 문자열로 표현 X, 객체로 표현
    //      - style 지정시 {  }로 Curly Braces를 지정하는것이고 안에 {  }를 하나 더하여 객체를 표현하여 스타일 지정한다.

// JSX
  return (
    // 10 + 20 title에 { } 하지 않으면 일반 text로 인식됨. 연산이 되지 않음 
    <div style={{ color: 'red' }}>{10 + 20} {title}</div>    
  )
}
