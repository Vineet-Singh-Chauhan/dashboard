export const userCoulumns =[
    { field: 'id', headerName: 'ID', width: 70 },
   
    { field: 'user', headerName: 'User', width: 230 , renderCell:(params)=>{
        return(<div className="cellimg flex justify-center items-center gap-5 capitalize">
            <img src={params.row.img} alt="avatar" className="object-cover h-[32px] w-[32px] rounded-full"/>
            {params.row.username}
        </div>)
    }},
    {field:"email",headerName:"Email",width:230},
    {field:"age",headerName:"Age",width:100},
    {field:"status",headerName:"Status",width:160,
    renderCell:(params)=>{
        return(
            <div className={`p-1 rounded scellwithStatus ${params.row.status==="active"?"text-green-600 bg-green-200":"text-red-600 bg-red-300"}`}>
                {params.row.status}
            </div>
        )
    }},
]
