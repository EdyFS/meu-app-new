import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";
import Avatar from "./Avatar";
import TodoList from "./TodoList";
import Perfil from "./Perfil";
import PackingList from "./PackingList";

function Atv03(){
    return(
<>
<h2>Atividade 3</h2>
<h3>Gallery</h3>
<Gallery/>
<h3>Profile</h3>
<Profile/>
<h3>Avatar</h3>
<Avatar/>
<h3>To do List</h3>
<TodoList/>
<h3>Profile</h3>
<Perfil/>
<h3>PackingList</h3>
<PackingList/>

<Link to="/">Voltar</Link>
</>
)
}

export default Atv03;