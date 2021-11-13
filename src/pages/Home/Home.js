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
    EDIT_POST: 'edit_post',
    DELETE_POST: 'delete_post'
}

function reducer(posts, action) {
    switch (action.type) {
        case ACTION.ADD_POST:
            return [...posts, action.payload.data]
        case ACTION.DELETE_POST:
            return posts.filter(post => post.id !== action.payload.id)
        default:
            return posts
    }
}


const Home = () => {
    const onAddedHandler = (data) => {
        dispatch({ type: ACTION.ADD_POST, payload: { data: data } })
    }


    const [posts, dispatch] = useReducer(reducer, [])
    console.log("jaffar", posts)
    return (
        <div>
            <div className="app_container">
                <div className="cards_container">
                    <Cards cardsInHomedata={{ posts: posts, dispatch: dispatch }} />
                </div>
                <div className="form_container">
                    <Form onAdded={onAddedHandler} />
                </div>
            </div>
        </div>
    )
}

export default Home
export { ACTION }
