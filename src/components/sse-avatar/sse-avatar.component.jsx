import styles from './sse-avatar.module.scss'

function SseAvatar({size, src}) {
    const sizes = {
        small: 48,
        medium: 72,
        large: 128
    };

    const calculatedSize = isNaN(+size) ? sizes[size] || 72 : +size;

    return (
        <div
            className={styles.avatar}
            style={{
                width: `${calculatedSize}px`,
                height: `${calculatedSize}px`,
                background: `url(${src}) no-repeat center`
            }}
        />

    )
}

export default SseAvatar;