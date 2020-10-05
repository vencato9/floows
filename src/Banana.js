import React from 'react';
import logo from './logo.svg';
import avant from './img/avant.png';
import natal from './img/natal.png';
import wine from './img/wine.png';
import './banana.css';



function Banana() {

  const mystyle = {
    width: "450px",
    height: "250px",
    backgroundImage: `url(${avant})`,
    backgroundColor: "#FF00D6",
    backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: "multiply",
  borderRadius: "25px",
  marginTop: "125px",
  boxShadow: "-10px -10px 15px  #141314 , 10px 10px 15px  #0c0c0c",
  position: "absolute",
  zIndex: "999"
  }      

  const mystyle1 = {
    width: "450px",
    height: "250px",
    backgroundImage: `url(${natal})`,
    backgroundColor: "#FF00D6",
    backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: "multiply",
  borderRadius: "25px",
  boxShadow: "-10px -10px 15px  #141314 , 10px 10px 15px  #0c0c0c",
  position: "absolute",
  zIndex: "999"

  } 

  const mystyle2 = {
    width: "450px",
    height: "250px",
    backgroundImage: `url(${wine})`,
    backgroundColor: "#FF00D6",
    backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: "multiply",
  borderRadius: "25px",
  boxShadow: "-10px -10px 15px  #141314 , 10px 10px 15px  #0c0c0c",
  position: "absolute",
  
  zIndex: "999"
       
    
  };

  return (
    
    
    <div className="App">   
        
        < svg className="banana-absolute" width="896" height="467" viewBox="0 0 896 467" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <path d="M852.5 259C1179.92 -194.617 -519.462 48.2088 165.441 164.914C1021.57 310.797 142.198 543.151 837.284 441.5" stroke="#EEEEEE"/>
         
          </svg>

            <div className="banana-divison"> 
                  <span className="banana-header"> Nossos </span>
                  <span className="banana-text"> trabalhos </span>
            </div>
           
           <div className="banana-image1" >

           <div style={mystyle}>  </div>

           <div className="banana-text-image">
                          <h3> Evento Completo</h3>
                          <h2 className="Portfolio"> Avant Première <span className="portfoliow">2021</span></h2>
                          <h4 > Projeto Incepa e Roca</h4>
                          </div>
            
           </div>

           
           <div className="banana-image2" >

           <div style={mystyle1}>  </div>

                          <div className="banana-text-image2">
                          <h3> Tour na Cidade</h3>
                          <h2 className="Portfolio"> Natal Interativo </h2>
                          <h4 > Prefeitura de Curitiba</h4>
                          </div>
            
           </div>

           <div className="banana-image3" >

           <div style={mystyle2}>  </div>

                          <div className="banana-text-image3">
                          <h3> Experiência em Produto</h3>
                          <h2 className="Portfolio"> Vinho Musical </h2>
                          <h4 > Lançamento de Álbum Maycon </h4>
                          </div>
            
           </div>

           <div class="button1"> Ver todos </div>

                          
                  


                    
                
                
                  
          
           
           

                  
  
    
    </div>

    
  );
}

export default Banana;
