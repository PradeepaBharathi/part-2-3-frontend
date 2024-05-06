import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppAction } from './redux/action';
function Home() {
    const [app, setApp] = useState([])
  const nav = useNavigate()
  
  const dispatch = useDispatch()
  const apps = useSelector((state) => state.app.app)

  useEffect(() => {
    dispatch(fetchAppAction())
  },[])
  console.log(apps)
  
       const launchApplication = async (link) => {
           try {
             console.log(link)
           await axios.post("https://op2.onrender.com/app/launch", { link });
               console.log("Application launched successfully!");
               window.open(link, "_blank");
               nav("/loading")
         } catch (error) {
           console.error("Error launching application:", error);
         }
       };
   
  return (
    <div className="container">
      <div className="leftBox">
        <h1>Launcher</h1>
        <SettingsApplicationsIcon style={{ fontSize: 48 }} onClick={() => { nav("/settings") }} />
      </div>
          <div className="rightBox">
              <div className='card'>
                  {
                      apps.map((val) => {
                          return (
                              <div key={val._id} onClick={() => launchApplication(val.link)}>
                              <img
                                src={val.img}
                                alt="app-img"
                                className="app-img"
                              />
                              <h3>{val.name}</h3>
                            </div>
                          );
                      })
                  }
              </div>
      </div>
    </div>
  );
}

export default Home