press=1
press2=2
function tela1(){
  
  
  background('white');

 {
   fill('red')
  
  rect(0,0,205,1600)
  
  
  rect(1520,0,250,1600)
  
  
  rect(0,0,1600,400);
  
  
  
  
  rect(600,800,500,300,20)
  
  
  

    }

{ fill(color('black'))
  textSize(20)
  textSize(55)
 noStroke()
 text('NOTICIAS E REPORTAGENS',500,450)
 text('GRUPO PJ',700,500)
 text('Christofer,Renan,Mateus,David,Davi,Maria F,Maria R',200,600)
  text('video press 1',690,950)}
 

  
  if (keyIsDown(49) && tela < 2)
  {
    tela += press
    }
  else if (keyIsDown(49) && tela > 1)
    tela -= press
  
  if ( keyIsDown(50) && tela < 2)
  {
    tela += press2
  }
else if (keyIsDown(50) && tela > 1)
  tela +=press 
}
