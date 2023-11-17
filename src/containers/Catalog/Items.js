import React from "react";
import styles from "./Items.styled";
import Diamond from "/Users/igorlevocko/Desktop/ReactLab-lab_react2/lab_react2/src/Images/diamond1.jpeg";
import Rubin from "/Users/igorlevocko/Desktop/ReactLab-lab_react2/lab_react2/src/Images/rubin.png";
import Sapphire from "/Users/igorlevocko/Desktop/ReactLab-lab_react2/lab_react2/src/Images/Sapphire_Gem.jpg";
import Topaz from "/Users/igorlevocko/Desktop/ReactLab-lab_react2/lab_react2/src/Images/topaz.jpeg"
import Shpinel from "/Users/igorlevocko/Desktop/ReactLab-lab_react2/lab_react2/src/Images/sphinel.jpeg"
import Zirkon from "/Users/igorlevocko/Desktop/ReactLab-lab_react2/lab_react2/src/Images/zirkon.jpeg"
import CardItem from "../../components/CardItem/CardItem";


const data = [
    {
        mark: "Diamond",
        carat: "1.4",
        image: Diamond,
        description: "Діаманти - це найтвердіший природний матеріал, відомий своєю блискучістю та чистотою. Вони використовуються для виготовлення коштовних прикрас і володіють великою блискучістю та спроможністю розсіювати світло.",
    },
    {
        mark: "Rubin",
        carat: "0.9",
        image: Rubin,
        description: "Рубіни - це червоні корунди, які символізують страсть та кохання. Вони володіють багатством кольору та використовуються в коштовних прикрасах. Рубіни є одними з найдорожчих дорогоцінних каменів",
    },
    {
        mark: "Sapphire",
        carat: "0.5",
        image: Sapphire,
        description: "Сапфіри - це корунди інших кольорів, окрім червоного (який називається рубінами). Сапфіри можуть бути синіми, жовтими, рожевими та іншими кольорами. Вони також використовуються в прикрасах і відзначаються яскравими кольорами та вишуканістю.",
    },
    {
        mark: "Zirkon",
        carat: "1",
        image: Zirkon,
        description: "Циркон - це природний камінь, який може мати різноманітні відтінки, включаючи безбарвний, синій, жовтий, зелений та інші. Він славиться своєю великою блискучістю та чистотою. Циркон використовується як декоративний елемент у виготовленні прикрас і символізує вічність та красу.",
    },
    {
        mark: "Shpinel",
        carat: "1.8",
        image: Shpinel,
        description: "Шпинель - це природний камінь, який може мати різноманітні кольори, включаючи червоний, рожевий, синій, фіолетовий та інші. Він характеризується своєю великою прозорістю та інтенсивністю кольорів. Шпинель часто використовується для виготовлення унікальних та елегантних прикрас, і його наявність може символізувати стійкість та розкош.",
    },
    {
        
        mark: "Topaz",
        carat: "0.8",
        image: Topaz,
        description: "Топаз - це дорогоцінний камінь, який може мати різноманітні відтінки від блідо-голубого до глибокого синього, жовтого, рожевого або чисто білого. Його велика прозорість та блискучість роблять його популярним в прикрасах. Топаз також пов'язується з властивостями, які принесуть успіх та благополуччя своєму власнику.",

    },

];


export default function Items({ searchTerm, filters }) {
    let filteredData = [...data];

    // Фільтр за назвою
    if (filters.sortBy === 'alphabetical') {
        filteredData.sort((a, b) => a.mark.localeCompare(b.mark));
    }

    // Фільтр за кількістю карат
    if (filters.sortBy === 'carat') {
        filteredData.sort((a, b) => parseFloat(a.carat) - parseFloat(b.carat));
    }

    // Фільтр за пошуковим терміном
    filteredData = filteredData.filter(({ mark }) =>
        mark.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div style={styles.cardWrapper}>
                {filteredData.map(({ mark, carat, image, description }, idx) => (
                    <CardItem
                        key={idx}
                        mark={mark}
                        carat={carat}
                        imageSrc={image}
                        description={description}
                        viewButton={true}
                        id={idx}
                    />
                ))}
            </div>
        </div>
    );
}