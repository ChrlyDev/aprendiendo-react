import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'chrlydev',
        name: 'Carlos Alberto Franco',
        isFollowing: false
    },
    {
        userName: 'PacoHdz',
        name: 'Paco Hernandez',
        isFollowing: false
    },
    {
        userName: 'mouredev',
        name: 'Brais Moure',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}