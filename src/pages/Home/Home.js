import './Home.scss';
import Cards from "../../components/Cards/Cards";
import Form from "../../components/Form/Form";
import { useState, useReducer } from "react";
import EditModal from '../../components/Edit_Modal/EditModal';

// function Home() {
//     const [posts, setPosts] = useState([]);
//     const onAddedHandler = (data) => {
//         setPosts(prePosts => [...prePosts, data]);
//         console.log(data);
//     }
//     return (
//         <div className="app_container">
//             <div className="cards_container">
//                 <Cards posts={posts}/>
//             </div>
//             <div className="form_container">
//                 <Form onAdded={onAddedHandler}/>
//             </div>
//         </div>
//     );
// }

// export default Home;


import React from 'react'

const ACTION = {
    ADD_POST: 'add_post',
    EDIT_POST: 'edit_post'
}

function reducer(posts, action) {
    switch (action.type) {
        case ACTION.ADD_POST:
            return [...posts, action.payload.data]
        case ACTION.EDIT_POST:
            return [action.payload.values]
        default:
            return posts
    }
}


const Home = () => {
    const onAddedHandler = (data) => {
        dispatch({ type: ACTION.ADD_POST, payload: { data: data } })
        console.log(data);
    }
    
    const [refresh , setRef] = useState(false)

    const [posts, dispatch] = useReducer(reducer, [])
    console.log("jaffar" , posts)
    return (
        <div>
            <div className="app_container">
                <div className="cards_container">
                    <Cards refresh={refresh} setRef={setRef} cardInHomedata={{posts:posts, dispatch:dispatch} } />
                </div>
                <div className="form_container">
                    <Form onAdded={onAddedHandler} />
                </div>
            </div>
        </div>
    )
}

export default Home
export {ACTION}
