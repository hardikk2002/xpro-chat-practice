import React from 'react';
import styles from './Join.module.scss';
import Link from 'next/link';

function Join() {
    const [name, setName] = React.useState('');
    const [room, setRoom] = React.useState('');

    return (
        <div className={styles.joinOuterContainer}>
            <div className={styles.joinInnerContainer}>
                <h1 className={styles.heading}>Room</h1>
                <div>
                    <input placeholder="Name" className={styles.joinInput} type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className={[styles.joinInput, styles.mt20].join(' ')} type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link href={`/Chat/Chat?name=${name}&room=${room}`}>
                    <button
                        className={[styles.button, styles.mt20].join(' ')}
                        type="submit"
                        onClick={e => (!name || !room) ? e.preventDefault() : null}
                    >Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join
