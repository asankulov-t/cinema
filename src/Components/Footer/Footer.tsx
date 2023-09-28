import React from 'react';
import style from './Footer.module.css'
const Footer = () => {
    return (
        <div className={style.footer+" ui grid"}>
            <div>
                <h5>Социальные сети</h5>
                <div className={style.network}>
                    <a href="https://www.facebook.com/kinobroadway/?ref=br_rs"><img src="https://www.freepnglogos.com/uploads/facebook-logo-23.jpg" alt=""/></a>
                    <a href="https://www.instagram.com/kinoteatrbroadway/?igshid=m6meetrlhhbe"><img src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png" alt=""/></a>
                    <a href="https://www.tiktok.com/@kinoteatrbroadway"><img src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-april-tutuapp-5.png" alt=""/></a>
                </div>
            </div>
            <div>
                <h5>Время работы</h5>
                <span>Ежедневно с 10:00 до 02:00</span>
            </div>
            <div>
                <h5>Контакты</h5>
                <a href="https://2gis.kg/bishkek/firm/70000001029043839?floor=4&amp;m=74.585663%2C42.855629%2F18" target="_blank" rel="noreferrer"><p>Бишкек, пр. Чынгыза Айтматова 3</p></a>
                <p><a href="tel:+996(709)77-77-33"><i className="fas fa-phone-alt"></i> +996 (709) 77 77 33</a></p>
            </div>

        </div>
    );
};

export default Footer;