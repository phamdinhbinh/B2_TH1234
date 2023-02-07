import React from 'react';
export default function HelloWorld() {
    let name = "du"

    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
      };
    
      const formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
      };


 return (
    <div>
     {/* <div>Xin chào : {name} </div>;
     <div> Rất vui khi gặp bạn </div> */}

     <div>Xin chào: {name} và {formatName(user)}</div>
      <div>{name === 'Cee' ? 'Xin Chào Cee' : `Xin Chào ${formatName(user)}`}</div>
    </div>
 )
}