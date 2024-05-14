import './services_style.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

function Services() {
    return (
        <div class="cards-box">
            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
                <div class="card">
                    <img src={require("../files/images/services/photo-interieur.jpeg")} alt="Placeholder Image" />
                    <div class="card-content">
                        <h2 class="card-title">Photographie intérieure</h2>
                        <p class="card-text">Notre service de photographie intérieure déploie une expertise professionnelle pour capturer avec précision chaque détail et nuance de votre espace. Chaque cliché est méticuleusement composé pour mettre en lumière l'architecture, le design et l'ambiance, révélant ainsi l'essence même de votre propriété. Que ce soit pour des résidences haut de gamme, des locaux commerciaux ou des espaces professionnels, nos photographies intérieures captivent l'attention et renforcent la perception de qualité et de prestige, offrant ainsi un outil puissant pour votre stratégie de marketing immobilier.</p>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                <div class="card">
                    <div class="card-content">
                        <h2 class="card-title">Photographie aérienne</h2>
                        <p class="card-text">Découvrez une nouvelle dimension du marketing immobilier grâce à nos services de photographie par drone. Nos photographes experts capturent des images aériennes impressionnantes qui enrichissent vos annonces immobilières. Ces images captivantes offrent aux acheteurs potentiels une vue époustouflante de la propriété et de son environnement, mettant en lumière les caractéristiques clés qui la distinguent des autres.</p>
                    </div>
                    <img src={require("../files/images/services/photo-drone.jpeg")} alt="Placeholder Image" />
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInRight'animateOnce={true} >
                <div class="card">
                    <img src={require("../files/images/services/plan.jpg")} alt="Placeholder Image" />
                    <div class="card-content">
                        <h2 class="card-title">Plans 2D/3D</h2>
                        <p class="card-text">Notre service de plans 2D/3D offre une perspective précise et détaillée de votre propriété. Grâce à notre expertise en modélisation et en rendu, nous créons des plans qui capturent chaque aspect de l'espace avec une clarté exceptionnelle. Que ce soit pour la présentation de biens immobiliers, la planification de rénovations ou la visualisation de projets futurs, nos plans 2D/3D fournissent des outils visuels puissants pour aider nos clients à prendre des décisions éclairées et à concrétiser leur vision.</p>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                <div class="card">
                    <div class="card-content">
                        <h2 class="card-title">Vidéographie immobilière</h2>
                        <p class="card-text">Notre service de vidéographie immobilière donne vie à votre propriété grâce à des vidéos captivantes et professionnelles. Que ce soit pour présenter une maison, un appartement, un terrain ou un espace commercial, nos vidéos immobilières offrent une expérience immersive aux spectateurs, les aidant à se projeter et à se connecter émotionnellement avec la propriété. Avec une attention particulière aux détails et à l'esthétique, nous vous offrons un outil puissant pour attirer l'attention des acheteurs potentiels et pour mettre en valeur le potentiel de votre bien immobilier
                        </p>
                    </div>
                    <img src={require("../files/images/services/video.jpg")} alt="Placeholder Image" />
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
                <div class="card">
                    <img src={require("../files/images/services/v-staging.jpg")} alt="Placeholder Image" />
                    <div class="card-content">
                        <h2 class="card-title">Staging virtuel</h2>
                        <p class="card-text">Notre service de staging virtuel transforme virtuellement les espaces vides en intérieurs chaleureux et accueillants. Que ce soit pour les biens immobiliers vides ou pour réaménager des espaces existants, notre staging virtuel permet aux acheteurs potentiels de se projeter dans la propriété, facilitant ainsi la vente en mettant en valeur le potentiel de chaque pièce. Avec notre service de staging virtuel, nous vous offrons un moyen efficace de maximiser l'attrait de votre propriété sur le marché immobilier.</p>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default Services