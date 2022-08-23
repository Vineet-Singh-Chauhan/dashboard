import React, { useState,useEffect} from 'react'
//router
import { Link } from 'react-router-dom';
//datatable

import { DataGrid } from '@mui/x-data-grid';
//tempdata
import { userCoulumns} from '../../assets/datasources/datatablesource';

//firebase
import { collection, getDocs,deleteDoc,doc ,onSnapshot  } from "firebase/firestore";
import { db } from '../../firebase/firebase';


const Datatablelist = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{

    //realTime updates
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc)=>{
        list.push({id: doc.id,...doc.data()});
      })
      setData(list)
  },(error)=>{
    alert(error)
  });
  return()=>{
    unsub();
  };

  },[]);
  const handleDelete = async(id)=>{
    try{
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item)=>item.id!==id))
    }catch(err){

    }
  }
  const actionColumn = [
    {field:"action", headerName:"Action", width:200,renderCell:(params)=>{
      return(
        <div className='cellaction flex items-center gap-[15px]'>
          <Link to="/users/test">
          <div className="viewButton py-1 px-2 rounded  border-2 text-blue-600 border-sky-600 cursor-pointer ">View</div>
          </Link>
          <div className="deleteButton py-1 px-2 rounded  border-2 text-red-600 border-red-600 cursor-pointer " onClick={()=>handleDelete(params.row.id)}>Delete</div>
        </div>
      ) 
    }}
   
  ]
  return (
    <div className=" text-gray-600 h-[80%]">
      <div style={{  width: '100%',  }} className="h-full">
      <div className="datatableTitle flex p-2 items-center justify-end font-bold text-gray-600">
        
        <Link to="/users/new" className="decoration-none text-green-700 bg-green-200 p-2 border-emerald-500 border-2 rounded font-bold">
          Add New
        </Link>
      </div>
      <DataGrid
      className='datagrid text-gray-600 bg-white m-2 rounded '
        rows={data}
        columns={userCoulumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection />
      </div>
    </div>
    
    

  )
}

export default Datatablelist