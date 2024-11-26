import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";

function Atv03(){
    return(
<>
<h2>Atividade 3</h2>
<h3>Gallery</h3>
<Gallery/>
<h3>Profile</h3>
<Profile/>

<Link to="/">Voltar</Link>
</>
)
}

export default Atv03;