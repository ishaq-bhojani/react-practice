import React, { useState, useEffect } from 'react';
import Card from "./Card/Card";
import { auth, db, collection, getDocs } from '../../config/firebase';
import "./Cards.scss";

function Cards({ posts }) {
    const [userData, setUserData] = useState([]);
    const docRef = collection(db, "teams");

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(docRef);
            setUserData(data.docs.map((doc) => {
                if (doc.data().userEmail === auth.currentUser.email) {
                    return doc.data();
                }
            }))
        }
        getUser();
    }, [docRef])

    const cards = userData.map((post, index) => <Card key={index} post={post} />);
    return (
        <div className="cards_container">{cards}</div>
    );
}

export default Cards;
