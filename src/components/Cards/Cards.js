import { useState } from "react";
import Card from "./Card/Card";
import "./Cards.scss";
import { ACTION } from '../../pages/Home/Home'


function Cards({ cardsInHomedata, refresh, setRef }) {
    console.log("cardsInHomedata", cardsInHomedata.posts);

    const cards = cardsInHomedata.posts.map((post, index) => <Card key={post.title + index} cardInCardsData={{ post: post, dispatch: cardsInHomedata.dispatch, index: index, cardsInHomedata: cardsInHomedata, id:post.id }} />);
    return (
        <div className="cards_container">{cards}</div>
    );
}

export default Cards;
