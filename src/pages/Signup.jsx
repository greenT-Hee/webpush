import styled from "styled-components";
import AuthBox from "../component/containers/AuthBox";
import {MAIN_BACKGROUND_COLOR, INACTIVE_INPUT_BORDER_COLOR, INACTIVE_INPUT_FONT_COLOR,ACTIVE_INPUT_COLOR,EMAIL_OPTION_HOVER_COLOR} from '../constants/color';
import {SAMLL_INPUT_SIZE} from '../constants/fontSize';
import logo from '../assets/images/logo.png';
import {CertificationButton,UnCertificationButton,SignupButton,BeforeSignupButton,} from "../component/buttons/AuthButtons";
import { useState } from "react";
import { useNavigate } from "react-router";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
  padding: 100px 0;
  font-family: 'Pretendard-Regular';
  /* padding: 186px 0; */
  background-color: ${MAIN_BACKGROUND_COLOR};
`

const WrapLogo = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`

const Logo = styled.img`
  width: 258px;
  height: 74px;
  `

const WrapContents = styled.div`
  width: 317px;
`
const InputAlign = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: ${(props) => (props.last ? "32px" : "12px")};
`

const Input = styled.input`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${INACTIVE_INPUT_BORDER_COLOR};
  color: ${INACTIVE_INPUT_FONT_COLOR};
`
const EmailInput = styled.input`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${INACTIVE_INPUT_BORDER_COLOR};
  color: ${INACTIVE_INPUT_FONT_COLOR};
  cursor: pointer;
`

const EmailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  padding: 14px;
  right: 90px;
  top: 55px;
  font-size: ${SAMLL_INPUT_SIZE};
  background-color: ${ACTIVE_INPUT_COLOR};
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  text-align: center;
  z-index: 5;
`

const EmailOptions = styled.li`
  padding: 5px;
  &:hover {
    border-radius: 5px;
    background: ${EMAIL_OPTION_HOVER_COLOR};
  }
`

//--------------로그인 페이지--------------------------
export default function Signup() {
  const navigate = useNavigate();
  const emailList = ["naver.com", "hanmail.net", "kakao.com", "gmail.com"] 
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [email, setEmail] = useState('')
  const handleOpenEmail = () => {
    !isOpenEmail ? setIsOpenEmail(true) : setIsOpenEmail(false);
  }

  const handleSelectEmail = (e) => {
    handleOpenEmail();
    setEmail(e.target.value);
    console.log(email);
  } 

  return (
    <Section>
      <h1 className="ir">회원가입</h1>
      <AuthBox>
        <WrapLogo>
          <Logo src={logo} alt="메인로고" />
          <p>DMPUSH와 함께 마케팅에 날개를 달아보세요!</p>
        </WrapLogo>
        <WrapContents>
          <form action="post">
            <InputAlign>
              <Input type="text" placeholder="아이디"/>
              <span>@</span>
              <EmailInput 
                type="text" 
                placeholder="이메일 선택" 
                readOnly 
                onClick={handleOpenEmail}
                value={email}
              />
              {isOpenEmail && 
                <EmailList>
                  {emailList.map((item, index)=>(
                    <EmailOptions key={index} onClick={handleSelectEmail}>
                      <button value={item}>{item}</button>
                    </EmailOptions>
                  ))}
                  <EmailOptions onClick={handleSelectEmail}>
                    <button value=''>직접입력</button>
                  </EmailOptions>
                </EmailList>
              }
              <UnCertificationButton>인증</UnCertificationButton>
            </InputAlign>
            <InputAlign>
              <Input type="text" placeholder="비밀번호"/>
            </InputAlign>
            <InputAlign>
              <Input type="text" placeholder="비밀번호 확인"/>
            </InputAlign>
            <InputAlign>
              <Input type="text" placeholder="이름(본인 성명)"/>
            </InputAlign>
            <InputAlign>
              <Input type="text" placeholder="휴대폰번호"/>
            </InputAlign>
            <InputAlign last>
              <Input type="text" placeholder="회사명"/>
            </InputAlign>
            <BeforeSignupButton type="submit">회원가입</BeforeSignupButton>
          </form>
        </WrapContents>
      </AuthBox>  
    </Section>
  )
}
