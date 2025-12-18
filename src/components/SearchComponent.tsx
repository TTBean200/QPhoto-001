import React, { useState } from "react";
import { ChangeEvent } from "react";
import { Button } from "@aws-amplify/ui-react";
import {ChildProps} from "./Types"


const SearchComponent: React.FC<ChildProps> = ({ onGetSearchCriteria }) => {

  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

    const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setStartDate(e.target.value)
    }; 

    const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setEndDate(e.target.value)
    }; 

    const resetForm = () => {
       setStartDate('');
       setEndDate('')
    };


  const triggerAction = (e:React.FormEvent) => {
    e.preventDefault();
    // Call the function passed from the parent, optionally passing data

    onGetSearchCriteria({startDate: startDate, endDate: endDate});
  };

  return (
    <form onSubmit={(e)=>triggerAction(e)} 
    style={{ marginLeft: '1em', marginBottom: '2em', display: 'flex', gap: '10px', alignItems: 'center' }}>
         
        <input
          type="date"
          name="startDate"
          id="searchStartDate"
          value={startDate}
          placeholder="start date"
          onChange={handleStartDateChange}
        />

        <input
          type="date"
          id="searchEndDate"
          name="endDate"
          value={ endDate }
          placeholder="end date"
          onChange={handleEndDateChange}
        />

        {/* Search Button */}
        <Button title="search photos based on creation dates" type="submit"  backgroundColor={"azure"} color={"#047D95"} >
          search
        </Button>

        {/* Reset Button */}
        <Button type="button" backgroundColor={"azure"} color={"#047D95"}  onClick={resetForm}>
          reset
        </Button>
    </form>
  );
};


export default SearchComponent;
