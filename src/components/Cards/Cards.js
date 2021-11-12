import Card from "./Card/Card";
import "./Cards.scss";

function Cards({cardInHomedata}) {
    
    const cards = cardInHomedata.posts.map((post, index) => <Card key={post.title + index} cardInCardsData={{post:post, dispatch:cardInHomedata.dispatch, index:index, cardInHomedata: cardInHomedata}}  />);
    return (
        <div className="cards_container">{cards}</div>
    );
}

export default Cards;
