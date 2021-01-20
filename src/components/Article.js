import React from 'react'

function Article(props) {

    return (props.film.map((tortue)=>
        <div>
            <h1>{tortue.titre}</h1>
            <span>{tortue.durée}</span>
        </div>
    ))
}

export default Article
