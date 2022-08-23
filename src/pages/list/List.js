import React from 'react'
import Datatablelist from '../../components/datatable/Datatablelist'
//components
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'



const List = () => {
  return (
    <>
    <div className="list  flex w-full">
      <Sidebar/>
      <div className="listContainer flex-[6]">
      <Navbar/>
      <Datatablelist/>
      </div>
    </div>
    </>
  )
}

export default List