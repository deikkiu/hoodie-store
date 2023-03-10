import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from './Header.module.scss';
// Images / Icons
import menuLogo from '../../assets/images/[removal.ai]_tmp-640b4ed689852.png';
import {ReactComponent as ShopLogo} from '../../assets/icons/shop.svg';
import {ReactComponent as FavoriteLogo} from '../../assets/icons/favorite.svg';
import {ReactComponent as ProfileLogo} from '../../assets/icons/profile.svg';

const Header = () => {
    const navigate = useNavigate();

  return (
    <nav className={styles.menu}>
        <div className={styles.block}>
            <img className={styles.logo} src={menuLogo} alt="Logo" />
            <div className={styles.name}>HoodieStore</div>
        </div>
        <div className={styles.links}>
            <button onClick={() => navigate("/shop")} className={styles.link}><ShopLogo className={styles.fill} /></button>
            <button onClick={() => navigate("/favorite")} className={styles.link}><FavoriteLogo className={styles.fill} /></button>
            <button onClick={() => navigate("/orders")} className={styles.link}><ProfileLogo className={styles.fill} /></button>
        </div>
    </nav>
  )
}

export default Header;