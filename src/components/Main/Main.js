import React from 'react'
import "./Main.css"
import HornedBeast from '../HornedBeast/hornedbeast'
// import data from "../../data.json";


export default function Main({openModal, beastData}) {
  
  return(
    <main>
      <div className='hornedBeast-main'>
        {beastData.map((beast, key) => {
          return(
          <HornedBeast
          // key={beast._id}
          // beastObject={beast}
          // title={beast.title}
          // imgUrl={beast.image_url}
          // description={beast.description}
          // handleModal={handleModal} />
            wholebeast={beast}
            key={beast._id}
            title={beast.title}
            image={beast.image_url}
            description={beast.description}
            openModal={openModal}/>
          )
        }
      )}
        </div>
    </main>
  );
}




