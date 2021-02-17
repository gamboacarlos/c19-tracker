import React, { FC } from 'react'
import styles from './Titulo.module.scss'

type Props = {
    children: string
}

const Titulo: FC <Props> = ({children}) => {
    return (
        <div className={styles.title}>
            <h1>{children}</h1>
        </div>
    )
}

export default Titulo
