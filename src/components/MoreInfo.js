const MoreInfo = (props)=>{
  const setMessage = props.setMessage
  const sendForm=props.sendForm
  const saveMessage = (e)=>{
    setMessage(e.target.value)
  }
    return (
        <div className="form w-full flex flex-col items-center p-2">
        <div className="question text-xl p-2">მოგვწერეთ მეტი ინფორმაცია</div>
        <div className="answer flex flex-col w-full items-center">
          <textarea className="w-full h-60 rounded-xl drop-shadow-xl p-2 bg-readableBg border-2" onChange={saveMessage}></textarea>
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" onClick={sendForm} >გაგზავნა</button>
        </div>
      </div>
    )
}
export default MoreInfo