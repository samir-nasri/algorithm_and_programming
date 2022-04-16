var Matrix=[[1,-3,4,  0, 9],
            [0,-9,7, 10,11],
            [2, 5,8,-11,45],
            [7, 4,12,-6,-5]];
           
 var i,j,max,min;
            
     max=0;min=0;   
     for(j=0;j<5;j++){
         let somme=0;
         for(i=0;i<4;i++){
            somme=somme+Matrix[i][j];
        }
        if(somme>max){
            max=somme;
        }
        if(somme<min){
            min=somme;
        }
        console.log(somme); 
    }

    console.log("la somme maximale:",max);
    console.log("la somme minimale:",min);
    console.log(Matrix);
            