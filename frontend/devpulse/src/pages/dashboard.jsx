import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard=()=>{
    const [Notifications,setNotifications]=useState([]);
    const navigate=useNavigate();

  const fetchNotifications=async()=>{
    try{
        const fakeData=[
            { _id:"1",title:"server update",body:"server restarted successfully",read:false},
            {_id:"2",title:"new message",body:"you have a new message from admin",read:true},
            {_id:"3",title:"reminder",body:"don't forget to complete your task",read:false}
        ];
        setNotifications(fakeData);
    }catch(err){
        alert("please login again");
        navigate("/Login")
    }
  };

  useEffect(()=>{
    fetchNotifications();
  },[]);

   
    return(
        <div className='p-8'>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <button  onClick={fetchNotifications}className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4'>
                Refresh Notification
            </button>
           
      {Notifications.map((note) => (
        <div
          key={note._id}
          className={`p-4 border rounded-lg mb-3 ${
            note.read ? "bg-white" : "bg-blue-50"
          }`}
        >
          <h3 className="font-semibold">{note.title}</h3>
          <p>{note.body}</p>
        </div>
          ))}
        </div>
    )
}

export default Dashboard;