import React from "react";

const today = new Date();

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-US', {weekday: 'long'}
    ).format(date);
};

export default function TodoList(){
    return(
        <>
        {/*<h1>Mendeleev</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/%EB%93%9C%EB%AF%B8%ED%8A%B8%EB%A6%AC_%EB%A9%98%EB%8D%B8%EB%A0%88%EC%98%88%ED%94%84.jpg"
        alt="Mendeleev"
        className="photo"/>*/}

        <h1>To Do List for {formatDate(today)}</h1>
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
        </>


    );
}