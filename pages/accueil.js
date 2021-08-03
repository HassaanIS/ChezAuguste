import Link from "next/link";
import Nav from '../components/nav'
import Contact from './contact'
import '../public/styles/accueil.css';

const Accueil = () => (
<div>
<Nav></Nav>
<div className="accueil">
    <div className="home">
        <h1>Nos services : </h1>
            <div className="sections">
                <div className="services">
                    <h3>Location</h3>
                    <p>Nous proposons un service de location de biens immobiliers
                        destinés aux étudiants et aux jeunes autour de la région de Quimper.
                        Vous pourrez vous informer sur tous nos logements sur notre site.
                    </p>
                </div>
                <div className="services">
                    <h3>Blog</h3>
                    <p>Notre site comporte un blog permettant à nos clients de partager
                        leur éxpérience et donner leur avis sur nos services.
                    </p>
                </div>
                <div className="services">
                    <h3>Contact</h3>
                    <p>Nous avons mis à disposition des coordonnées afin de prendre contact avec vous
                        et prendre en compte vos retours et vous aider dans vos démarches.
                    </p>
                </div>
            </div> 
    </div>

        <div className="fonctions">
        <h1>Comment ça marche ?</h1>
        <p>Nous proposons plusieurs lieux d'hébergement dans le cadre d'une location.<br></br>
            Vous pourrez vous informez sur les différentes options de locations et en apprendre plus sur nos offres.<br></br>
            Consultez notre page de location et informez vous sur l'adresse, la surface ou même le prix de nos biens immobiliers.<br></br><br></br>
            Vous pouvez nous contacter avec les différents numéros de téléphones et e-mails mis à votre disposition
            et nous laisser vos avis sur nos services si besoin dans la section blog.<br></br><br></br>
            Nous avons mis à votre disposition une page de FAQ afin de pouvoir répondre aux questions les plus fréquentes
            et vous aider le plus efficacement possible.
        </p>
    </div>

    <div className="locations">
        <h1>Nos Résidences : </h1>
            <div className="locations_text">
                <img src='https://www.avis-etudiant.fr/media/cache/residence_large/aHR0cHM6Ly93d3cuYWRlbGUub3JnL2Fzc2V0cy1jYWNoZS9mdWxsL2ZpbGVzX3Jlc2lkZW5jZV9waG90by82LzcvYy82N2M2YTFlN2NlNTZkM2Q2ZmE3NDhhYjZkOWFmM2ZkNy9jN2MwMTk1Y2UzYTk2MGJjNGQ3YmJlYzM3MDYwZmZjMC5qcGVn.jpeg'></img>
                    <div className='locations_subtext'>
                    <div className="locations_head">
                            <h2>Appartement Dieppe</h2>
                            <h4 className="locations_num">Numéro : 02.67.18.31099</h4>
                        </div>
                        <h4>82 Cours Marechal-Joffre</h4>
                        <h3>Description :</h3>
                        <p>Omitto iuris dictionem in libera civitate contra leges senatusque consulta; caedes relinquo; libidines praetereo, quar
                            um acerbissimum extat indicium et ad insignem memoriam turpitudinis et paene ad iustum odium imperii nostri, quod constat nobilissimas vir
                            gines se in puteos abiecisse et morte voluntaria necessariam turpitudinem depulisse. Nec haec idcirco omitto, quod non gravissima sint, sed quia nunc sine teste dico.
                        </p>
                    </div>
            </div>

            <div className="locations_text">
                <img src='https://www.nexity.fr/media/8748/download/investir-residence-etudiante.jpg?v=1'></img>
                    <div className='locations_subtext'>
                        <div className="locations_head">
                            <h2>Appartement Montfermeil</h2>
                            <h4 className="locations_num">Numéro : 01.94.46.60054</h4>
                        </div>
                        <h4>140 Rue de Verdun</h4>
                        <h3>Description :</h3>
                        <p>Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter proficiscere inquit ut praeceptum est
                            , Caesar sciens quod si cessaveris, et tuas et palatii tui auferri iubebo prope diem annonas. hocque solo contumacite
                            r dicto subiratus abscessit nec in conspectum eius 
                            postea venit saepius arcessitus.
                        </p>
                    </div>
            </div><br></br>
        <br></br>
    <Link href="/location">
        
<a className="locations_button" title="Visitez nos offres de location">Voir plus</a>
    </Link>
</div>
</div> 
<Contact></Contact> 

</div>)
export default Accueil;  
