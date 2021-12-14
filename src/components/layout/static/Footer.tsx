import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="links">
                <ul className="link-part">
                    <p className="links-title">Main</p>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><a href="https://pzwiki.net/wiki/Main_Page" target='_blank'>PzWiki</a></li>
                    <li><a href="https://store.steampowered.com/app/108600/Project_Zomboid/" target='_blank'>Get project zomboid</a></li>
                </ul>
                <ul className="link-part">
                    <p className="links-title">Coming soon</p>
                    <li><a href="#" target='_blank'>PzApi</a></li>
                </ul>
                <ul className="link-part">
                    <p className="links-title">Misc</p>
                    <li><Link className='upper' to={'/faqs'}>Faq</Link></li>
                    <li><Link to={'/updates'}>Updates</Link></li>
                </ul>
            </div>
            <address>PzCompare | Copyright &copy; Isolated 2021 </address>
        </footer>
    )
}

export default Footer
