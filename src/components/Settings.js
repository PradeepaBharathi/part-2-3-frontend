import React, { useEffect, useState } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import './settings.css'
import { useDispatch, useSelector } from 'react-redux';
import { addApp, deleteApp, fetchAppAction } from './redux/action';
import { useNavigate } from 'react-router-dom';
function Settings() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const apps = useSelector((state) => state.app.app)
  const nav = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    link:""
  })
 const [selectedApp, setSelectedApp] = useState(null);
const handleChange = (e) => {
  const selectedAppName = e.target.value;
  const app = apps.find((app) => app.name === selectedAppName);
  if (app) {
    setFormData({
      name: app.name,
      img: app.img,
      link: app.link,
    });
    setSelectedApp(app);
    
  } else {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
};

 const handleDelete = async () => {
   try {
     if (!selectedApp) {
       alert("Please select an app to delete.");
       return;
     }
     await dispatch(deleteApp(selectedApp._id));
     alert("App deleted successfully!");
     nav("/");
   } catch (error) {
     alert("Failed to delete app. Please try again later.");
     console.error(error);
   }
 };

  
  const handleAdd = async (e) => {
  e.preventDefault();
  if (!formData.name || !formData.img || !formData.link) {
    alert("All fields are required.");
    return;
  }
    try {
      await dispatch(addApp(formData));
      alert("App added successfully!");
    

      setFormData({
        name: "",
        img: "",
        link: "",
      });
       nav("/");
    } catch (error) {
      alert("Failed to add app. Please try again later.");
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(fetchAppAction())
  },[])
  return (
    <div className="container">
      <div className="leftBox">
        <h1>Launcher</h1>
        <HomeIcon style={{ fontSize: 48 }} onClick={()=> nav("/")} />
      </div>
      <div className="right">
        <form className="app-form">
          <label htmlFor="app-name">Applications</label>
          <input
            list="app-names"
            id="app-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <datalist id="app-names">
            {/* Map over apps to generate options */}
            {apps.map((val) => (
              <option key={val._id} value={val.name} />
            ))}
          </datalist>
          <label htmlFor="app-img">Image</label>
          <input
            type="text"
            id="app-img"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
          <label htmlFor="app-url">URL</label>
          <input
            type="text"
            id="app-url"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
          <div className="btn-list">
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
            <button className="btn" onClick={handleDelete}>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings