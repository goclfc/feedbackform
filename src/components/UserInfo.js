import React,{useState} from "react";
const UserInfo = (props)=>{
    const handleUserInfo = props.handleUserInfo
    const [showSms,setShowSms] = useState(false)
    const [showCall,setShowCall] = useState(false)
    const [showEmail,setShowEmail] = useState(false)
    const [showNext,setShowNext]=useState(false)
    const setHowToContact = props.setHowToContact
    const setContactInfo = props.setContactInfo
    const handleSmsClick = (e)=>{
        setHowToContact('sms')
        setShowSms(true)
        setShowCall(false)
        setShowEmail(false)
    }
    const saveNumber = (e)=>{
        if(e.target.value.length===9){
            setShowNext(true)
            setContactInfo(e.target.value)
        }else(setShowNext(false))
    }
    const handleCallClick = ()=>{
        setHowToContact('Call')
        setShowSms(false)
        setShowCall(true)
        setShowEmail(false)
    }
    const handleEmailClick = ()=>{
        setHowToContact('Email')
        setShowSms(false)
        setShowCall(false)
        setShowEmail(true)
    }
    const saveEmail = (e)=>{
        if(e.target.value.length>5){
            setShowNext(true)
            setContactInfo(e.target.value)
        }else(setShowNext(false))
    }
    const next = ()=>{
        handleUserInfo()
    }

    return (
        <div>
        <div>
            <div> როგორ გსურთ დაგიკავშირდეთ?</div>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={handleSmsClick}>სმს</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={handleCallClick}>დარეკვა</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={handleEmailClick}>მეილი</button>
        </div>
        {showSms && 
        <div className='flex flex-col m-2'>
            <label className='m-2'>შეიყვანეთ თქვენი ნომერი</label>
            <input type='phone' placeholder='თქვენი ნომერი' className='p-2 rounded-xl text-black text-center' onChange={saveNumber}></input>
            {showNext&&
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={next}>გაგრძელება</button>
            }
        </div>
            }
        {showCall &&        
         <div className='flex flex-col m-2'>
            <label className='m-2'>შეიყვანეთ თქვენი ნომერი</label>
            <input type='phone' placeholder='თქვენი ნომერი' className='p-2 rounded-xl text-black text-center' onChange={saveNumber}></input>
     
            {showNext&&
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={next}>გაგრძელება</button>
            }
        </div>}
        {showEmail && 
        <div className='flex flex-col m-2'>
            <label className='m-2'>შეიყვანეთ თქვენი ნომერი</label>
            <input type='email' placeholder='თქვენი მეილი' className='p-2 rounded-xl text-black text-center' onChange={saveEmail}></input>
            {showNext&&
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={next}>გაგრძელება</button>
            }
        </div>}
        
        </div>
    )
}
export default UserInfo

