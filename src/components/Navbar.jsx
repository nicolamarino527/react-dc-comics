export default function Sidebar() {

    const links = [
        { id: 1, text: 'CHARACTERS', url: '#' },
        { id: 2, text: 'COMICS', url: '#' },
        { id: 3, text: 'MOVIE', url: '#' },
        { id: 4, text: 'TV', url: '#' },
        { id: 5, text: 'GAMES', url: '#' },
        { id: 6, text: 'COLLECTIBLES', url: '#' },
        { id: 7, text: 'VIDEOS', url: '#' },
        { id: 8, text: 'FANS', url: '#', },
        { id: 9, text: 'NEWS', url: '#', },
        { id: 10, text: 'SHOP', url: '#', },
    ];

    return (
        <nav className="navebar">
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}