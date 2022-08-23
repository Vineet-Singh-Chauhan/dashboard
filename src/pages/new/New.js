import React from 'react'
import { useState,useEffect } from 'react';

//components
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';


//firebase
import { doc, setDoc,serverTimestamp, addDoc, collection } from "firebase/firestore";
import { auth ,db , storage} from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

const New = ({inputs,title}) => {
  const [file,setFile] = useState("");
  const [data,setData] = useState({});
  const [per,setPer] = useState(null);
  const navigate = useNavigate();
  useEffect(
    ()=>{
      const uploadFile=()=>{
        const name = new Date().getTime()+file.name
        const storageRef = ref(storage, file.name);

        const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPer(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    alert(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    setData((prev)=>({...prev,img:downloadURL}))
    });
  }
);


      };
      file && uploadFile();
    },[file]
  );
  const handleInputs= (e)=>{
      const id = e.target.id;
      const value = e.target.value;
      setData({...data,[id]:value});
  }
  const handleAdd = async(e)=>{
    e.preventDefault();
try{
      const res = await createUserWithEmailAndPassword(auth,data.email,data.password)

    // Add a new document in collection "cities"
await setDoc(doc(db, "users",res.user.uid), {
  ...data,
  timeStamp:serverTimestamp()
});
navigate(-1)
  }catch(err){
  alert(err)
}
}
  console.log(file)
  return (
        <>
    <div className="flex w-full">
    <Sidebar/>
    <div className="newSection flex-[6] ">
      <Navbar/>
      <div className="top drop-shadow m-2 p-2 rounded  text-gray-500 font-bold">
        <h1>{title}</h1>
      </div>
      <div className="bottom  drop-shadow m-2 flex p-2">
        <div className="left flex-[1] flex justify-center items-center">
          <img className="h-[100px] w-[100px] rounded-full object-cover text-center" src={file?URL.createObjectURL(file):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} alt=""/>
        </div>
        <div className="right flex-[2]">
          <form onSubmit={handleAdd} className='flex flex-wrap gap-[20px] flex-col'>

          
          <div className="formInput w-100 flex gap-[20px] border-[0.5px] items-center p-2">
            <p >  Display Image :</p>
            <label htmlFor="file" className='  '><PublishOutlinedIcon className='icon cursor-pointer'/></label>

            <input type="file" id="file" className='hidden  flex-1' onChange={e=>setFile(e.target.files[0])} />
          </div>
          {inputs.map((input)=>(
            <div className="formInput w-100 flex gap-[20px] items-center p-2 border-[0.5px]" key={input.id}>
            <label className="flex-1">{input.label}</label>
            <input type={input.type} placeholder={input.placeholder} className="flex-[4] bg-transparent" id={input.id} onChange={handleInputs}/>
          </div>
          ))}
          
          <button disabled={per!==null && per<100} type="submit" className={` font-bold text-white w-fit py-2 px-10 rounded ${per!==null && per<100?"bg-blue-300 cursor-not-allowed":"bg-blue-700"}`}>Send</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default New