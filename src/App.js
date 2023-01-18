import React,{useState,useEffect} from "react";
import About from "./components/About";
import AgeForm from "./components/AgeForm";
import CallCenter from "./components/CallCenter";
import ChooseAnonim from "./components/ChooseAnonim";
import DrugstoreForm from "./components/DrugstoreForm";
import MoreInfo from "./components/MoreInfo";
import OnlineStore from "./components/OnlineStore";
import ProductForm from "./components/ProductForm";
import ServiceForm from "./components/ServiceForm";
import UserInfo from "./components/UserInfo";

function App() {
  const [showSelectForm,setShowSelectForm] = useState(true)
  const [showAgeForm,setShowAgeForm] = useState(false)
  const [showAbout,setShowAbout] = useState(false)
  const [showProductForm,setShowProductForm] = useState(false)
  const [showMoreInfo,setShowMoreInfo] = useState(false)
  const [showServiceForm,setShowServiceForm] = useState(false)
  const [showDrugstore,setShowDrugstore] = useState(false)
  const [showOnlinetore,setShowOnlinestore] = useState(false)
  const [showCallcenter,setShowCallcenter] = useState(false)
  const [showUserInfo,setShowUserInfo] = useState(false)
  const [isAnonim,setIsAnonim]=useState(false)
  const [howToContact,setHowToContact]=useState('')
  const [contactInfo,setContactInfo]=useState('')
  const [userAge,SetUserAge]=useState('')
  const [formAbout,setFormAbout]=useState('')
  const [brandName,setBrandName]=useState('')
  const [message,setMessage]=useState('')
  const [drugStoreInfo,setDrugstoreInfo]=useState('')
  const [visitTime,setVisitTime]=useState('')
  const [success,setSuccess]=useState(false)
  const handleAnonimClick = (e)=>{
    if(e.target.value ==='ანონიმური'){
      setShowSelectForm(false)
      setShowAgeForm(true)
      setIsAnonim(true)
    }else {
      setShowSelectForm(false)
      setShowUserInfo(true)
    }
  }
  const handleAnonimBackClick=()=>{
    setShowSelectForm(true)
    setShowAgeForm(false)
    setShowUserInfo(false)
  }
  const handleUserInfo=()=>{
    setShowUserInfo(false)
    setShowAgeForm(true)
  }
  const handleAgeClick = (e)=>{
    SetUserAge(e.target.value)
    setShowAgeForm(false)
    setShowAbout(true)
  }
  const handleSkipClick = ()=>{
    setShowAgeForm(false)
    setShowAbout(true)
  }
  const handleAboutClick = (e)=>{
    console.log(e.target.value)
    setShowAbout(false)
    if(e.target.value==='პროდუქცია'){

      setShowProductForm(true)
      setFormAbout('პროდუქცია')
    }else if(e.target.value==='მომსახურება'){
      setShowServiceForm(true)
      setFormAbout('მომსახურება')
    }else if(e.target.value==='ვებ-გვერდი'){
      setFormAbout('ვებ გვერდი')

    }else if(e.target.value==='სხვა'){
      setFormAbout('სხვა')
    }
  }
  const handleAboutBackClick = ()=>{
    setShowAbout(false)
    setShowAgeForm(true)
  }
  const handleBClick = ()=>{
    setShowAbout(true)
    setShowProductForm(false)
  }
  const handleServiceClick = (e)=>{
    setShowServiceForm(false)
    if(e.target.value==='სააფთიაქო სერვისი'){      
      setShowDrugstore(true)
      setFormAbout('სააფთიაქო სერვისი')
    }else if(e.target.value==='ონლაინ გაყიდვები'){
      setShowOnlinestore(true)
      setFormAbout('ონლაინ გაყიდვები')
    }else if(e.target.value==='ქოლ ცენტრი'){
      setShowCallcenter(true)
      setFormAbout('ქოლ ცენტრი')
    }
  }
  const handleProductClick =(e)=>{
    setShowDrugstore(false)
    setShowProductForm(false)
    setShowMoreInfo(true)
  }
  const sendForm =()=>{
    const dt = {
      anonim:isAnonim,
      howToContact:howToContact,
      contactInfo:contactInfo,
      userAge:userAge,
      formAbout:formAbout,
      brandName:brandName,
      message:message,
      visitTime:visitTime,
      drugStoreInfo:drugStoreInfo
    }
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(dt)

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

  fetch("https://feedbackform.herokuapp.com/fdbck", requestOptions)
  .then(response => response.text())
  .then(result => {
    setShowMoreInfo(false)
    setSuccess(true)
  })
  .catch(error => console.log('error', error)); 
  }

  return (
    <div className="wrapper w-full h-screen bg-white flex flex-wrap justify-center bg-niceBg p-4">
      <div className="w-full flex flex-col items-center drop-shadow-xl rounded-xl bg-readableBg lg:w-2/3 "> 
      <div className="header flex w-full justify-center m-2 p-2">
        <h1 className="text-3xl text-white">საკონტაქტო ფორმა</h1>
      </div>
      <div className="header flex w-full justify-center m-2 p-2">
        <h2 className="text-2xl text-white">მადლობას გიხდით უკუკავშირისთვის</h2>
      </div>
      <div className="header flex w-full justify-center m-2 p-2">
        <h2 className="text-2xl text-white">გთხოვთ, შეავსეთ ფორმა</h2>
      </div>
      <div className='form bg-formBg text-white  rounded-xl m-2 p-2'>
      {showSelectForm && <ChooseAnonim handleAnonimClick={handleAnonimClick} back={handleAnonimBackClick}/> }
      {showUserInfo && <UserInfo handleUserInfo={handleUserInfo} setHowToContact={setHowToContact} setContactInfo={setContactInfo} back={handleAnonimBackClick}/>}
      {showAgeForm && <AgeForm handleAgeClick={handleAgeClick} handleSkipClick={handleSkipClick} back={handleAnonimBackClick}/>}
      {showAbout && <About handleAboutClick={handleAboutClick} setShowMoreInfo={setShowMoreInfo} setShowAbout={setShowAbout} setFormAbout={setFormAbout} back={handleAboutBackClick}/>}
      {showProductForm && <ProductForm handleProductClick={handleProductClick} setBrandName={setBrandName} back={handleBClick}/>}
      {showServiceForm && <ServiceForm handleServiceClick ={handleServiceClick}/> }
      {showDrugstore&& <DrugstoreForm handleProductClick={handleProductClick} setDrugstoreInfo={setDrugstoreInfo} setVisitTime={setVisitTime}/>}
      {showOnlinetore&& <OnlineStore setShowMoreInfo={setShowMoreInfo}/>}
      {showCallcenter&& <CallCenter />   }
      {showMoreInfo && <MoreInfo setMessage={setMessage} sendForm={sendForm}/>
      }
      {success&&
      <div className="p-2 top-0 bottom-0 flex items-center rounded-xl">
        შეტყობინება გაიზგავნა. მადლობას გიხდით უკუკავშირისთვის
        </div>}
       </div>
      </div>
    </div>
  );
}

export default App;
