import React, { useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cursus() {
  const navigation = useNavigation();

  return (
    <ScrollView>
       <View style={styles.headerBanner}>
              <Image
                source={require("../../assets/images/logo_jpo.png")}
                style={styles.headerLogo}
              />
            </View>
      <View style={styles.allContainer}>
        {/* Section GEA */}

        <View style={styles.geaContainer}>
          <Text style={styles.allTitle}>
            GESTION DES ENTREPRISES ET DES ADMINISTRATIONS
          </Text>
          <Image
            source={require("@/assets/images/banniere_gea.png")}
            style={styles.allImage}
          />
          <Text style={styles.allText}>
            le BUT GEA est une formation polyvalente qui forme les étudiants aux
            métiers de la gestion dans des contextes variés : entreprises,
            associations ou administrations. En combinant théorie et pratique,
            les étudiants y apprennent les fondamentaux de la comptabilité, de
            la finance, de la gestion des ressources humaines, du management et
            de l’analyse stratégique. cette formation leur permet de maîtriser
            les outils nécessaires pour piloter les activités administratives et
            financières d’une organisation, tout en s’adaptant aux besoins du
            marché et aux évolutions économiques.
          </Text>
          <Text style={styles.allText}>
            grâce à une spécialisation progressive, les étudiants peuvent
            choisir parmi quatre parcours leur permettant de se concentrer sur
            des domaines spécifiques (voir ci-dessous). Le BUT GEA forme ainsi
            des professionnels capables de produire des solutions adaptées et
            stratégiques pour améliorer la performance des entreprises, tout en
            favorisant une gestion optimale de leurs ressources.
          </Text>

          <View style={styles.quesionnaireContainer}>
            <Image
              source={require("../../assets/images/background_logo_eiffel.png")}
              style={styles.visitBackgroundImage}
              resizeMode="cover"
            />
            <Text style={styles.questionnaireTitle}>Questionnaire</Text>
            <Text style={styles.questionnaireText}>
              Testez vos connaissances sur le monde de la gestion des
              entreprises et des administrations avec notre quiz interactif !
              Découvrez si vous êtes prêt à relever les défis du secteur !
            </Text>

            <View style={styles.questionButtonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Problemes")}
              >
                <Image
                  source={require("../../assets/images/FLECHEDROITE.png")}
                  style={styles.questionImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.parcoursContainer}>
            <Text style={styles.parcoursTitle}>Parcours</Text>
            <View style={styles.parcours}>
              <Text style={styles.parcoursSubTitle}>GC2F</Text>
              <Text style={styles.allTitle2}>
                Gestion Comptable, Fiscale et Financière
              </Text>
              <View>
                <Text style={styles.parcoursText}>
                  {
                    "• Produire l'information comptable, fiscale et sociale de l'organisation\n"
                  }
                </Text>
                <Text style={styles.parcoursText}>
                  {"• ​Évaluer l'activité de l'organisation.\n"}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.parcours}>
            <Text style={styles.parcoursSubTitle}>GC2F</Text>
            <Text style={styles.allTitle2}>
              Gestion Comptable, Fiscale et Financière
            </Text>
            <View>
              <Text style={styles.parcoursText}>
                {
                  "• Produire l'information comptable, fiscale et sociale de l'organisation\n"
                }
              </Text>
              <Text style={styles.parcoursText}>
                {"• ​Évaluer l'activité de l'organisation.\n"}
              </Text>
            </View>
          </View>

          <View style={styles.parcours}>
            <Text style={styles.parcoursSubTitle}>GC2F</Text>
            <Text style={styles.allTitle2}>
              Gestion Comptable, Fiscale et Financière
            </Text>
            <View>
              <Text style={styles.parcoursText}>
                {
                  "• Produire l'information comptable, fiscale et sociale de l'organisation\n"
                }
              </Text>
              <Text style={styles.parcoursText}>
                {"• ​Évaluer l'activité de l'organisation.\n"}
              </Text>
            </View>
          </View>

          <View style={styles.parcours}>
            <Text style={styles.parcoursSubTitle}>GC2F</Text>
            <Text style={styles.allTitle2}>
              Gestion Comptable, Fiscale et Financière
            </Text>
            <View>
              <Text style={styles.parcoursText}>
                {
                  "• Produire l'information comptable, fiscale et sociale de l'organisation\n"
                }
              </Text>
              <Text style={styles.parcoursText}>
                {"• ​Évaluer l'activité de l'organisation.\n"}
              </Text>
            </View>
          </View>
        </View>

        {/* Section MMI */}
        <View style={styles.mmiContainer}>
          <Text style={styles.allTitle}>
            MÉTIERS DU MULTIMÉDIA ET DE L'INTERNET
          </Text>
          <Image
            source={require("@/assets/images/mmi.png")}
            style={styles.allImage}
          />
          <Text style={styles.allText}>
            Le BUT MMI est une formation à la croisée des chemins entre
            technologie, design et communication. Elle prépare les étudiants à
            concevoir des projets numériques innovants en maîtrisant des
            compétences variées telles que le développement web, la création
            audiovisuelle, le graphisme ou encore la gestion de campagnes
            digitales. Idéal pour les passionnés de création et de numérique, ce
            cursus forme des profils polyvalents capables de s’adapter aux
            besoins des entreprises dans un secteur en pleine expansion.
          </Text>
          <Text style={styles.allText}>
            Dès la deuxième année, les étudiants choisissent un parcours
            spécialisé parmi trois grandes orientations : création numérique,
            développement web, ou communication digitale. Cependant à l’IUT de
            Meaux seul le parcours axé sur le developpement web est disponible.
            En général ces spécialisations leur permettent de développer une
            expertise approfondie tout en participant à des projets concrets,
            souvent en collaboration avec des professionnels. La pédagogie est
            axée sur la mise en pratique, avec des travaux en équipe et des
            outils technologiques modernes. Ce parcours favorise l'autonomie et
            la créativité, ouvrant ainsi la voie à des carrières variées dans le
            domaine du numérique, que ce soit dans des agences de communication,
            des entreprises technologiques, ou en tant qu’indépendants.
          </Text>
          <View style={styles.quesionnaireContainer}>
            <Image
              source={require("../../assets/images/background_logo_eiffel.png")}
              style={styles.visitBackgroundImage}
              resizeMode="cover"
            />
            <Text style={styles.questionnaireTitle}>Questionnaire</Text>
            <Text style={styles.questionnaireText}>
              Testez vos connaissances sur le monde de la gestion des
              entreprises et des administrations avec notre quiz interactif !
              Découvrez si vous êtes prêt à relever les défis du secteur !
            </Text>

            <View style={styles.questionButtonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Problemes")}
              >
                <Image
                  source={require("../../assets/images/FLECHEDROITE.png")}
                  style={styles.questionImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.parcoursContainer}>
            <Text style={styles.parcoursTitle}>Parcours</Text>
            <View style={styles.parcours}>
              <Text style={styles.parcoursSubTitle}>Création numérique</Text>
              <Text style={styles.allTitle2}></Text>
              <View>
                <Text style={styles.parcoursText}>
                  {
                    "• Concevoir des interfaces graphiques et visuelles ergonomiques et attractives.\n"
                  }
                </Text>
                <Text style={styles.parcoursText}>
                  {
                    "• Réaliser des vidéos, animations et montages professionnels.\n"
                  }
                </Text>
                <Text style={styles.parcoursText}>
                  {
                    "• Adapter les contenus aux différents supports numériques, comme les réseaux sociaux ou les sites web.\n"
                  }
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.parcours}>
            <Text style={styles.parcoursSubTitle}>
              Stratégie de communication numérique et design d’expérience
            </Text>
            <Text style={styles.allTitle2}></Text>
            <View>
              <Text style={styles.parcoursText}>
                {
                  "Élaborer des campagnes de communication sur les réseaux sociaux.\n"
                }
              </Text>
              <Text style={styles.parcoursText}>
                {
                  "• Analyser l’impact des actions digitales et ajuster les stratégies en conséquence.\n"
                }
              </Text>
              <Text style={styles.parcoursText}>
                {
                  "• Rédiger et produire des contenus adaptés aux cibles et aux plateformes utilisées.\n"
                }
              </Text>
            </View>
          </View>

          <View style={styles.parcours}>
            <Text style={styles.parcoursSubTitle}>
              Développement Web et dispositifs interactifs
            </Text>
            <Text style={styles.allTitle3}>*Seul parcours disponible</Text>
            <View>
              <Text style={styles.parcoursText}>
                {
                  "• Produire l'information comptable, fiscale et sociale de l'organisation\n"
                }
              </Text>
              <Text style={styles.parcoursText}>
                {"• ​Évaluer l'activité de l'organisation.\n"}
              </Text>
            </View>
          </View>
        </View>

        {/* Section TC */}
        <View style={styles.tcContainer}>
          <Text style={styles.allTitle}>TECHNIQUES DE COMMERCIALISATION</Text>
          <Image
            source={require("@/assets/images/tc.png")}
            style={styles.allImage}
          />
          <Text style={styles.allText}>
            Le BUT TC prépare les étudiants à intégrer les métiers du commerce,
            du marketing et de la relation client. Cette formation combine des
            compétences théoriques (stratégie marketing, gestion commerciale) et
            pratiques (techniques de négociation, prospection). Les étudiants
            apprennent à analyser les attentes des consommateurs, concevoir des
            plans d’action commerciale, et développer des stratégies pour
            optimiser les ventes. Le cursus met également l’accent sur la
            communication, la créativité et la maîtrise des outils numériques
            pour répondre aux nouveaux défis du commerce moderne.
          </Text>
          <Text style={styles.allText}>
            La spécialisation en deuxième et troisième année (voir ci-dessous)
            permet aux étudiants de se concentrer sur des domaines tels que le
            marketing digital, le commerce international, ou encore
            l’entrepreneuriat. Ces parcours ouvrent de nombreuses opportunités
            professionnelles dans des secteurs variés, et les diplômés sont
            particulièrement recherchés pour leur polyvalence et leur capacité à
            s’adapter à un environnement en perpétuelle évolution.
          </Text>
          <View style={styles.quesionnaireContainer}>
            <Image
              source={require("../../assets/images/background_logo_eiffel.png")}
              style={styles.visitBackgroundImage}
              resizeMode="cover"
            />
            <Text style={styles.questionnaireTitle}>Questionnaire</Text>
            <Text style={styles.questionnaireText}>
              Testez vos connaissances sur le monde de la gestion des
              entreprises et des administrations avec notre quiz interactif !
              Découvrez si vous êtes prêt à relever les défis du secteur !
            </Text>

            <View style={styles.questionButtonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Problemes")}
              >
                <Image
                  source={require("../../assets/images/FLECHEDROITE.png")}
                  style={styles.questionImage}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.parcoursContainer}>
          <Text style={styles.parcoursTitle}>Parcours</Text>
          <View style={styles.parcours}>
            <Text style={styles.parcoursSubTitle}>
              {" "}
              Business développement et management de la relation client
            </Text>
            <Text style={styles.allTitle2}></Text>
            <View>
              <Text style={styles.parcoursText}>
                {
                  "• La création de stratégies de développement commercial adaptées aux besoins des clients.\n"
                }
              </Text>
              <Text style={styles.parcoursText}>
                {
                  "• La gestion et l'animation de la relation client, avec un focus sur la fidélisation.\n"
                }
              </Text>
              <Text style={styles.parcoursText}>
                {
                  "• L'encadrement d'équipes commerciales et la gestion de la performance.\n"
                }
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.parcours}>
          <Text style={styles.parcoursSubTitle}>
            Business international : achat et vente
          </Text>
          <Text style={styles.allTitle2}></Text>
          <View>
            <Text style={styles.parcoursText}>
              {
                "La négociation et la gestion des achats et ventes dans un contexte international.\n"
              }
            </Text>
            <Text style={styles.parcoursText}>
              {
                "• La maîtrise des pratiques du commerce international, y compris les aspects logistiques et juridiques.\n"
              }
            </Text>
            <Text style={styles.parcoursText}>
              {
                "• L’adaptation des stratégies commerciales aux marchés étrangers et multiculturels.\n"
              }
            </Text>
          </View>
        </View>

        <View style={styles.parcours}>
          <Text style={styles.parcoursSubTitle}>
          Marketing digital, e-business et entreprenariat
          </Text>
          <Text style={styles.allTitle3}></Text>
          <View>
            <Text style={styles.parcoursText}>
              {
                "• La création et la gestion de sites e-commerce et la mise en place de stratégies digitales.\n"
              }
            </Text>
            <Text style={styles.parcoursText}>
              {"• L’analyse du comportement des consommateurs en ligne pour optimiser les ventes.\n"}
            </Text>
            <Text style={styles.parcoursText}>
              {"• La conception de projets entrepreneuriaux et la gestion d'entreprises numériques.\n"}
            </Text>
          </View>
        </View>

        <View style={styles.parcours}>
          <Text style={styles.parcoursSubTitle}>
          Marketing et management du point de vente
          </Text>
          <Text style={styles.allTitle3}></Text>
          <View>
            <Text style={styles.parcoursText}>
              {
                "• La gestion opérationnelle et stratégique des points de vente.\n"
              }
            </Text>
            <Text style={styles.parcoursText}>
              {"• La mise en œuvre de techniques de merchandising et d'animation commerciales.\n"}
            </Text>
            <Text style={styles.parcoursText}>
              {"• La gestion de l’expérience client en magasin pour fidéliser et augmenter les ventes.\n"}
            </Text>
          </View>
        </View>

        <View style={styles.parcours}>
          <Text style={styles.parcoursSubTitle}>
          Stratégie de marque et événementiel
          </Text>
          <Text style={styles.allTitle3}></Text>
          <View>
            <Text style={styles.parcoursText}>
              {
                "• La création et la gestion de stratégies de marque pour développer l'image d'une entreprise.\n"
              }
            </Text>
            <Text style={styles.parcoursText}>
              {"• L'organisation d’événements pour promouvoir des marques, des produits ou des services.\n"}
            </Text>
            <Text style={styles.parcoursText}>
              {"• La gestion de la communication et du marketing événementiel pour créer un impact sur le public cible.\n"}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerBanner: {
    backgroundColor: "#432683",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerLogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  allTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 10,
    marginLeft: 30,
    marginTop: 50,
  },

  allTitle2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#432683",
    alignContent: "center",
    marginBottom: 20,
  },

  allTitle3: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 20,
  },

  allContainer: {
    flex: 1,
  },
  allText: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    width: "85%",
    textAlign: "justify",
  },

  allImage: {
    width: "95%",
    height: 200,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },

  quesionnaireContainer: {
    backgroundColor: "#583E92",
    justifyContent: "center",
    marginTop: 20,
  },

  visitBackgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
    resizeMode: "contain",
    zIndex: 1,
  },

  questionButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
  },

  questionnaireTitle: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  questionnaireText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 20,
    width: "70%",
    marginBottom: 20,
  },
  questionImage: {
    marginLeft: 320,
    marginBottom: 20,
  },

  parcoursContainer: {
    justifyContent: "space-between",
    marginTop: 20,
  },

  parcours: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
  },

  parcoursTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 40,
  },

  parcoursSubTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#432683",
    alignContent: "center",
    textAlign: "center",
  },

  parcoursText: {
    lineHeight: 20,
    marginBottom: 10,
  },

  //Section GEA
  geaContainer: {
    marginBottom: 20,
  },

  //Section MMI
  mmiContainer: {
    marginBottom: 20,
  },

  //Section TC
  tcContainer: {
    marginBottom: 20,
  },
});
