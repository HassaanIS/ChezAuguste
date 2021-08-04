import Link from "next/link";
import Nav from '../components/nav'
import Contact from './contact'
import '../public/styles/location.css';


const Location = () => (
    <div>
        
    <Nav></Nav>
    <div className="preview">


    <div className='location_title'>
        <h1>Nos logements :</h1>
        <h2>3 logements disponibles </h2>
    </div>
    <div className="location_prev">

        <div className="prev_img">
            <img src="https://www.immoz.info/wp-content/uploads/2017/11/appartement.jpg"></img>
        </div>
        <div className="prev_text">
            <h1>Appartement Pantin</h1>
                <h3>Pantin 93500</h3>
                <h4>Disponibilité : 29/07/2021</h4>
                <p>Siquis enim militarium vel honoratorum aut nobilis inter suos rumore tenus esset
                    insimulatus fovisse partes hostiles, iniecto onere catenarum in modum beluae trahebatur et inimico
                    urgente vel nullo, quasi sufficiente hoc solo, quod nominatus 
                    esset aut delatus aut postulatus, capite vel multatione bonorum aut insulari solitudine damnabatur.</p>
        </div>
        <div className="prev_price">
            <h1>600€/mois</h1>
            <Link href="/chambre_bleu">
        <a className="chambre_link" title="Détails sur nos chambres">Voir plus</a>
            </Link>
        </div>

    </div>

    <div className="location_prev">

        <div className="prev_img">
            <img src="https://www.adele.org/assets-cache/full/files_residence_photo/3/c/5/3c59dc048e8850243be8079a5c74d079/335f89ac50b483a00319990e7c8ae6dc.webp"></img>
        </div>
        <div className="prev_text">
            <h1>Appartement Provence-Alpes-Côte d'Azur</h1>
                <h3>Provence-Alpes-Côte d'Azur 13016</h3>
                <h4>Disponibilité : 05/08/2021</h4>
                <p>Hanc regionem praestitutis celebritati diebus invadere parans dux ante edictus per solitudines Aboraeque amnis herbidas ripas, suorum indicio proditus, qui admissi flagitii metu
                     exagitati ad praesidia descivere Romana. absque ullo egressus effectu
                      deinde tabescebat immobilis.</p>
        </div>
        <div className="prev_price">
            <h1>450€/mois</h1>
            <Link href="/chambre_jaune">
        <a className="chambre_link" title="Détails sur nos chambres">Voir plus</a>
            </Link>
        </div>

    </div>

    <div className="location_prev">

        <div className="prev_img">
            <img src="http://www.location-en-france.com/images/location-appartement-etudiant_3.jpg"></img>
        </div>
        <div className="prev_text">
            <h1>Appartement SAINT-PIERRE-ET-MIQUELON</h1>
                <h3>SAINT-PIERRE-ET-MIQUELON 97500</h3>
                <h4>Disponibilité : 02/09/2021</h4>
                <p>Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem
                     oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis 
                    appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.</p>
        </div>
        <div className="prev_price">
            <h1>575€/mois</h1>
            <Link href="/chambre_verte">
        <a className="chambre_link" title="Détails sur nos chambres">Voir plus</a>
            </Link>
        </div>

        </div>

</div>
<Contact></Contact>
</div>
    )
    export default Location;