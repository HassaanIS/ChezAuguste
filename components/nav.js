import Link from "next/link";
import '../public/styles/nav.css';

const Header = () => (
     <div className="App">
          <div className="nav">
          <h1>Chez Auguste</h1>
          <ul>
               <li> 
                    <Link href="/accueil">
                          <a title="Découvrez nos services">Accueil</a>
                    </Link>
               </li>
               <li>
                    <Link href="/blog">
                         <a title="Visitez notre blog">Blog</a>
                    </Link>
               </li>
               <li>
                    <Link href="/location">
                         <a title="Visitez nos offres de location">Location</a>
                     </Link>
               </li>
               <li>
                    <Link href="/contact">
                      <a title="Contactez nous">Contact</a>
                    </Link>
               </li>
          </ul>
         <a className="connect_button">Connexion</a>
         </div>
         </div>
);

export default Header;
