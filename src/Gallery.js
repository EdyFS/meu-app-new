import React from "react";


export function Profile(){
    return (
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/640px-Marie_Curie_c1920.jpg"
        alt="Marie Curie"
        />
        </div>
    );
}

function Gallery(){
    return(<section>
        <h1>Amazing Scientists</h1>
        <Profile/>
        <Profile/>
        <Profile/>

    </section>
    )
}

export default Gallery;