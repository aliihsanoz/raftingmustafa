import React, { useState } from 'react';
function KulturTur() {
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
      imageName: require('./images/kultur9.jpg') 
    },
    { 
      imageId:2, 
      imageName: require('./images/kultur2.jpg')
    },
    { 
      imageId:3, 
      imageName: require('./images/kultur3.jpg')
    },
    { imageId:4, 
      imageName:  require('./images/kultur4.jpg') 
    },
    { 
      imageId:5, 
      imageName: require('./images/kultur5.jpg') 
    },
    { 
      imageId:6, 
      imageName: require('./images/kultur6.jpg') 
    },
    { 
      imageId:7, 
      imageName: require('./images/kultur14.jpg')
    },
    { imageId:8, 
      imageName:  require('./images/kultur19.jpg') 
    }
     
  ];
  const [resimler, setResimler]=useState(categories);

  return (
    <div className='kulturtur'>
      <div className='sol'>
          <h1> :: Kültür Turları ::</h1>
          <h2>
          Antalya, Alanya, Sİde, Manavgat ve daha sayısız tatil beldemizin cennet köşelerini hatırlatan mekanlarına ulaşmak için turlarımıza katılabilirsiniz.
          </h2>
          <h2 className='satirYuksek'>Antalya tarihi çarşıları

Alanya turistik gezileri

Düden Şelalesi

Dim Çayı ve mağarası

Kurşunlu şelalesi

Apollon tapınağı

ve Sayısız alternatif....</h2>
      </div>
      <div className='sag'>
            { resimler.map(category => (
                 <div>
                    <h2 key={ category.imageId }>{ category.imageTitle }</h2>
                    <img key={ category.imageId } src={ category.imageName } className="" alt="" />
                </div>
              ))}
      </div>
    </div>
  )
}

export default KulturTur