import React from 'react'

export default function Heros({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    );
}

Heros.defaultProps = {
    hero:'defaultHero'
}
