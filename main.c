#include <stdio.h>
#include <stdlib.h>

int main()
{
    int x,y,z,i,n,result;
    printf("Veillez saisir la valeur de n:\n");
    do{
        scanf("%d",&n);
    }while(n<0);
    x=0;
    y=1;
    z=2;
    for(i=3;i<=n;i++){
        result=2*z+3*x;
        x=y;
        y=z;
        z=result;
    }
    switch(n){
          case 0:result= x;break;
          case 1:result= y;break;
          case 2:result= z;break;
    }
     printf("Le terme %d de la suite est %d",n,result);
    return 0;
}
