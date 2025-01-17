import React, { useEffect, useState } from "react";
import "../style/ProfilePage.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL, IMAGE_LIST } from "../variable/constants";

import axios from "../../node_modules/axios/index";

const ProfilePage = () => {

  const isLoggedIn = useSelector((state) => state.loginState.user);
  const navigate = useNavigate();
  const [myname, setMyname] = useState();
  const [email, setEmail] = useState("");
  const [point, setPoint] = useState();
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const [emailVerification, setEmailVerification] = useState(email);
  const [verificationInput, setVerificationInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [imagePopup, setImagePopup] = useState(false);
  const [imgNum,setImgNum]=useState();
  const [newimgNum,setNewImgNum]=useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const imgList=IMAGE_LIST;
 

  useEffect(() => {


    //이름.이메일,이미지번호,포인트 받아오기
   const userInfo=async()=>{
    try{
        const rs=await axios.get(`${API_URL}/profile/mydata`,{ withCredentials: true })
        if (rs.status===200){
            setEmail(rs.data.email)
            setEmailVerification(rs.data.email)
      
            setMyname(rs.data.name)
            setPoint(rs.data.point)
            if(rs.data.imgId===null){
              setImgNum(0)
            }else{
              setImgNum(rs.data.imgId)
            }
            
        }
    }
    catch(error){
        console.log(error)
    }
   }

   if (!isLoggedIn) {
    navigate("/");
  }
  else{
    userInfo()
  }

  }, [isLoggedIn, navigate]);







  const handleNameChange = () => {
    setEditingName(true);
    setNewName(myname);
  };

  const handleNameSave = () => {
    if (newName.trim() === "") return alert("이름을 입력해주세요.");
    setMyname(newName);
    setEditingName(false);
  };



  const sendVerificationEmail = () => {
    if (emailVerification.trim() === "") return alert("이메일을 입력해주세요.");

    const rs = axios.get(
      `${API_URL}/profile/maile/check`,
      {
        params: { email: emailVerification }, // query string으로 전달
        withCredentials: true, // 쿠키 인증 활성화
      }
    );

    if(rs.status===200){
      console.log(rs)
      alert("인증 메일을 보냈습니다 확인해주세요")
    }
    setShowPopup(true); // 팝업 표시
  };

  const handleEmailVerification = async() => {
    const rs = await axios.get(
      `${API_URL}/profile/maile/code`,
      {
        params: { email: emailVerification }, // query string으로 전달
        withCredentials: true, // 쿠키 인증 활성화
      }
    );
    if (verificationInput === rs.data) {
      setEmail(emailVerification);
      alert("이메일 인증이 완료되었습니다!");
      setVerificationInput("");
      setShowPopup(false); // 팝업 닫기
    } else {
      alert("인증 코드가 올바르지 않습니다.");
    }
  };

  //이미지 수정 팝업
  const imagePopupShow=()=>{
    setImagePopup(true)
  }

  const handleImageClick = (index) => {
    setNewImgNum(index);
    setSelectedImageIndex(index);
  };

  const imagePopupShot=()=>{
    setImagePopup(false)
    setImgNum(newimgNum)
  }

  //회원정보 수정
  const profileModfiy=async()=>{
    if(emailVerification!=email){
      return alert("이메일을 인증해주세요")
    }

    const data = {
      email,
      imgId: imgNum,
      name: myname,
    };
    try{
    const rs=await axios.put(
      `${API_URL}/profile/update`,
      data,
      { 
        withCredentials: true, // 쿠키 인증 활성화
      }


    );
    if(rs.status===200){
      alert("수정완료")
    }
  }
  catch(error){
    console.log("프로필수정오류",error)
    alert("수정 실패 오류 발생")

  }
  

    

  }


  return (
    <div className="profile-page">
      <h1>마이페이지</h1>
      <div className="profile-container">
        <div className="profile-image-section">
          <img
            src={imgList[imgNum]}
            alt="프로필"
            className="profile-image"
          />
        </div>
        <button className="modify-button" onClick={imagePopupShow}>프로필 이미지 수정</button>
        <div className="profile-info">
          {/* 이름 수정 */}
          <div className="info-item">
            <span className="label">이름:</span>
            {editingName ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button className="save-button" onClick={handleNameSave}>
                  수정 완료
                </button>
              </>
            ) : (
              <>
                <span className="value">{myname}</span>
                <button className="modify-button" onClick={handleNameChange}>
                  이름 수정
                </button>
              </>
            )}
          </div>
          {/* 이메일 인증 */}
          <div className="info-item">
            <span className="label">이메일:</span>
            <input
              className="email-input"
              type="email"
              placeholder="새 이메일 입력"
              value={emailVerification}
              onChange={(e) => setEmailVerification(e.target.value)}
            />
            <button className="verify-button" onClick={sendVerificationEmail}>
              인증 번호 받기
            </button>
          </div>
          {/* 포인트 표시 */}
          <div className="info-item">
            <span className="label">포인트:</span>
            <span className="value">{point}</span>
          </div>
          {/* 회원 탈퇴 */}
          <button className="delete-button">회원 탈퇴</button>
          <button className="my-modify-button" onClick={profileModfiy}>수정 하기</button>
        </div>
      </div>

      {/* 팝업 */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>이메일 인증</h2>
            <input
              type="text"
              placeholder="인증 코드 입력"
              value={verificationInput}
              onChange={(e) => setVerificationInput(e.target.value)}
            />
            <div className="popup-buttons">
              <button
                className="verify-button"
                onClick={handleEmailVerification}
              >
                인증 완료
              </button>
              <button
                className="cancel-button"
                onClick={() => setShowPopup(false)}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      {/*이미지 수저 팝업 */}
      {imagePopup && (
        <div className="popup-overlay">
          <div className="popup-content">
          <div className="image-grid">
        {imgList.map((imageUrl, index) => (
          <div key={index}       className={`image-item ${selectedImageIndex === index ? 'selected' : ''}`} onClick={()=>handleImageClick(index)}>
            <img 
              src={imageUrl} 
              alt={`Image ${index + 1}`} 
            />
          </div>
        ))}
      </div>
            
          <div className="popup-buttons">
              <button
                className="verify-button"
                onClick={imagePopupShot}
              >
                선택완료
              </button>
              <button
                className="cancel-button"
                onClick={()=>setImagePopup(false)}
              >
                취소
              </button>
            </div>
          </div>
          </div>
   
      )}
    </div>
  );
};

export default ProfilePage;
