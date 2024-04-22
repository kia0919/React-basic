import React from "react";
import EventComponent from "../../interaction/EventComponent";

//? InputBoxProps 인터페이스 속성 타입 지정
export interface InputBoxProps {
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    //!    ?은 선택적으로 받을 수 있음
    buttonTitle?: string;
}

//? InputBoxProps 속성을 받아옴, buttonTitle은 선택적으로 받아올 수 있음
export default function InputBox({ label, type, placeholder, buttonTitle }: InputBoxProps) {

    //! 화면에 표시할 랜더링
    return (
        <div className="input-box">
            {/*  EventComponent파일 가져옴. */}
            <EventComponent />
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input
                    className="input"
                    type={type}
                    placeholder={placeholder}
                />
                { buttonTitle && 
                <div className="input-disable-button">  
                    {buttonTitle}
                </div> 
                }
            </div>
            <div className="input-message"></div>
        </div>
    );
}