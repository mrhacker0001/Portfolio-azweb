import React, { useState, useEffect } from 'react'
import "./Portfolio.css"
import img from "../assets/Vector (11).png"
import img1 from "../assets/Screenshot 2024-08-29 at 21.59.48.png"
import img2 from "../assets/Screenshot 2024-08-29 at 22.00.28.png"
import img3 from "../assets/Screenshot 2024-08-29 at 22.00.44.png"
import right from "../assets/right-up.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    // Ekran o'lchamini kuzatish uchun useEffect qo'llaymiz
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const data = [
        { img: img1, nomi: "Sabio Price Attack", tavsif: "Happy Cyber Monday, trader! SabioTrade’s conditions were hacked by unknown intruders.", link: "https://attack-hacker.netlify.app/" },
        {
            img: img2, nomi: "Flower Shop", tavsif: "Flowers, 🌻 what the world needs Browse between hounders of flowers", link: "https://flower-shop-no1.netlify.app/"
        },
        { img: img3, nomi: "Lexus Test Driving", tavsif: "Test driving platfor to all countries" },
    ]


    const styles = {
        portfolio: {
            padding: '50px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center'
        },
        recent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            gap:"5dvw"
        },
        recentButton: {
            width: "30dvw",
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#007bff',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        },

        recentButtonImg: {
            marginRight: '10px',
            height: '20px'
        },
        cardContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            marginTop: '20px',
        },
        card: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
            margin: '10px',
            textAlign: 'center',
            flex: 1
        },


        cardImg: {
            width: '100%',
            height: 'auto',
            marginBottom: '15px',
            borderRadius: '10px'
        },
        cardTitle: {
            fontSize: '18px',
            marginBottom: '10px'
        },
        cardText: {
            fontSize: '14px',
            color: '#555',
            marginBottom: '15px'
        },
        cardButton: {
            backgroundColor: '#007bff',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '30dvw'
        },
        cardButtonImg: {
            marginLeft: '10px',
            height: '20px',
            display: 'none'
        }
    };

    // Slider sozlamalari
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className='Portfolio' id="portfolio">
                <div className="recent">
                    <h2>Recent Projects <br /> <h1>My Portfolio</h1></h2>
                    <button><img src={img} alt="..." /> Visit My Dribble </button>
                </div>
                <div className="bottom-cards">
                    {
                        data.map((item, index) => (
                            <div key={index} className="incard">
                                <img src={item.img} alt="" />
                                <h1>{item.nomi}</h1>
                                <p>{item.tavsif}</p>
                                <button><a href={item.link}>View In Dribbble </a> <img src={right} alt="" /></button>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div style={styles.portfolio} id="portfolio" className='port'>
                <div style={styles.recent}>
                    <h2>Recent Projects <br /> <h1 >My Portfolio</h1></h2>
                    <button style={styles.recentButton}>
                        <img src={img} alt="..." style={styles.recentButtonImg} /> Visit My Dribble
                    </button>
                </div>
                <div>
                    {/* Ekran 800px dan kichik bo'lganda Slider ishlatiladi */}
                    {isMobile ? (
                        <Slider {...sliderSettings}>
                            {data.map((item, index) => (
                                <div key={index} style={styles.card}>
                                    <img src={item.img} alt="" style={styles.cardImg} />
                                    <h1 style={styles.cardTitle}>{item.nomi}</h1>
                                    <p style={styles.cardText}>{item.tavsif}</p>
                                    {item.link && (
                                        <button style={styles.cardButton}>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                                View In Dribbble
                                            </a>
                                            <img src={right} alt="" style={styles.cardButtonImg} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div style={styles.cardContainer}>
                            {data.map((item, index) => (
                                <div key={index} style={styles.card}>
                                    <img src={item.img} alt="" style={styles.cardImg} />
                                    <h1 style={styles.cardTitle}>{item.nomi}</h1>
                                    <p style={styles.cardText}>{item.tavsif}</p>
                                    {item.link && (
                                        <button style={styles.cardButton} className='cardbutton'>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                                View In Dribbble
                                            </a>
                                            <img src={right} alt="" style={styles.cardButtonImg} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </>

    );
}




export default Portfolio