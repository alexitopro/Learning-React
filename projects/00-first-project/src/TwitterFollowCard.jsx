import { useState } from 'react'

export function TwitterFollowCard ({ userName, name}) {
    const imageSrc = `https://unavatar.io/${userName}`

    const [ isFollowing, setIsFollowing ] = useState(false)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar de midudev" 
                    src={imageSrc}></img>

                <div
                    className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followCard-infoUserName'
                    >@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}    
                </button>    
            </aside>            
        </article>
    )
}