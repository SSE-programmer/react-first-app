import styles from './sse-header.module.scss'

function SseHeader() {
    const links = [
        {label: 'My page', url: ''},
        {label: 'Community', url: ''},
        {label: 'Random joke', url: ''},
        {label: 'About project', url: ''},
    ];

    const linksList = links.map((link, index) =>
        <li key={index}>
            <a href={link.url}>
                {link.label}
            </a>
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