import Link from "next/link";
import Nav from '../components/nav'
import Contact from './contact'
import '../public/styles/location.css';


const Location = () => (
    <div>
        
    <Nav></Nav>
    <div className="preview">

    <div className="ville_desc">
        <p>Quimper est une commune française de la région Bretagne située dans le nord-ouest de la France. La ville est le chef-lieu du département du Finistère, le siège du Conseil départemental, ainsi que des deux cantons qui la composent. Elle est également la capitale traditionnelle de la Cornouaille, du Pays Glazik et du Pays de Cornouaille qui compte 331 300 habitants en 2009, le siège de l'intercommunalité de Quimper Bretagne occidentale qui compte 100 187 habitants en 2014, le siège de l'arrondissement de Quimper et enfin le siège du diocèse de Quimper et Léon. Ses habitants sont appelés les Quimpérois.

            Autrefois très réduit, son territoire communal a été très agrandi à compter du 1er janvier 1960 par l'annexion des trois communes limitrophes de Kerfeunteun (3 216 hectares), Ergué-Armel (3 356 ha) et Penhars (1 502 ha). La commune de Quimper, avant 1960, couvrait 192 hectares, ce qui en faisait le moins vaste chef-lieu de département français. Avec 63 513 habitants en 2014, elle est la 80e commune de France, la 3e de la région Bretagne (après Rennes et Brest) et la 2e du Finistère au regard de la population2. Son unité urbaine est de 79 804 habitants en 20143 et son aire urbaine est de 126 730 habitants en 20144 soit la 2e aire urbaine du département après celle de Brest. La ville est traversée par quatre cours d'eau : l'Odet et ses trois principaux affluents, le Steïr, le Frout et le Jet.

            La ville est classée ville d'art et d'histoire5, elle a aussi obtenu deux autres récompenses, celle de l'obtention de quatre fleurs au concours des villes et villages fleuris.

            Selon des études, Quimper se classait en 2e position des villes françaises où il faisait bon vivre en 20178, 13e commune la moins pauvre de France en 20129 et 1re agglomération comprise entre 70 000 et 100 000 habitants où il fait bon d'entreprendre en 201610.</p>
    </div>


    <div className='location_title'>
        <h1>Nos logements :</h1>
        <h2>35 logements disponibles </h2>
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