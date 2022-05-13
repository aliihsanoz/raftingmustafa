import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <div className='sol'>
          <img src= {require('./images/mustafa.jpg')} alt="Rafting Mustafa Banner" />
      </div>
      <div className='sag'>
          <div className='contact-header'>
              <h1>:: Bize Dünya' nın heryerinden ulaşabilirsiniz ::</h1>
              <h2>ALARA YATÇILIK TURİZM LTD. ŞTİ.AAMUSTAFA ŞİT SUNGUR</h2>
              <h2>Köprülü Kanyon / Beşkonak / Manavgat / ANTALYA</h2>
              <h2>
                Tel: +90 242 765 33 71<br/>
                Fax:+90 242 765 33 70<br/>
                Gsm: 0532 286 63 69 - 0544 868 63 69<br/>
                E-mail: mail@rafting_mustafa.com<br/>
                Web: www.raftingmustafa.com
            </h2>

          </div> 
          <div className='contact-photo-wrapper'>
              <img src= {require('./images/hakkimizda1.jpg')} alt="Hakkımızda Fotoğraf - 1" />
              <img src= {require('./images/hakkimizda2.jpg')} alt="Hakkımızda Fotoğraf - 2" />
              <img src= {require('./images/hakkimizda3.jpg')} alt="Hakkımızda Fotoğraf - 3" />
          </div>

      </div> 
  </div>
  )
}

export default Contact