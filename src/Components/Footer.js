import { Link, useLocation } from 'react-router-dom'


const Footer = () => {
    const location = useLocation()

    return (
        <footer>
            <p>
                Shayshu NR
            </p>
            {location.pathname === '/' &&
                <Link to='/About'>About</Link>}
        </footer>
    )
}

export default Footer
