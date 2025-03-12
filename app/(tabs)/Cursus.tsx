import React, { useEffect } from "react";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";

export default function Cursus() {
  return (
    <ScrollView style={styles.cursusContainer}>
      <View id="mmi" style={styles.section}>
        {/* Title Section */}
        <Text style={styles.mainTitle}>
          GESTION DES ENTREPRISES ET DES ADMINISTRATIONS
        </Text>

        {/* Full-Width Image */}
        {/* <View style={styles.imageContainer}></View> */}

        {/* Text and Questionnaire Section */}
        <View style={styles.textQuestionnaire}>
          {/* Left Text */}
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText}>
              Le BUT GEA est une formation polyvalente qui forme les étudiants
              aux métiers de la gestion dans des contextes variés : entreprises,
              associations ou administrations. En combinant théorie et pratique,
              les étudiants y apprennent les fondamentaux de la comptabilité, de
              la finance, de la gestion des ressources humaines, du management
              et de l’analyse stratégique. Cette formation leur permet de
              maîtriser les outils nécessaires pour piloter les activités
              administratives et financières d’une organisation, tout en
              s’adaptant aux besoins du marché et aux évolutions économiques.
            </Text>

            <Text style={[styles.descriptionText, styles.descriptionText2]}>
              Grâce à une spécialisation progressive, les étudiants peuvent
              choisir parmi quatre parcours leur permettant de se concentrer sur
              des domaines spécifiques (voir ci-dessous) Le BUT GEA forme ainsi
              des professionnels capables de produire des solutions adaptées et
              stratégiques pour améliorer la performance des entreprises, tout
              en favorisant une gestion optimale de leurs ressources.
            </Text>
          </View>

          {/* Right Section */}
          <View style={styles.questionnaireSection}>
            <Text style={styles.questionnaireTitle}>QUESTIONNAIRE</Text>
            <Text style={styles.questionnaireText}>
              Testez vos connaissances sur le monde de la gestion des
              entreprises et des administrations avec notre quiz interactif !
              Découvrez si vous êtes prêt à relever les défis du secteur !
            </Text>
            <View style={styles.buttonSection}>
              {/* <Link
                to="/visiteur/probleme"
                component={Button}
                title="Accedez ici"
              /> */}
            </View>
          </View>
        </View>

        {/* Parcours Section */}
        <Text style={styles.parcoursTitle}>PARCOURS</Text>

        <View style={styles.parcoursContainer}>
          {/* Card 1 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>Parcours GC2F :</Text>
            <Text style={styles.subtitleCard}>
              Gestion Comptable, Fiscale et Financière
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                Produire l'information comptable, fiscale et sociale de
                l'organisation.
              </Text>
              <Text style={styles.cardLi}>
                ​Évaluer l'activité de l'organisation.
              </Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>Parcours CG2P :</Text>
            <Text style={styles.subtitleCard}>
              Contrôle de Gestion et Pilotage de la Performance
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                Concevoir des outils de contrôle de gestion.
              </Text>
              <Text style={styles.cardLi}>
                Mettre en œuvre des leviers d’amélioration continue des
                performances de l’organisation.
              </Text>
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>Parcours GPRH :</Text>
            <Text style={styles.subtitleCard}>
              Gestion et Pilotage des Ressources Humaines
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                Gérer l’administration du personnel.
              </Text>
              <Text style={styles.cardLi}>
                Gérer le développement des ressources humaines.
              </Text>
            </View>
          </View>

          {/* Card 4 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>Parcours GEMA :</Text>
            <Text style={styles.subtitleCard}>
              Gestion, Entrepreneuriat et Management d'Activités
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                Concevoir la stratégie de création de valeur.
              </Text>
              <Text style={styles.cardLi}>
                Assurer la gestion et le développement de la chaine de valeur​
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View id="gea" style={styles.section}>
        {/* Title Section */}
        <Text style={styles.mainTitle}>
          MÉTIERS DU MULTIMÉDIA ET DE L'INTERNET
        </Text>

        {/* Full-Width Image */}
        <View style={styles.imageContainer2}></View>

        {/* Text and Questionnaire Section */}
        <View style={styles.textQuestionnaire2}>
          {/* Left Section */}
          <View style={styles.questionnaireSection2}>
            <Text style={styles.questionnaireTitle2}>QUESTIONNAIRE</Text>
            <Text style={styles.questionnaireText}>
              Plongez dans l'univers numérique et créatif avec notre quiz sur
              les métiers du multimédia et de l'internet ! Testez vos
              connaissances sur le développement web, le design et la
              communication digitale !
            </Text>
            <View style={styles.buttonSection}>
              {/* <Link
                to="/visiteur/probleme"
                component={Button}
                title="Accedez ici"
              /> */}
            </View>
          </View>

          {/* Right Text */}
          <View style={styles.descriptionSection2}>
            <Text style={styles.descriptionText}>
              Le BUT MMI est une formation à la croisée des chemins entre
              technologie, design et communication. Elle prépare les étudiants à
              concevoir des projets numériques innovants en maîtrisant des
              compétences variées telles que le développement web, la création
              audiovisuelle, le graphisme ou encore la gestion de campagnes
              digitales. Idéal pour les passionnés de création et de numérique,
              ce cursus forme des profils polyvalents capables de s’adapter aux
              besoins des entreprises dans un secteur en pleine expansion..
            </Text>

            <Text style={[styles.descriptionText, styles.descriptionText2]}>
              Dès la deuxième année, les étudiants choisissent un parcours
              spécialisé parmi trois grandes orientations : création numérique,
              développement web, ou communication digitale. Cependant à l’IUT de
              Meaux seul le parcours axé sur le developpement web est
              disponible. En général ces spécialisations leur permettent de
              développer une expertise approfondie tout en participant à des
              projets concrets, souvent en collaboration avec des
              professionnels. La pédagogie est axée sur la mise en pratique,
              avec des travaux en équipe et des outils technologiques modernes.
              Ce parcours favorise l'autonomie et la créativité, ouvrant ainsi
              la voie à des carrières variées dans le domaine du numérique, que
              ce soit dans des agences de communication, des entreprises
              technologiques, ou en tant qu’indépendants.
            </Text>
          </View>
        </View>

        {/* Parcours Section */}
        <Text style={styles.parcoursTitle}>PARCOURS</Text>

        <View style={styles.parcoursContainer}>
          {/* Card 1 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>création numérique</Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                Produire l'information comptable, fiscale et sociale de
                l'organisation.
              </Text>
              <Text style={styles.cardLi}>
                Réaliser des vidéos, animations et montages professionnels.
              </Text>
              <Text style={styles.cardLi}>
                Adapter les contenus aux différents supports numériques, comme
                les réseaux sociaux ou les sites web.
              </Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>
              stratégie de communication numérique et design d’expérience
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                Élaborer des campagnes de communication sur les réseaux sociaux.
              </Text>
              <Text style={styles.cardLi}>
                Analyser l’impact des actions digitales et ajuster les
                stratégies en conséquence.
              </Text>
              <Text style={styles.cardLi}>
                Rédiger et produire des contenus adaptés aux cibles et aux
                plateformes utilisées.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.parcoursCard2}>
          {/* Card 3 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>
              développement Web et dispositifs interactifs
            </Text>
            <Text style={styles.subtitleCard}>* seul parcours disponible</Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                Créer et maintenir des sites web et applications interactives.
              </Text>
              <Text style={styles.cardLi}>
                Optimiser les performances et la sécurité des plateformes
                numériques.​
              </Text>
              <Text style={styles.cardLi}>
                Développer des solutions mobiles pour répondre aux besoins
                actuels des utilisateurs.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View id="tc" style={styles.section}>
        {/* Title Section */}
        <Text style={styles.mainTitle}>TECHNIQUES DE COMMERCIALISATION</Text>

        {/* Full-Width Image */}
        <View style={styles.imageContainer3}></View>

        {/* Text and Questionnaire Section */}
        <View style={styles.textQuestionnaire}>
          {/* Left Text */}
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText}>
              Le BUT TC prépare les étudiants à intégrer les métiers du
              commerce, du marketing et de la relation client. Cette formation
              combine des compétences théoriques (stratégie marketing, gestion
              commerciale) et pratiques (techniques de négociation,
              prospection). Les étudiants apprennent à analyser les attentes des
              consommateurs, concevoir des plans d’action commerciale, et
              développer des stratégies pour optimiser les ventes. Le cursus met
              également l’accent sur la communication, la créativité et la
              maîtrise des outils numériques pour répondre aux nouveaux défis du
              commerce moderne.
            </Text>

            <Text style={[styles.descriptionText, styles.descriptionText2]}>
              La spécialisation en deuxième et troisième année (voir ci-dessous)
              permet aux étudiants de se concentrer sur des domaines tels que le
              marketing digital, le commerce international, ou encore
              l’entrepreneuriat. Ces parcours ouvrent de nombreuses opportunités
              professionnelles dans des secteurs variés, et les diplômés sont
              particulièrement recherchés pour leur polyvalence et leur capacité
              à s’adapter à un environnement en perpétuelle évolution.
            </Text>
          </View>

          {/* Right Section */}
          <View style={styles.questionnaireSection}>
            <Text style={styles.questionnaireTitle}>QUESTIONNAIRE</Text>
            <Text style={styles.questionnaireText}>
              Mettez vos compétences commerciales à l'épreuve avec notre
              questionnaire ludique sur les techniques de commercialisation !
              Êtes-vous prêt à briller dans le domaine du marketing et de la
              relation client ?
            </Text>
            <View style={styles.buttonSection}>
              {/* <Link
                to="/visiteur/probleme"
                component={Button}
                title="Accedez ici"
              /> */}
            </View>
          </View>
        </View>

        {/* Parcours Section */}
        <Text style={styles.parcoursTitle}>PARCOURS</Text>

        <View style={styles.parcoursContainer}>
          {/* Card 1 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>
              business développement et management de la relation client
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                La création de stratégies de développement commercial adaptées
                aux besoins des clients.
              </Text>
              <Text style={styles.cardLi}>
                La gestion et l'animation de la relation client, avec un focus
                sur la fidélisation.
              </Text>
              <Text style={styles.cardLi}>
                ​L'encadrement d'équipes commerciales et la gestion de la
                performance.
              </Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>
              business international : achat et vente
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                La négociation et la gestion des achats et ventes dans un
                contexte international.
              </Text>
              <Text style={styles.cardLi}>
                La maîtrise des pratiques du commerce international, y compris
                les aspects logistiques et juridiques.
              </Text>
              <Text style={styles.cardLi}>
                L’adaptation des stratégies commerciales aux marchés étrangers
                et multiculturels.
              </Text>
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>
              marketing digital, e-business et entrepreneuriat
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                La création et la gestion de sites e-commerce et la mise en
                place de stratégies digitales.
              </Text>
              <Text style={styles.cardLi}>
                L’analyse du comportement des consommateurs en ligne pour
                optimiser les ventes.
              </Text>
              <Text style={styles.cardLi}>
                La conception de projets entrepreneuriaux et la gestion
                d'entreprises numériques.
              </Text>
            </View>
          </View>

          {/* Card 4 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>
              marketing et management du point de vente
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                La gestion opérationnelle et stratégique des points de vente.
              </Text>
              <Text style={styles.cardLi}>
                La mise en œuvre de techniques de merchandising et d'animation
                commerciales.​
              </Text>
              <Text style={styles.cardLi}>
                La gestion de l’expérience client en magasin pour fidéliser et
                augmenter les ventes.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.parcoursCard2}>
          {/* Card 5 */}
          <View style={styles.parcoursCard}>
            <Text style={styles.cardTitle}>
              stratégie de marque et événementiel
            </Text>
            <View style={styles.cardUl}>
              <Text style={styles.cardLi}>
                La création et la gestion de stratégies de marque pour
                développer l'image d'une entreprise.
              </Text>
              <Text style={styles.cardLi}>
                L'organisation d’événements pour promouvoir des marques, des
                produits ou des services.
              </Text>
              <Text style={styles.cardLi}>
                La gestion de la communication et du marketing événementiel pour
                créer un impact sur le public cible.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cursusContainer: {
    width: "90%",
    margin: "auto",
  },
  mainTitle: {
    color: "#432683",
    textAlign: "left",

    marginTop: 30,
    fontFamily: "TT Norms Pro Bold",
    fontSize: 30,
  },
  descriptionText: {
    fontSize: 22.4, // équivalent de 1.4rem
  },
  descriptionText2: {
    marginTop: 30,
  },
  imageContainer: {
    width: "100%",
    height: 500,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  textQuestionnaire: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginTop: 80,
  },
  descriptionSection: {
    padding: 16,
    textAlign: "left",
  },
  questionnaireSection: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  questionnaireTitle: {
    fontSize: 32, // équivalent de 2rem
    color: "#432683",
  },
  buttonSection: {
    marginTop: 20,
    textAlign: "right",
  },
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#654ea3",
    borderRadius: 6,
    fontSize: 16, // équivalent de 1rem
    width: 150,
    textAlign: "center",
    color: "white",
    textDecorationLine: "none",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  ctaButtonText: {
    color: "white",
  },
  parcoursTitle: {
    fontSize: 32, // équivalent de 2rem
    color: "#432683",
    textAlign: "left",
    marginTop: 24,
  },
  parcoursContainer: {
    marginTop: 100,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: 30,
    rowGap: 100,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    justifyItems: "center",
  },
  parcoursCard2: {
    justifyItems: "center",
    marginTop: 30,
  },
  parcoursCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#432683",
    borderRadius: 40,
    height: "100%",
    width: "100%",
    maxWidth: 700,
    maxHeight: 450,
    marginBottom: 40,
  },
  cardTitle: {
    color: "#432683",
    marginTop: 0,
    fontSize: 32, // équivalent de 2rem
  },
  cardLi: {
    textAlign: "left",
    fontSize: 19.2, // équivalent de 1.2rem
    marginBottom: 50,
  },
  cardUl: {
    width: "80%",
    marginTop: 50,
    marginBottom: 20,
  },
  subtitleCard: {
    color: "#432683",
    fontFamily: "TT Norms Pro Bold",
    marginBottom: 30,
  },
  textQuestionnaire2: {
    display: "flex",
    flexDirection: "column",
    gap: 60,
  },
  questionnaireSection2: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  questionnaireTitle2: {
    marginTop: 0,
    color: "#432683",
  },
});
