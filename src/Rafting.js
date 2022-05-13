import React, { useState } from 'react';
function Rafting() {
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
      imageName: require('./images/rafting1.jpg') 
    },
    { 
      imageId:2, 
      imageName: require('./images/rafting2.jpg')
    },
    { 
      imageId:3, 
      imageName: require('./images/rafting3.jpg')
    },
    { imageId:4, 
      imageName:  require('./images/rafting4.jpg') 
    },
    { 
      imageId:5, 
      imageName: require('./images/rafting5.jpg') 
    },
    { 
      imageId:6, 
      imageName: require('./images/rafting6.jpg') 
    },
    { 
      imageId:7, 
      imageName: require('./images/rafting7.jpg')
    },
    { imageId:8, 
      imageName:  require('./images/rafting8.jpg') 
    },    { 
      imageId:3, 
      imageName: require('./images/rafting9.jpg')
    },
    { imageId:4, 
      imageName:  require('./images/rafting10.jpg') 
    },
    { 
      imageId:5, 
      imageName: require('./images/rafting11.jpg') 
    },
    { 
      imageId:6, 
      imageName: require('./images/rafting12.jpg') 
    },
    { 
      imageId:7, 
      imageName: require('./images/rafting13.jpg')
    },
    { imageId:8, 
      imageName:  require('./images/rafting14.jpg') 
    }
     
  ];
  const [resimler, setResimler]=useState(categories);

  return (
    <div className='rafting'>
      <div className='sol'>
          <h1> :: Rafting Heyecanı ::</h1>
          <h2> TÜRKİYE'NİN 1 NUMARALI RAFTING ORGANİZASYONU !!!  </h2>
          <h2>
          Dünyaca ünlü Köprülü Kanyon Milli Park' ta inanılmaz bir heyecan yaşamaya ne dersiniz? Ünü ülkemizin sınırlarına
çıkan Rafting Mustafa ve profesyonel ekibi sizi doğayla ve bu heyecanla buluşturmak için bekliyor. Tüm yaz sezonu
boyunca hergün aralıksız rafting macerasına katılmak için
bize her an ulaşabilirsiniz. Ailenizle veya arkadaşlarınızla, şirket personelinizle birlikte grup rezervasyonları
yaptırabilirsiniz.
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

export default Rafting