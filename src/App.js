import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const initialState = {
    title: "",
    isComplete: false,
  };


  // const [inputValue, setInputValue] = useState("") //string, number, null, boolean, array, object
  const [store, setStore] = useState([]) //string, number, null, boolean, array, object
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")

  const onSubmit = () => {
    const data = {
      title,
      subTitle
    }
    setStore([...store, data])
    setTitle("")
    setSubTitle("")
  }

  console.log(store, "dattaa");

  // step 1 : create input field
  // step 2 : create useState for input field state initial value must be string or udefined
  // step 3 : need to set onChange event in your input field 
  // step 4 : you get an event from onChange then you need to set into the your useState with the
  //  help of setInput field method
  // step 5 : then we get in title variable title:"abcd"
  // step 6 : with the help of onClick function we can set in store state then show by store variable



  return (
    <>
      <input
        type='text'
        placeholder='enter your text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='enter your text'
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
      />
      <button onClick={onSubmit}>Save</button>
      {store?.map((ele) => {
        return (
          <>
            <li>title : {ele.title}</li>
            <li>subtitle : {ele.subTitle}</li>
          </>
        )
      })}
    </>
  );
}

export default App;
