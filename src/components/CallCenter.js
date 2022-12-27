const CallCenter = ()=>{
    return (
      <div className="form w-full flex flex-col items-center m-2">
      <div className="question text-xl p-2 text-white">უფრო კონკრეტულად?</div>
      <div className="answer">
              <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი'>ვერ დაგიკავშირდით</button>
              <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი'>მომსახურების ხარისხი</button>
      </div>
    </div>
    )
}
export default CallCenter