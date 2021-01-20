// import React from 'react'

// function Article(props) {
//     return (props.film.map((tortue)=>
//         <div>
//             <h1>{tortue.titre}</h1>
//             <span>{tortue.durée}</span>
//         </div>
//     ))
// }
// Article.defaultProps={
//     titre:"hello"
// }
// export default Article



import React, {useState} from 'react'

function Article(props) {
    const [changeTitle, setChangeTitle] = useState(props.durée)
    return (
        <div>
            {
                changeTitle.map((elem,index)=> <h1 key={index}>{elem.durée}</h1> )
            }
        </div>
    );
}

export default Article

