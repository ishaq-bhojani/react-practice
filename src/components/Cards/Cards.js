import Card from "./Card/Card";
import "./Cards.scss";

function Cards({ cardsInHomedata }) {
    console.log("cardsInHomedata", cardsInHomedata.posts);

    const cards = cardsInHomedata.posts.map((post, index) => <Card key={post.title + index} cardInCardsData={{ post: post, dispatch: cardsInHomedata.dispatch, cardsInHomedata: cardsInHomedata, id:post.id }} />);
    return (
        <div className="cards_container">{cards}</div>
    );
}

export default Cards;
