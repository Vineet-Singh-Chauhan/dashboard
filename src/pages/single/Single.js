import React from 'react'
//components
import Sidebar from "../../components/sidebar/Sidebar.js"
import Navbar from "../../components/navbar/Navbar.js"
import Chart from '../../components/charts/Chart';
import Tablelist from '../../components/table/Tablelist';

const Single = () => {
  return (
    <>
    <div className='single flex w-full'>
      <Sidebar/>
    <div className="singlecontainer flex-[6] flex-wrap ">
      <Navbar/>
      <div className="top flex  p-3 gap-[20px] flex-col md:flex-row">
        <div className="left flex-[1] relative drop-shadow-lg bg-white px-3 py-2 rounded">
          <div className="editbtn absolute top-0 right-0 capitalize font-xs text-purple-700 rounded-bl rounded-tr cursor-pointer p-1 bg-purple-400">edit</div>
          <p className="title text-lg  font-bold text-gray-500 mb-5">Information</p>
          <div className="item flex gap-[20px]  ">
            <img alt="" className=' h-[100px] w-[100px] rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfF-B3UWX16v3M6L65H7AseW4qM89ZEKELDA&usqp=CAU" />
            <div className="details mb-5 ">
              <h1 className="itemTitle font-bold text-xl">
                  Jane Doe
              </h1>
              <div className="detailItem text-sm text-gray-700 mt-5 ">
                <span className="itemKey">
                  Email:
                </span>
                <span className="itemValue " >jane@gmail.com</span>
              </div>
              <div className="detailItem text-sm text-gray-700 mt-2">
                <span className="itemKey">
                  Phone:
                </span>
                <span className="itemValue">+91 9122334455</span>
              </div>
              <div className="detailItem text-sm text-gray-700 mt-2">
                <span className="itemKey">
                  Address:
                </span>
                <span className="itemValue">336, MG road , Delhi</span>
              </div>
              <div className="detailItem text-sm text-gray-700 mt-2">
                <span className="itemKey">
                  Country:
                </span>
                <span className="itemValue">India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-[2]"><Chart aspect={3/1} title="User Spendings (Last 6 months)"/></div>
        
      </div>
      <div className="bottom p-3 ">
        <p className="title text-lg  font-bold text-gray-500 mb-5">Last Transactions</p>
          <Tablelist/>
        </div>
    </div>
    </div>
     
    </>
  )
}

export default Single