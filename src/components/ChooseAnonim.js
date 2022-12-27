const ChooseAnonim = (props)=>{
    const handleAnonimClick = props.handleAnonimClick
    return (
        <div className="form w-full flex flex-col items-center m-2 text-white">
        <div className="question text-xl p-2">აირჩიეთ ფორმა</div>
        <div className="answer">
          <button className="p-2 bg-light-red rounded-xl drop-shadow-xl text-white m-2" value='ანონიმური' onClick={handleAnonimClick}>ანონიმური</button> 
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='დამიკავშირდით' onClick={handleAnonimClick}>მსურს დამიკავშირდეთ</button>
        </div>
     </div>
    )
}
export default ChooseAnonim