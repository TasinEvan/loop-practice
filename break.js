/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for(let i = 1 ; i <= 200 ; i++)
// { console.log(i)
//     if (i === 100 )
//     {   console.log(" found hundred:")
//         break; }
  
    

// }


//  sum break 100


//  let i = 1;
//  let sum = 1;
//  while(i < 200)
//  { console.log(i);
// sum = sum + i;
// i++

// if( i >= 10 )
// {break;}
//  }
//  console.log(sum);


// square sum break 
for(let i = 1 ; i <= 100 ; i++)
{
    console.log(i);

    let sqrvalue = i * i;

    if ( sqrvalue <= 100 && sqrvalue > i  ){
        console.log( ` find  square number ${sqrvalue}`);
        break;
    }
  

}
 
