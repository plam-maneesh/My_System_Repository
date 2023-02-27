/*
 ============================================================================
 Name        : Piramide_Programe.c
 Author      : Maneesh
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */





/*
< ===========================================================================>

              piramide





    colums>>
   ___________________
R  |         *        |
O  |       * * *      |
W  |     * * * * *    |
S  |   * * * * * * *  |
   | * * * * * * * * *|
  --------------------


 how many rows : 5
 how many col: 9


 row (i)  |   space (s)
 -----------------------
 i=1            5
 i=2            4
 i=3            3
 i=4            2
 i=5            1

 condition: (row-i)



 i    | stares
 --------------

 i=1      1
 i=2      3
 i=3      5
 i=4      7
 i=5      9

condition: (i*2-1)




#END
---




=================================================================================>
 */







#include <stdio.h>
#include <stdlib.h>

int main(void) {


	int row;

	printf("ENter your rows?");
	scanf("%d",&row);

	for(int i=1;i<=row;i++){


		for(int s=1;s<=row-i;s++){


			printf(" ");
		}

       for(int j=1;j<=i*2-1;j++){

    	   printf("*");


       }
       printf("\n");


	}






	return EXIT_SUCCESS;
}
