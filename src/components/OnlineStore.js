const OnlineStore = (props)=>{
  const setShowMoreInfo = props.setShowMoreInfo
  const handleClick = (e)=>{
    console.log(e.target.value)
    setShowMoreInfo(true)
  }
  return (  

    <div className="form w-full flex flex-col items-center m-2">
    <div className="question text-xl p-2 text-white">უფრო კონკრეტულად?</div>
    <div className="answer">
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='შეკვეთები' onClick={handleClick}>შეკვეთებთან დაკავშირებით</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='მიწოდება' onClick={handleClick}>მიწოდებასთან დაკავშირებით</button>
    </div>
  </div>
  )
}
export default OnlineStore