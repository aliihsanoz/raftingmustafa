import React, { useState } from 'react';
function ExtremeTur() {
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
      imageName: require('./images/extreme1.jpg') 
    },
    { 
      imageId:2, 
      imageName: require('./images/extreme3.jpg')
    },
    { 
      imageId:3, 
      imageName: require('./images/extreme4.jpg')
    },
    { imageId:4, 
      imageName:  require('./images/extreme2.jpg') 
    }
     
  ];
  const [resimler, setResimler]=useState(categories);

  return (
    <div className='extremetur'>
      <div className='sol'>
          <h1>  :: Extreme Spor ::</h1>
          <h2>
          Extreme spor tutkunları için de çok farklı alternatifler sunuyoruz...

          </h2>
          <h2 className='satirKucuk'>
              Dalgalarla yarışmak için JET SKI
          </h2>
          <h2 className='satirKucuk'>
               Doğa macerasi için ATV motor safari
          </h2>

          <h2 className='satirKucuk'>
              Şehirden kaçmak için JEEP SAFARİ

          </h2>
          <h2 className='satirKucuk'>
              Kendine güvenenler için DENİZ KAYAĞI
          </h2>
          <h2 className='satirKucuk'>
            ve sayısız altenatif.......
          </h2>

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

export default ExtremeTur