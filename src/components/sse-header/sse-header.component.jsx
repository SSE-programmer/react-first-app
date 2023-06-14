import styles from './sse-header.module.scss'
import {NavLink} from "react-router-dom";

function SseHeader() {
    const links = [
        {label: 'My page', url: '/my-page'},
        {label: 'Community', url: '/community'},
        {label: 'Random joke', url: '/random-joke'},
        {label: 'About project', url: '/about-project'},
    ];

    const linksList = links.map((link, index) =>
        <li key={index}>
            <NavLink
                className={({isActive}) => isActive ? styles.active : null }
                to={link.url}
            >
                {link.label}
            </NavLink>
        </li>
    );

    return (
        <header className={styles.App_header}>
            <div className={`${styles.header_container} page-center-block`}>
                <p className={styles.logo}>
                    SocCell
                </p>
                <ul>
                    {linksList}
                </ul>
            </div>
        </header>
)
}

export default SseHeader;