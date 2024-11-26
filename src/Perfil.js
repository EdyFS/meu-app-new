import React from "react";
import { getImageUrl } from "./utils";

function Foto({person, size}){
    return(
        <img className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    )
}
export default function Perfil(){
    return(
        <><Foto
        person={{name: 'Lin Lanying', imageId: '1bX5QH6'}}
        size={50}
        />
        <Foto
        person={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
        size={100}
        />
        <Foto
        person={{name: 'Aklilu Lemma', imageId: 'OKS67lh'}}
        size={80}
        />
        
        </>
    );
}