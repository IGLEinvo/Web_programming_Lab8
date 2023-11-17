import React from "react";
import { Card } from "antd";
import styles from "./CardItem.styled";

const CardItem = ({ mark = 'No title.', carat, imageSrc, description, viewButton }) => {
    let card = {
        width: 350, borderRadius: "20px"
    }
    // eslint-disable-next-line no-unused-vars
    let image = styles.image;

    if (viewButton === true) {
        card = {
            width: 300,
            borderRadius: "20px"
        }
        // eslint-disable-next-line no-unused-vars
        image = {
            borderRadius: "10px",
            width: "300px",
            height: "175px"
        }
    }

    return (
        <Card
            hoverable
            style={card}
            cover={
                <img style={styles.image} alt="example" src={imageSrc} />
            }
        >
            <div>
                <h2>{mark}</h2>
                <p>carat: {carat}</p>
                <p> {description}</p>
                {viewButton && (
                    <div style={styles.button_container}>
                        <button style={styles.button} className="btn btn-primary">
                            View more
                        </button>
                    </div>
                )}
            </div>
        </Card>
    );
}

export default CardItem;
