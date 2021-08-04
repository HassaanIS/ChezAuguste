import Link from "next/link";
import Nav from '../components/nav';
import Contact from './contact';
import Services from './services';
import '../public/styles/Chambre_verte.css';


const Chambre_jaune = () => (
<div>
    <Nav></Nav>
<div>
            <div className="images">
                <img class="LargeImg"src='https://static.cotemaison.fr/medias_11918/w_2000,h_1119,c_crop,x_0,y_137/w_640,h_360,c_fill,g_north/v1547047114/kitchenette-chambre-de-bonne-1_6102297.jpg'></img>
                <div className="imagesColumn">
                    <img class="borderImg"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfRCjZgLlk_hScR8isFgMgdrn3hd8c7G0oqxRNlTh6OT0O7e-eTERw7dfrOR4wp2QiGs&usqp=CAU'></img>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScziPvVk6mYHH9610onwQJX65R__pp6Au3LyZXdvvobjPitDCwai4LrfSoW8uJ9P0JD-8&usqp=CAU'></img>
                </div>
                </div>

        <div className="description">
            <div className="description_info">
                <h1>Appartement Provence-Alpes-Côte d'Azur</h1>
                <h3>Provence-Alpes-Côte d'Azur 13016</h3>
                <h4>Disponibilité : 05/08/2021</h4>
                <h2>Description : </h2>
                <p>Hanc regionem praestitutis celebritati diebus invadere parans dux ante edictus per solitudines Aboraeque amnis herbidas ripas, suorum indicio proditus, qui admissi flagitii metu
                     exagitati ad praesidia descivere Romana. absque ullo egressus effectu
                      deinde tabescebat immobilis.</p>
                      <h2>Contact : 0762546362</h2>
            </div>
            <div className="description_details">
                <h1>Prix : 450€/mois</h1>
                <h3>Surface : 9m</h3>
                <Services></Services>

                </div>
            </div>        
        </div>
        <Contact></Contact> 
</div>

    )
    export default Chambre_jaune;
