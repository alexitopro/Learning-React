import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    //por defecto el nombre es midudev
    const [ userName, setUserName] = useState('midudev')

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo Hernandez',
            isFollowing: false
        },
        {
            userName: 'messi10',
            name: 'Lionel Messi',
            isFollowing: false
        }
    ]

    return (
        <>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            name={name}
                            isFollowing={isFollowing}
                        />
                    )
                })
            }
        </>
    )
}