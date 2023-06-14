import SseAvatar from "../../components/sse-avatar/sse-avatar.component";
import SseButton from "../../components/sse-button/sse-button.component";
import styles from './myPage.module.scss'
import {useEffect, useState} from "react";

function MyPage() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then(({results: [data]}) => {
                setInfo(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        info && (
            <div className={styles.my_page}>
                <div className={styles.photo_block}>
                    <SseAvatar
                        src={info.picture.large}
                        size="large"
                    />
                    <SseButton>
                        Edit
                    </SseButton>
                </div>
                <div className={styles.info_block}>
                    <div className={styles.info_field}>
                        <p className={styles.label}>Name: </p>
                        <p className={styles.value}>{`${info.name.title} ${info.name.first} ${info.name.last}`}</p>
                    </div>
                    <div className={styles.info_field}>
                        <p className={styles.label}>Gender: </p>
                        <p className={styles.value}>{info.gender}</p>
                    </div>
                    <div className={styles.info_field}>
                        <p className={styles.label}>Age: </p>
                        <p className={styles.value}>{info.dob.age}</p>
                    </div>
                    <div className={styles.info_field}>
                        <p className={styles.label}>Phone: </p>
                        <p className={styles.value}>{info.phone}</p>
                    </div>
                    <div className={styles.info_field}>
                        <p className={styles.label}>Email: </p>
                        <p className={styles.value}>{info.email}</p>
                    </div>
                    <div className={styles.info_field}>
                        <p className={styles.label}>Login: </p>
                        <p className={styles.value}>{info.login.username}</p>
                    </div>
                </div>
            </div>
        )
    )
}

export default MyPage;