import Card from "./Card/Card";
import "./Cards.scss";

function Cards({posts}) {
    const cards = posts.map((post, index) => <Card key={post.title + index} post={post} />);
    return (
        <div className="cards_container">{cards}</div>
    );
}

export default Cards;
