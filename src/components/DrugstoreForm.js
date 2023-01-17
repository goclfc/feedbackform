import React, { useState } from "react";
import { drugstores } from "../drugstores";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
const DrugstoreForm = (props) => {
  const handleProductClick = props.handleProductClick;
  const setDrugstoreInfo = props.setDrugstoreInfo;
  const setVisitTime = props.setVisitTime;
  const [sugestions, setSugestions] = useState([]);
  const [region, setRegion] = useState("");
  const [userInputRegion, setUserInputRegion] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showDrugstorePicker,setShowDrugstorePicker]=useState(true)
  const [showTimePicker,setShowTimePicker]=useState(false)
  const [value, setValue] = React.useState(dayjs('2023-01-17'));
  const [showNext,setShowNext]=useState(false)
  function BasicDateTimePicker() {
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker className="bg-white rounded-xl"
          renderInput={(props) => <TextField {...props} />}
        
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setShowNext(true)
          }}
        />
      </LocalizationProvider>
    );
  }
  const regions = [];
  drugstores.forEach((item) => {
    if (!regions.includes(item.region)) {
      regions.push(item.region);
    }
  });
  const handleRegion = (e) => {
    setRegion([])
    setUserInputRegion(e.target.value);
    console.log(e.target.value.length);
    if (e.target.value.length > 3) {
      console.log(e.target.value);
      drugstores.forEach((item) => {
        if (item.name.includes(e.target.value)||item.region.includes(e.target.value)||item.adressGe.includes(e.target.value)||item.oldName.includes(e.target.value)) {
          setRegion(prevState=>[...prevState,item]);
        }
      });
    }else {
      setRegion([])
    }
  };
  const handleSelectRegion = (item) => {
    setSelectedRegion(item);
    setShowDrugstorePicker(false)
    setShowTimePicker(true)
  };
  console.log(selectedRegion);
  return (
    <div className="form w-full flex flex-col items-center m-2">
      <div className="answer flex flex-col">
        {showDrugstorePicker && 
          <div className="flex flex-col items-center">
            <div className="question text-xl p-2">აირჩიეთ აფთიაქი</div>
        <label>მიუთეთეთ აფთიაქის მისამართი, უბანი ან რეგიონი</label>
        <input
          type="text"
          className="p-2 m-2 border-2 rounded-xl drop-shadow-xl text-black text-center"
          onChange={handleRegion}
        ></input>
        {region.length>0 && (
          <ul className="bg-white text-black p-2 rounded-xl">
            {region.map((item) => (
              <li
                className="cursor-pointer text-center"
                value={item.name}
                key={item.name}
                onClick={() => handleSelectRegion(item)}
              >
                {item.name} :{item.adressGe}
              </li>
            ))}
          </ul>
        )}

          </div>
        }
        {showTimePicker && 
          <div className="flex flex-col items-center">
            <div className="p-2 m-2">აფთიაქი : {selectedRegion.name}</div>
            <label className="p-2 m-2"> აირჩიეთ ვიზიტის დრო </label>
      <BasicDateTimePicker/>

            </div>
        }
        {showNext&& 
        <button
          className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2"
          value="კატეგორია"
          onClick={handleProductClick}
        >
          გაგრძელება
        </button>
        }
      </div>
    </div>
  );
};
export default DrugstoreForm;
