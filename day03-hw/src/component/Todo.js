import React, { useState } from "react";

//class Todo extends React.Component
 function Todo(){
    
   const[count,setCount] =useState([0]);

  const [inputList, setInputList] = useState([{do:''}]);
 

  const handleInputChange = (e, index) => {
     
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    
  };


const handleRemoveClick =index=>{
    const List=[...inputList];
    List.splice(index,1)
    setInputList(List );
}


const handleAddClick=()=>{
       
  setCount(count.concat({id:count.length,count1:0}))
    setInputList([...inputList,{do:''}])

    

}

 
function addCount(id){
  setCount(count.map((e)=>{

if(e.id===id)
{
  e.count1++;
}
return e
  }))
}

function subCount(id){

  setCount(count.map((e) => {

if(e.id === id)
{
  e.count1--;
}
return e;
  })
  )
}
 

  return (


    <div className="App">
       <h2>Todo</h2>
      {inputList.map((x, i) => {
        return (
          <div className="box">

          <label>
          <hr/>
          <h3> What needs to be done ?</h3>
             
            <input
              name="do"
              value={x.do}
              placeholder='Enter your work..'
              onChange={e =>  handleInputChange(e,i)}
            />
            </label>
            <div className="btn-box">
            
            { inputList.length- 1  === i &&
            <button className='add' 
            onClick={()=>handleAddClick()}>Add</button>}
            
              
              { <button className="rem" 
           onClick={()=>handleRemoveClick(i)}>Remove</button>}
               
               
             {<button onClick={()=>addCount(i)} >+</button>}
                <span>{count[i].count1}</span>
            {<button onClick={()=>subCount(i)}>-</button>}
            </div>
          </div>
        );
      })}

    {/* <div style={{ marginTop: 30 }}>{JSON.stringify(inputList)}  </div>
     */}
    
    </div>
  );
}
     
  

export default Todo;
 
 