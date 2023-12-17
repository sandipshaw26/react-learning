import React from 'react';
import { GreetContest } from './A';
// import { GreetContest,Greet2Contest } from './A';
import { useContext } from 'react';



const C = () => {
  const useCon= useContext(GreetContest);
  // const useCon2= useContext(Greet2Contest);
  return (
    //  <div>
    // {/* greetC: {props.greet} */}
    // <GreetContest.Consumer>{
    // (val)=>{
    //   return (
    //     <Greet2Contest>
    //       {
    //         (val2)=>{
    //           return <h1>Greet: {val}<br/>{val2}</h1>
    //         }
    //       }
    //     </Greet2Contest>
    //   )
    // }
    // }
    // </GreetContest.Consumer>
    //  </div>
    <div>
      {/* <h1>Greet : {useCon}</h1>
    <h1>{useCon2}</h1> */}
    <h1> Greet: {useCon.greet}{useCon.greet2}</h1>
    </div>
  );
};

export default C
