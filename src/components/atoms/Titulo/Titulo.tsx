import React, { FC } from 'react'

type Props = {
    children: string
}

const Titulo: FC <Props> = ({children}) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}

export default Titulo
