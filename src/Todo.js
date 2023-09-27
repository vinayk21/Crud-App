
import React, { useEffect, useState } from "react";
import "./App.css";

const Todo = () => {
  const [text, settext] = useState("");
  const [add, setAdd] = useState([]);
  const [Togle, setTogle] = useState(true);
  const [Isedit,setIsedit] =useState(null)
  // useEffect(()=>{ console.log("log for add:",add);
  //  console.log("log for text:",text);},[add]);

  const changeHandler = (e) => {
    settext(e.target.value);
  };
  const addHandler = () => {
    if (!text) {
      alert("plz enter some text")
      }
      else if(text&&!Togle){
        setAdd(add.map((elem)=>{
          if(elem.id===Isedit){
            return {...elem,name:text}
          }
          return elem; 
        })) 
        settext("")
        setTogle(true)
      } 
    else {
      const allinputdata = { id: new Date().getTime().toString(), name: text };
      setAdd([...add, allinputdata]);
      settext("");
    }
  };
  const EditHandler = (elemidahiyalevu) => {
    console.log(elemidahiyalevu);
    let update = add.find((x) => {
      console.log("x", x);
      return x.id === elemidahiyalevu;
    });
    setTogle(false)
    settext(update.name)
    setIsedit(elemidahiyalevu);
  };
  function removeHandler(id) {
    console.log("id", id);
    const del = add.filter((kaipna) => {
      console.log("dsd", kaipna);
      return id !== kaipna.id;
    });
    setAdd(del);
  }

  return (
    <>
      <div className="main">
        <p className="prgp">
          <span className="paragraph">THIS IS OUR TODO APP</span>
        </p>
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        ></input>
        {Togle ? (
          <button className="btnadd" onClick={addHandler}>
            ADD
          </button>
        ) : (
          <button className="btnadd" onClick={addHandler}>
            Update
          </button>
        )}
      </div>
      <div>
        <div>
          {add.map((elem) => {
            console.log(elem.id);
            console.log(add);
            console.log("elem", elem.name);
            return (
              <div style={{ marginLeft: "653px" }}>
                <ol>
                  <li>
                    {elem.name}
                    <button onClick={() => EditHandler(elem.id)}>Edit</button>
                    <button onClick={() => removeHandler(elem.id)}>
                      Delete
                    </button>
                  </li>
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;