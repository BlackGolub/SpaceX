import React, { useState } from "react";
import styles from './HomePage.module.css';
import { RxHamburgerMenu } from 'react-icons/rx'

const navButton = [
    'Главная',
    'Технологии',
    'График полетов',
    'Гарантии',
    'О компании',
    'Контакты',

]
const Home = () => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active)
    }

    const handleMouseLeave = () => {
        toggleActive();
      };

    return(
        <div className={styles.back}>
            <nav className={styles.nav}>
                <img className={styles.logo} src="/SpaceX/images/SpaceX.png" alt="logo"/>
                <div className={`${styles.nav_buttons} ${active ? styles.nav_buttons_active : styles.hidden}`} onMouseLeave={handleMouseLeave}>
                    {navButton.map((buttonText, index) => (
                        <button key={index} className={`${styles.nav_button} ${active ? '' : styles.hidden}`} >{buttonText} </button>
                    ))}
                </div>
                < RxHamburgerMenu className={`${styles.nav_icon} ${active ? styles.hidden : ''}`} onClick={toggleActive}/>
            </nav>
            <div className={styles.content}>
                <div className={styles.left_side}>
                    <div className={styles.promo}>
                        <h1 className={styles.promo_h1}>ПУТЕШЕСТВИЕ</h1>
                        <p className={styles.promo_p}>на красную планету</p>
                    </div>
                    <button className={styles.promo_button}>Начать путешествие</button>
                </div>
                <img className={styles.mars} src="/SpaceX/images/Mars.png" alt="planet"/>
                <div className={styles.right_side}>
                    <table>
                    <tbody>
                        <tr>
                            <td className={styles.block1}>
                                <p className={styles.info_p}>мы</p>
                                <span>1</span>
                                <p className={styles.info_p}>на рынке</p>
                            </td>
                            <td className={styles.block2}>
                                <p className={styles.info_p}>гарантируем</p>
                                <span>50%</span>
                                <p className={styles.info_p}>безопасность</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.block3}>
                                <p className={styles.info_p}>календарик за</p>
                                <span>2001</span>
                                <p className={styles.info_p}>в подарок</p>
                            </td>
                            <td className={styles.block4}>
                                <p className={styles.info_p}>путешествие</p>
                                <span>597</span>
                                <p className={styles.info_p}>дней</p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home