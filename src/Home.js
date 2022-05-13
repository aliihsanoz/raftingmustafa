import React, { useState } from 'react'
import { Routes, Route, Link, NavLink } from "react-router-dom";
function Home() {
 
  // const [resimler, setResimler]=useState(
  //   {
  //     categories : [
  //       { imageId:1, imageTitle:"::Rafting Heyecanı::", imageName: require('./images/raftingana.jpg') },
  //       { imageId:2, imageTitle:"::Tekne Turları::", imageName: "tekneana" },
  //       { imageId:3, imageTitle:"::Kültür Turları::", imageName: "kulturana" },
  //       { imageId:4, imageTitle:"::Extreme Sporlar::", imageName: "extremana" }
  //     ]
  //   });
  const  categories= [
    { 
      imageId:1, 
      imageTitle:"::Rafting Heyecanı::", 
      imageDescription:"Türkiyenin 1 Numaralı Rafting Organizasyonu !!!",
      imageLink:"/rafting",
      imageName: require('./images/raftingana.jpg') 
    },
    { 
      imageId:2, 
      imageTitle:"::Tekne Turları::",
      imageDescription:"Antalya ve Alanya bölgesinin inanılmaz doğa cennetleri koylarını...", 
      imageLink:"/teknetur",
      imageName: require('./images/tekneana.jpg') },
    { 
      imageId:3, 
      imageTitle:"::Kültür Turları::", 
      imageDescription:"Antalya, Alanya, Sİde, Manavgat ve daha sayısız tatil beldemizin cennet köşelerini...",
      imageLink:"/kulturtur",
      imageName: require('./images/kulturana.jpg')
    },
    { imageId:4, 
      imageTitle:"::Extreme Sporlar::", 
      imageDescription:"Extreme spor tutkunları için de çok farklı alternatifler sunuyoruz...",
      imageLink:"/extremetur",
      imageName:  require('./images/extremana.jpg') 
    }
     
  ];
  const [resimler, setResimler]=useState(categories);

  return (
    <div className='home'>
      <div className='sol'>
          <img src= {require('./images/mustafa.jpg')} alt="Rafting Mustafa Banner" />
      </div>
      <div className='sag'>
            { resimler.map(category => (
                 <div>
                    <NavLink className="turlar" to={category.imageLink}>
                    <h2 key={ category.imageId }  >{ category.imageTitle }</h2>
                    <img key={ category.imageId } src={ category.imageName } className="" alt="" />
                    <p key={ category.imageId }>
                    { category.imageDescription }
                    </p>
                    
                    </NavLink>  
                </div>
              ))}
      </div>

      {/* <div className='sag'>
          <div className='raftingeheyecan'>
              <h2>::Rafting Heyecanı::</h2>
              <img src= {require('./images/raftingana.jpg')} alt="Rafting Heyecanı" />
          </div> 
          <div className='teknetur'>
              <h2>::Tekne Turları ::</h2>
              <img src= {require('./images/tekneana.jpg')} alt="Tekne Turları" />
          </div> 
          <div className='kulturtur'>
              <h2>:: Kültür Turları ::</h2>
              <img src= {require('./images/kulturana.jpg')} alt="Kültür Turları" />
          </div> 
          <div className='extremetur'>
              <h2>::Extreme Sporlar::</h2>
              <img src= {require('./images/extremana.jpg')} alt="Extreme Sporlarr" />
          </div> 
      </div>  */}
    </div>
  )
}

export default Home