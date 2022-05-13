import React from 'react'

function About() {
  return (
    <div className='about'>
      <div className='sol'>
          <img src= {require('./images/mustafa.jpg')} alt="Rafting Mustafa Banner" />
      </div>
      <div className='sag'>
          <div className='about-header'>
              <h1>TÜRKİYE'NİN 1 NUMARALI TATİL ORGANİZASYONU !!!</h1>
              <h2>Dünyaca ünlü Köprülü Kanyon Milli Park' ta inanılmaz bir Rafting heyecanı size cazip geliyorsa...</h2>
              <h2>ALARA-I ve ALARA-II tekneleriyle unutamayacağınız bir mavi yolculuğa çıkmak istiyorsanız...</h2>
              <h2>Antalya ve Alanya' da, görmediğim doğa güzelliği ve tarihi mekan kalmasın diyorsanız...</h2>
              <h1>KISACASI HARİKA BİR TATİL İSTİYORSANIZ DOĞRU YERDESİNİZ !!!</h1>
          </div> 
          <div className='about-photo-wrapper'>
              <img src= {require('./images/hakkimizda1.jpg')} alt="Hakkımızda Fotoğraf - 1" />
              <img src= {require('./images/hakkimizda2.jpg')} alt="Hakkımızda Fotoğraf - 2" />
              <img src= {require('./images/hakkimizda3.jpg')} alt="Hakkımızda Fotoğraf - 3" />
          </div>
 
      </div> 
    </div>
  )
}

export default About