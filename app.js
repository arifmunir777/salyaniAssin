      console.log("Assignment 6");
    // // 1 

    // let first =prompt("Enter First Name");
    // let second =prompt("Enter second Name");

    // let fullName=first+second;
    // let x=document.getElementById("pro");
    // console.log(x);
    // x.innerHTML=fullName;
    
    // console.log("Hello Good Morning Sir "+fullName);


// 2

// let favourite=prompt("Enter Your Favourite Mobile ");
// let count=0;
// let fuC;
// for(i=0;i<favourite.length;i++)
// {
//    count++;
//    fuc=count;
// //    console.log(favourite[i]);
// }
//  console.log(fuc); 


 // 3

//    let country="Pakistan";

 
//  let n="n";
 
//  let cou;
//  for(i=0;i<country.length;i++)
// {
//     if(n==country[i])
//     {
//          cou=i;
//         break;
//     }
// }
// console.log("Index Found at "+cou);

 //for  4 

// let w="Hello World";
 
//  let n="l";
//  let cou2;
 
//  cou2=w.lastIndexOf("l");


// console.log("Index Found at "+cou2);

// 5

// let f="Pakistan";
// let find="i";
// let x=0;
// for (let  i = 0; i < f.length; i++) {
      
//     if(f[i]==find)
//     {
//      console.log("Index Found at "+ i);
//      break;
//     }   
    
// }
 
//6

// let first =prompt("Enter First Name");
//     let second =prompt("Enter second Name");

//     let fullName=first.concat(second);
//     let x=document.getElementById("pro");
//     console.log(x);
//     x.innerHTML=fullName;
    
//     console.log("Hello Good Morning Sir "+fullName);

//7
// let city="Hyderabad";
// console.log("Before Replacement",city);

// console.log ("After Replacement "+city.replace("Hyderabad","Islmabad"));

//8
// let  message = `Ali and Sami are best friends. They play cricket and
// football together.`;

//  let ms=message.replace("and","&");
//  console.log(ms);

//9
// let word="472";
// console.log(typeof(word));

// let a =parseInt(word);
// console.log(typeof(a))

//10
// let word=prompt("Ente a lowerCase Word");
// let cword=word.toUpperCase();
// console.log(cword);

//11
// let x;
// let y=prompt("Enter the Word");
// for(i=0;i<y.length;i++)
// {
//  let x=y.charAt(0).toUpperCase()+y.slice(1);
//  console.log(x+y);
  

// }

// //12
// let num=363.420;
//  let x=num.toFixed(0);
//  console.log(x);

// //13
//    let x=""A;
//    let d;
//    for(i=0;i<100;i++)
//    {

//           d=x.charCodeAt(i); 
//             console.log(d)
//    }
//   let wor=prompt("Enter any Word");

// for(var i=65;i<123;++i)
// {   
     
//      if(_
//          console.log(String.fromCharCode(i),"+ index"+i);
//     if(i=97)
//     {
//       console.log(String.fromCharCode(i),"+ index"+i);

//     }
    
// } 


//14

// let array = ["cake","apple pie","chips","pattie"];

// let find=prompt("Please Enter Food to Find Availablity");
//    let x=find.toLowerCase();
// for(i=0;i<array.length;i++)
// {
//     if(array[i]==x)
//      {
//         console.log(array[i],"Food Available At Location",i) 
//      }  
//      else
//      {
//        console.log("We are Sorry Not Found");
//      }
// }

//15
   
//  let  password=prompt("Enter Your Password");

//16
// let uni="University of Karachi";

// let x=uni.split();
// console.log(x);
// for(i=0;i<x.length;i++)
// {
//   console.log(x[i]);
// }

//17
// let str="Pakistan";
// console.log(str.length)
// let x=str.charAt(str.length-1);
// console.log(x)

//18

// let str="the quick brown fox jumps over the lazy dog";
// let count=0;

// for(i=0;i<str.length;i++)
// {
//   if(str[i]==str[i])
//   {
//     count=str[i];
//     console.log(count)
//   }
// }

// function search_word(text, word){
    
//   var x = 0, y=0;
 
//   for (i=0;i< text.length;i++)
//       {
//       if(text[i] == word[0])
//           {
//           for(j=i;j< i+word.length;j++)
//              {
//               if(text[j]==word[j-i])
//                 {
//                   y++;
//                 }
//               if (y==word.length){
//                   x++;
//               }
//           }
//           y=0;
//       }
//   }
//  return "'"+word+"' was found "+x+" times.";
// }

// console.log(search_word(' the quick brown fox jumps over the lazy dog', 'the'));

//Assingment  chaper 26 se 30
//1
// let number=prompt("Enter Positive Number");
//     // console.log(typeof(number));
// if(number>0)
// { 
//    let y=parseInt(number)
//    console.log(y)
//    console.log("number is "+number);
//    let x=y.toFixed();
//    console.log("Round Off Values "+x);
//    console.log("Floor Value "+Math.floor(y));
//    console.log("Ceil Value "+Math.ceil(y));

// }
 

//2

// let number=prompt("Enter Positive Number");
//     // console.log(typeof(number));
// if(number<  0)
// { 
//    let y=parseInt(number)
//    console.log(y)
//    console.log("number is "+number);
//   //  let x=y.roundof();
//    console.log("Round Off Values "+Math.round(y));
//    console.log("Floor Value "+Math.floor(y));
//    console.log("Ceil Value "+Math.ceil(y));

// }

// //3
// let number=-4;
// let x=Math.abs(number);
// console.log(x);
//4

// let x=Math.floor(Math.random()*6);
// console.log(x);
//5

// let x=Math.floor(Math.random()*2);
// console.log( "Random Coin "+x);

//6
// let x=Math.floor(Math.random()*1000);
// console.log(x);

//7

// let weight=prompt("Please Enter Your Weights");
//    console.log(weight)

//8

// let x=Math.floor(Math.random()*10);

// let u=prompt("Enter Number");
// if(x==u)
// {
//   alert("Congrats ");
// }
// else
// {
//   alert("Try Again")
// }

//assingmet 31 to 34
//1
// let date=new Date();
// console.log(date);
 
//2

// let date=new Date();
//   let x=date.getMonth();
//  if(x==1)
//  {
//    console.log(" Current Month: January");
//  } 
//  else if(x==2)
//  {
//   console.log(" Current Month: Febrary");
//  }
//  else if(x==3)
//  {
//   console.log(" Current Month: March");
//  }
//  else if(x==4)
//  {
//   console.log(" Current Month: April");
//  }
//  else if(x==5)
//  {
//   console.log(" Current Month: May");
//  }
//  else if(x==6)
//  {
//   console.log(" Current Month: June");
//  }
//  else if(x==7)
//  {
//   console.log(" Current Month: July");
//  }
//  else if(x==8)
//  {
//   console.log(" Current Month: Auquest");
//  }
//  else if(x==9)
//  {
//   console.log(" Current Month: Septhember");
//  }
//  else if(x==10)
//  {
//   console.log(" Current Month: Octobar");
//  }
//  else if(x==11)
//  {
//   console.log(" Current Month: November");
//  }
//  else if(x==12)
//  {
//   console.log(" Current Month: December");
//  }
 




 
// let date=new Date();
// let x=date.getDay();
// date.g
// console.log(y)
  // x=y.toString();
  // console.log(x);
// if(x==0)
// {
//  console.log(" Current Day: Mon");
// } 
// else if(x==1)
// {
// console.log(" Current Day: Tues");
// }
// else if(x==2)
// {
// console.log(" Current Day: wed");
// }
// else if(x==3)
// {
// console.log(" Current Day: Thur");
// }
// else if(x==4)
// {
// console.log(" Current Day: Fri");
// }
// else if(x==5)
// {
// console.log(" Current Day: Sat");
// }
// else if(x==6)
// {
// console.log(" Current Day: sun");
// }
 

// 0 1 2 3 4  5  6

// x=date.getDay();

// if(x==0 || x==6 )
// {
//   console.log("Today is fun day")
// }

//35-40
//1
// function date()
// {
//   let date2 =new Date();
//   console.log(date2);

// }
//  date();

//2
// function sum(a,b)
// {
//   let sum=a+b;
//   return sum;

// }
// let a=prompt("Enter Numbe  1");
// let x=parseInt(a);
// let b=prompt("Enter Numbe  2");
// let y=parseInt(b);

// alert((sum(x,y)));

//3 

// function name(f,l)
// {
//   let fullname=f+l;
//   return fullname;
// }
//  let a=prompt("Enter Frist Name ");
 
//  let b=prompt("Enter 2nd Name ");
 

//   alert((name(a,b)));


// function number (a,b,c)
// {
  
//   let d=a*b*c;
//   return d;
// }

//   let a=prompt("Enter Numbe  1");
//   let x=parseInt(a);
//   let b=prompt("Enter Numbe  2");
//   let y=parseInt(b);
//   let c=prompt("Enter Numbe  2");
//   let z=parseInt(c);

//   alert((number(x,y,z)));

//
// function  sqr(number,d)
// { 
//     x=Math.pow(number,d);
//     return x;
// }

//   let a=prompt("Enter Number For Square");
//   // console.log(typeof(a));
//    let x=parseInt(a);
//   let b=prompt("Enter Square Value");
//   let y=parseInt(b);

//    console.log(typeof(z));
//     alert(sqr(x,y))


// function Factorial(n) { 
//   var ans=1; 
    
//   for (var i = 2; i <= n; i++) 
//       ans = ans * i; 
//    return ans; 
// } 

// console.log(Factorial(5)); 

  
// function count(x,y)
// {
//   let cnt=0;
//     for(i=x;i<=y;i++)
//     {
//       cnt=i;
//       console.log(cnt);
//     }
// }       
// let a=prompt("Enter  Starting Number ");
// let x=parseInt(a);
 
// let b=prompt("Enter Ending Number ");
// let y=parseInt(b);
 

//  console.log(count(x,y));


//11

 

// function uCase(n)
// {
//        x=n.toUpperCase();
//        return x;
// }
// console.log(uCase("i am arif munir"));
