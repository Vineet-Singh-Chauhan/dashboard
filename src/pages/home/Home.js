import React from 'react'
//Components
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widget/Widgets';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/charts/Chart';
import Tablelist from '../../components/table/Tablelist';



const Home = () => {
  
  return (
    <>
    <div className="main flex ">
     
    <Sidebar/>
      
    <div className="main-section flex-auto w-3/5">
      <Navbar/>
      <div class="widgets flex flex-col md:flex-row p-3 gap-2">
        <Widgets type="user"/>
        <Widgets type="orders"/>
        <Widgets type="earning"/>
        <Widgets type="balance"/>
      </div>
      <div className="charts flex p-3 gap-[20px] flex-col md:flex-row ">
        <Featured/>
        <Chart aspect={2/1} title="Last 6 months revenue"/>
      </div>
      <div className="listContainer">
        <p className="title text-gray-700 font-bold text-2xl p-3">Projects</p>
        <Tablelist/>
      </div>
    </div>

    </div>
    </>
  )
}

export default Home