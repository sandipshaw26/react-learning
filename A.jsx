import React, { createContext } from 'react'
import B from './B';

const GreetContest = createContext();
// const Greet2Contest = createContext();
const A = () => {
    const greet="hello! Sandip";
    const greet2 ="Context Api";
  return (
    <div>
     {/* <GreetContest.Provider value={greet}>
     <Greet2Contest.Provider value={greet2}>
     <B/>
     </Greet2Contest.Provider>
     </GreetContest.Provider> */}
     <GreetContest.Provider value={{greet,greet2}}>
      <B/>
     </GreetContest.Provider>
    </div>
  )
}

export default A
// export {GreetContest,Greet2Contest};
export{GreetContest}