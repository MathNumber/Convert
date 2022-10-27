import './Convert.css'
import {useState} from 'react'
import React from 'react';
function App() {
  let output=0;
  const [input,setInput]=useState("")
  const [unit,setUnit]=useState("")
  const [con,setCon]=useState("")
  const [list,setList]=useState([])
  const handleOnClick1=(e)=>{
    setUnit(e.target.value)
  }
  const handleOnClick2=(e)=>{
    setCon(e.target.value)
  }
  const handleOnChange=(e)=>{
    setInput(e.target.value)
  }
  const handleDelete=()=>{
    setInput("")
  }
  const handleEnter=(e)=>{
    if (e.code ==='Enter'){
      handleAdd()
    }
  }
  const handleAdd=()=>{
    if (isNaN(+input)===true){
      setInput("");
      alert('Nhập lại')
    }  
    else{
     switch (unit){
       case 'Km': 
        if (con==='Km'){
             output =(+input+output)*1;
        }
        if (con==='Hm'){
           output =(+input+output)*10;
        }         
        if (con==='Dam'){
           output =(+input+output)*100;
        }
        if (con==='M'){
           output =(+input+output)*1000;
        }
        if (con==='Dm'){
           output =(+input+output)*10000;
        } 
        if (con==='Cm'){
           output =(+input+output)*100000;
        } 
        if (con==='Mm'){
             output =(+input+output)*1000000;
        }
        break;              
      case 'Hm': 
        if (con==='Km'){
            output =(+input+output)/10;
        }
          if (con==='Hm'){
           output =(+input+output)*1;
         }         
         if (con==='Dam'){
           output =(+input+output)*10;
         }
         if (con==='M'){
           output =(+input+output)*100;
         }
         if (con==='Dm'){
           output =(+input+output)*1000;
          } 
          if (con==='Cm'){
           output =(+input+output)*10000;
          } 
          if (con==='Mm'){
           output =(+input+output)*100000;
          } 
          break;
          case 'Dam': 
          if (con==='Km'){
              output =(+input+output)/100;
          }
          if (con==='Hm'){
           output =(+input+output)/10;
         }         
         if (con==='Dam'){
           output =(+input+output)*1;
         }
         if (con==='M'){
           output =(+input+output)*10;
         }
         if (con==='Dm'){
           output =(+input+output)*100;
          } 
          if (con==='Cm'){
           output =(+input+output)*1000;
          } 
          if (con==='Mm'){
           output =(+input+output)*10000;
          }
          break;
          case 'M': 
          if (con==='Km'){
              output =(+input+output)/1000;
          }
          if (con==='Hm'){
           output =(+input+output)/100;
         }         
         if (con==='Dam'){
           output =(+input+output)/10;
         }
         if (con==='M'){
           output =(+input+output)*1;
         }
         if (con==='Dm'){
           output =(+input+output)*10;
          } 
          if (con==='Cm'){
           output =(+input+output)*100;
          } 
          if (con==='Mm'){
           output =(+input+output)*1000;
          }
          break;  
          case 'Dm': 
          if (con==='Km'){
              output =(+input+output)/10000;
          }
          if (con==='Hm'){
           output =(+input+output)/1000;
         }         
         if (con==='Dam'){
           output =(+input+output)/100;
         }
         if (con==='M'){
           output =(+input+output)/10;
         }
         if (con==='Dm'){
           output =(+input+output)*1;
          } 
          if (con==='Cm'){
           output =(+input+output)*10;
          } 
          if (con==='Mm'){
           output =(+input+output)*100;
          }   
          break;
          case 'Cm': 
          if (con==='Km'){
              output =(+input+output)/100000;
          }
          if (con==='Hm'){
           output =(+input+output)/10000;
         }         
         if (con==='Dam'){
           output =(+input+output)/1000;
         }
         if (con==='M'){
           output =(+input+output)/100;
         }
         if (con==='Dm'){
           output =(+input+output)/10;
          } 
          if (con==='Cm'){
           output =(+input+output)*1;
          } 
          if (con==='Mm'){
           output =(+input+output)*10;
          } 
          break;
          case 'Mm': 
          if (con==='Km'){
              output =(+input+output)/1000000;
          }
          if (con==='Hm'){
           output =(+input+output)/100000;
         }         
         if (con==='Dam'){
           output =(+input+output)/10000;
         }
         if (con==='M'){
           output =(+input+output)/1000;
         }
         if (con==='Dm'){
           output =(+input+output)/100;
          } 
          if (con==='Cm'){
           output =(+input+output)/10;
          } 
          if (con==='Mm'){
           output =(+input+output)*1;
          } 
          break;               
     } 
    setList([input,unit,output,con])
  }
}
  return (
    <>
    <div id="head">
      <h2 className="convert__title">CHUYỂN ĐỔI ĐƠN VỊ CHIỀU DÀI</h2>
      <div id="limit"><select onChange={(e)=>handleOnClick1(e)} className='convert__select1'>
      <option></option>
      <option>Km</option>
      <option>Hm</option>
      <option>Dam</option>
      <option>M</option>
      <option>Dm</option>
      <option>Cm</option>
      <option>Mm</option>
      </select>
      <h3 className='to'>To</h3>
      <select onChange={(e)=>handleOnClick2(e)}  className='convert__select2'>
      <option></option>
      <option>Km</option>
      <option>Hm</option>
      <option>Dam</option>
      <option>M</option>
      <option>Dm</option>
      <option>Cm</option>
      <option>Mm</option>
      </select></div>
      <div id='disting'>
        <h3 className='disting1'>Input</h3>
        <h3 className='disting1'>Output</h3>
      </div>
      <div id="body"><input value={input} onKeyDown={(e)=>handleEnter(e)} type="text" placeholder='Value' onChange={(e)=>handleOnChange(e)} className="convert__input">
      </input>
      <a onClick={handleAdd} className="convert" href='#'>
        <span className='hi'></span>
        <span className='hi'></span>
        <span className='hi'></span>
        <span className='hi'></span>
        <tag className='look'>Convert</tag>
        <svg className='hidden' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
      </a>
      <input value={list[2]}  type="text" className="convert__output" ></input>
</div>
<div className='del'>
  <button onClick={handleDelete} className='hey'>
    <span className='icon'>
      <span className='top'></span>
      <span className='bottom'></span>
    </span>
    <span className='text'>DELETE</span>
      </button>
    </div>
</div>
    <input type="checkbox" id='Nav' class='Nav__input'></input>
    <label for='Nav' className='clock'>
    <svg xmlns="http://www.w3.org/2000/svg"  fill="black" className="hourglass" viewBox="0 0 16 16">
      <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
  </svg>
    </label>
  <div className='History'>
  <label for='Nav'><svg xmlns="http://www.w3.org/2000/svg"  fill="white" className="x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></label>
    <h1 className='History__title'>History</h1>
    <div className="History__chat">
    {list.map((list)=>(
        <p className='History__print'>
          {list}
        </p>
      ))}
      </div>
  </div>
</>
  
  );
}

export default App;
