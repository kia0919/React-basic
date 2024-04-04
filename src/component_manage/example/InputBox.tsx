import React from 'react'

export function IdInputBox() {

const label = '이메일';
const type = 'text';
const placeholder = '이메일을 입력해주세요.';
const button = '이메일 인증'

return (
  <div className="input-box">
      <div className="input-label label">{label}</div>
      <div className="input-content-box">
          <input className="input" type={type} placeholder={placeholder} />
      </div>
      <div className="input-message"></div>
  </div>
);

}

interface Props {
  label: string;
  type: 'text' | 'password';
  placeholder: string;
  button: string;
}

export default function InputBox({ label, type, placeholder, button}: Props) {
  return (
    <div className="input-box">
    <div className="input-label label">{label}</div>
    <div className="input-content-box">
        <input className="input" type={type} placeholder={placeholder} />
        <div className="input-disable-button">{button}</div>
    </div>
    <div className="input-message"></div>
</div>
  )
}
