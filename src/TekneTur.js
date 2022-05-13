import React, { useState } from 'react';
function TekneTur() {
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
      imageName: require('./images/tekne2.jpg') 
    },
    { 
      imageId:2, 
      imageName: require('./images/tekne8.jpg')
    },
    { 
      imageId:3, 
      imageName: require('./images/tekne9.jpg')
    },
    { imageId:4, 
      imageName:  require('./images/tekne1.jpg') 
    },
    { 
      imageId:5, 
      imageName: require('./images/tekne3.jpg') 
    },
    { 
      imageId:6, 
      imageName: require('./images/tekne7.jpg') 
    },
    { 
      imageId:7, 
      imageName: require('./images/tekne6.jpg')
    },
    { imageId:8, 
      imageName:  require('./images/tekne5.jpg') 
    }
     
  ];
  const [resimler, setResimler]=useState(categories);

  return (
    <div className='teknetur'>
      <div className='sol'>
          <h1> :: Tekne Turları ::</h1>
          <h2>
            Antalya ve Alanya bölgesinin inanılmaz doğa cennetleri koylarını, sahillerini ve kumsallarını görebilmek çok keyifli bir gün geçirmek için tekne turlarımıza katılabilirsiniz.

Turlarımız eğlence programlı ve yemeklidir. tam gün günlük turlara katılabilirsiniz veya özel programlarınız için bizimle irtibata geçebilirsiniz

ALARA II isimli 28,5 metrelik ahşap gullet ve son derece lüks teknemizle sizleri bekliyoruz..
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

export default TekneTur