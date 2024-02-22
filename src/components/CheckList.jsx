import React, { useState } from 'react'

const CheckList = () => {
    const [checkedItems , setCheckedItems] = useState({});
    const handleCheckBox = (event) =>{
        const {name,checked} = event.target;

        setCheckedItems({
            ...checkedItems,
            [name]: checked
        })
    };

  return (
    <div>
      <h1>CheckList</h1>
      <form>
       <label>
        <input type="checkbox" name='option1' checked = {checkedItems.option1 || false} onChange={handleCheckBox} />
        Option 1
       </label>
       <br />
       <label>
        <input type="checkbox" name='option2' checked = {checkedItems.option2 || false} onChange={handleCheckBox} />
        Option 2
       </label>
       <br />
       <label>
        <input type="checkbox" name='option3' checked = {checkedItems.option3 || false} onChange={handleCheckBox} />
        Option 3
       </label>
       <br />
       <label>
        <input type="checkbox" name='option4' checked = {checkedItems.option4 || false} onChange={handleCheckBox} />
        Option 4
       </label>
       <br />
      </form>

      <h3>Selected Option</h3>
      <ul>
        {Object.entries(checkedItems).map(([item, index]) =>{
          index && <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default CheckList
