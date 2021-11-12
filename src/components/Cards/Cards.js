import { useState } from "react";
import Card from "./Card/Card";
import "./Cards.scss";

function Cards({cardInHomedata, refresh, setRef}) {
    console.log("cardInHomedata" , cardInHomedata);
    // const [refresh , setRef] = useState(false)
    const deleteHandle =  (ind)=>{
                console.log("deleteHandle" , ind);
                console.log( "new" ,cardInHomedata.posts)
                cardInHomedata.posts.splice(ind , 1)
                setRef(!refresh)
            }

    const cards = cardInHomedata.posts.map((post, index) => <Card  deleteHandle={deleteHandle} key={post.title + index} cardInCardsData={{post:post, dispatch:cardInHomedata.dispatch, index:index, cardInHomedata: cardInHomedata}}  />);
    return (
        <div className="cards_container">{cards}</div>
    );
}

export default Cards;
