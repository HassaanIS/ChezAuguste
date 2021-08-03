import Link from "next/link";
import Nav from '../components/nav'
import '../public/styles/contact.css';


const Contact = () => (
    <div>
        <div className='footer'>
    <h1>Contact</h1>
      <div className="info">

            <div className="contact_info">
                <h2>Qui somme nous ?</h2>
                <p>- 112 rue de la République (69003)</p>
                <p>- Informations légales</p>
            </div>

            <div className="contact_info">
                <h2>Contact et Support</h2>
                <p>- Comment louer ?</p>
                <p>- FAQ</p>
                <p>- Téléphone : 04.22.82.24770</p>
                <p>- Mail: exemple@gmail.com</p>
            </div>
      </div>
      <p className="mention">ChambresEtudiantes @2021-2022</p>
</div>

    </div>)
    export default Contact;