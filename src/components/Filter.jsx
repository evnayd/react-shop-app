import React,  {useState} from 'react';
//import { useContext } from 'react';

const Filter =  ({handleClick}) => {
      
    const filterValues = [
        {
        title: 'New',
        name: 'new'
      },
      { 
        title: "Exclusive",
        name: 'exclusive'
      },
      {
        title: 'In stock',
        name: 'in_stock'
      },
      {
        title: "Sale",
        name: 'sale'
      },
    ]

    const [checkedFilter, setCheckedFilter] = useState('New');

   const getFilterValue = (data) => {
    setCheckedFilter(data)
    console.log('checkedFilter in filter component:', data)
    handleClick(data)
}

    return  (
        <div className='w-1/5'>
             {filterValues.map((filterValue, index) => {
                return  (
        <div className="radio"  
        key = {index}>
          <label className='flex'>
            <input
              type="radio"
              value={filterValue.title}
              name="choice"
              className='mr-2 toggle' 
              checked = {checkedFilter === filterValue.name}
              onChange={() => getFilterValue(filterValue.name)}
               />          
            <p className='mb-1 uppercase'>{filterValue.title}</p>
          </label>
        </div>
           )
        })}
        </div>         
    )
}




export default Filter;