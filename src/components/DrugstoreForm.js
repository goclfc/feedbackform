const DrugstoreForm = (props)=>{
    const handleProductClick = props.handleProductClick
    return (
        <div className="form w-full flex flex-col items-center m-2">
        <div className="question text-xl p-2">აირჩიეთ აფთიაქი</div>
        <div className="answer flex flex-col">
          <label>აფთიაქი</label>
    <input type='text' className="p-2 m-2 border-2 rounded-xl drop-shadow-xl text-black text-center" onChange={(e)=>console.log(e.target.value)}></input>
    <label > ვიზიტის დრო</label>
    <input type='text' className="p-2 m-2 border-2 rounded-xl drop-shadow-xl text-black text-center" onChange={(e)=>console.log(e.target.value)}></input>
    <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='კატეგორია' onClick={handleProductClick}>გაგრძელება</button>
  </div>
      </div>
    )
}
export default DrugstoreForm