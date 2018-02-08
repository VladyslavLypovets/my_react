import React from 'react';

 function Img(src){
    return(
      <div>
        <img src={src.src}  width="300" height="200" alt="someAlt" />
      </div>
    );
}
export default Img;
