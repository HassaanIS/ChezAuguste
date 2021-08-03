import Link from "next/link";
import Nav from '../components/nav';
import Contact from './contact';
import Services from './services';
import '../public/styles/Chambre_verte.css';


const Chambre_verte = () => (
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
                <p>Saepissime igitur mihi de amicitia cogitanti
                     maxime illud considerandum videri solet, utrum propter imbecillitatem atque
                      inopiam desiderata sit amicitia, ut dandis recipiendisque meritis quod quisque
                       minus per se ipse posset, id acciperet ab alio vicissimque redderet, an esset 
                       hoc quidem proprium amicitiae, sed antiquior et pulchrior et magis a natura 
                       ipsa profecta alia causa. Amor enim, ex quo amicitia nominata est, princeps
                        est ad benevolentiam coniungendam. Nam utilitates quidem etiam ab iis perc
                        ipiuntur saepe qui simulatione amicitiae coluntur et observantur temporis 
                        causa, in amicitia autem nihil fictum est, nihil simulatum et, quidquid es
                        t, id est verum et voluntarium.</p>
            </div>
            <div className="description_details">
                <h1>Prix : 600e/mois</h1>
                <h3>Surface : 10m</h3>
                <Services></Services>

                </div>
            </div>        
        </div>
        <Contact></Contact> 
</div>

    )
    export default Chambre_verte;
