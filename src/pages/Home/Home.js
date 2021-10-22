import './Home.scss';
import Cards from "../../components/Cards/Cards";
import Form from "../../components/Form/Form";
import {useState} from "react";

function Home() {
    const [posts, setPosts] = useState([]);
    const onAddedHandler = (data) => {
        setPosts(prePosts => [...prePosts, data]);
    }
    return (
        <div className="app_container">
            <div className="cards_container">
                <Cards posts={posts}/>
            </div>
            <div className="form_container">
                <Form onAdded={onAddedHandler}/>
            </div>
        </div>
    );
}

export default Home;