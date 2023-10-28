import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Components/Cards';
import "./index.css";
import Hooks from './Components/Hooks';
import Fetchapidata from './Components/Fetchapidata';
ReactDOM.render(
  <>
  <Fetchapidata/>
  <Hooks/>
  <h1>This is my first project</h1>
  <div className='mainpart'>
  <Cards title = "First"
          imagesrc = "https://i.postimg.cc/FKmsj8xJ/IMG-1694182611371.jpg" alt="rendam-image"/>,
   <Cards title = "Second"
          imagesrc = "https://i.postimg.cc/59m5LWq8/IMG-20230226-082815-630.jpg" alt="rendam-image" />
       
   <Cards title = "Third"
          imagesrc = "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" alt="rendam-image"/>
       
   <Cards title = "Fourth"
          imagesrc = "https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg" alt="rendam-image"/>
       
   <Cards title = "Fifth"
          imagesrc = "https://i.ytimg.com/vi/AZsUzHeETFY/maxresdefault.jpg" alt="rendam-image"/>
       
   </div>

  </>,document.getElementById("root"));



