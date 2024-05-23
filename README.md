# Solution pour les exercices

## Exercice 1

- Créez un composant bouton à l’aide de Bootstrap et React.
- Vous pouvez trouver la documentation Bootstrap ci-dessous [here](https://getbootstrap.com/docs/5.3/components/buttons/)
Nous voulons créer un composant React qui agira comme un wrapper autour d'un simple bouton Bootstrap.

## Exercice 2

Utilisez le composant Bouton précédent.
Lorsque ce composant est cliqué, affichez une alerte désactivable.

- Créez une alerte désactivable en utilisant la documentation Bootstrap.  
  La documentation pour créer un bouton désactivable est accessible à partir de ce lien [here](https://getbootstrap.com/docs/5.3/components/alerts/#dismissing)

## Exercice 3

Créez un composant `Like` qui est affiché à l’aide d’un coeur.

- Dans cet exercice, vous allez utiliser la bibliothèque `react-icons` pour afficher une icône de coeur remplie si le composant est aimé ou une icône de coeur vide s'il n'est pas aimé.
- L'utilisateur peut aimer ou ne pas aimer en cliquant sur le composant. Le composant passera d'un cœur rempli à un cœur vide et vice-versa.
- Le composant parent doit être notifié en cas de like ou de dislike du composant

## Exercice 4

Creez une application e-commerce..

Dans cette application il y aura 2 principaux composants

1. ItemCounter. Ce composant comptera le nombre d'articles que nous avons dans notre panier.
2. Cart. Ce composant contiendra les articles. Ce composant sera vide par défaut et disposera de deux boutons ("Ajouter", "Retirer").
En cliquant sur le bouton "Ajouter", un article est ajouté au panier.
En cliquant sur le bouton "Retirer", un article est retiré du panier.
Pour des raisons de simplicité, les articles créés dans le panier porteront un nom par défaut tel que item1, item2, …

## Exercice 5

Dans cette application, vous allez afficher une liste de villes à l'utilisateur.  
Chaque fois qu'une ville est sélectionnée, elle est surlignée en bleu et son nom apparaît dans un élément de badge situé en dessous.  

Cette application sera composée de 4 composants React avec la hiérarchie de composants suivante
- App.
  - ListGroup.
    - ListGroupItem.
  - SelectedCity.

**App**: Le composant principal qui contient les composants ListGroup et SelectedCity.

**ListGroup**: Affiche une liste non ordonnée de noms de villes.
Prend 3 paramètres  
	- items: contenant la liste des villes.  
	- heading: un en-tête qui sera affiché en haut du composant.  
	- Un autre attribut pour signaler l'élément sélectionné au composant parent.  
L'élément <ul/> doit avoir la classe `list-group`.

**ListGroupItem**: Un élément de liste (`<li/>`)  
Prend 3 paramètres  
	- text: le texte du composant.  
	- highlighted: un booléen pour signaler si le composant est actif ou pas.  
	- onClickHandler: pour signaler qu’un élément a été sélectionné.  
L’élément </li> doit avoir la classe `list-group-item` et la classe `active` si l’élément est actif.  
SelectedCity: Un badge qui affiche le nom de la ville sélectionnée.  
Cet élément prend un seul paramètre.  
	- City: le nom de la ville à afficher.  
`<div className="badge bg-primary fs-5">"My city name"</div>`

Pour afficher les styles des composants correctement, installez `bootstrap`.

## Exercice 6

Dans cet exercice vous allez utiliser le hook `useEffect` pour récupérer des données d'une API.  
L'API que vous allez utiliser renvoie des commentaires. Lors du chargement de cette application, vous allez afficher le commentaire dont l'id 1.  
Affichez 2 boutons `Précédent` et `Suivant` pour pouvoir afficher les commentaires précédents et suivants de l'API.  
Dans l'application affichez uniquement les champs `id` et `name` des commentaires.  
Voici l'adresse de l'API à utiliser (le dernier nombre correspond à l’id)  
[https://jsonplaceholder.typicode.com/comments/1](https://jsonplaceholder.typicode.com/comments/1)

## Exercice 7

Affichez un formulaire composé de 2 champs
- Un nom (ce champ est requis et doit être composé d'au moins 2 caractères).
- Un numéro de téléphone (ce champ est requis et doit être composé de 10 chiffres. Les chiffres peuvent être séparés par des espaces).

Un bouton d'envoi permet d'afficher dans un autre champ les données remplies dans le formulaire.

## Exercice 8

### Utilisation de Redux  

Dans cet exercice, vous affichez un compteur qui est initiliasé à 0.  
En dessous de ce compteur il y aura 3 boutons
- Initialiser. Qui remet le compteur à 0.
- Incrémenter. Qui incrémente le compteur.
- Décrémenter. Qui décrémente le compteur.

Vous utiliserez Redux pour gérer l'état de ce composant.

## Exercice 9

Dans cet exercice vous allez utiliser un middleware Redux pour récupérer des données d'une API.  
Reprenez exactement le même énoncé que pour l'exercice 6, mais cette fois-ci utilisez un middleware Redux pour envoyer la requête à l'API.

Dans l'application affichez uniquement les champs `id` et `name` des commentaires.  
Voici l'adresse de l'API à utiliser (le dernier nombre correspond à l’id)  
[https://jsonplaceholder.typicode.com/comments/1](https://jsonplaceholder.typicode.com/comments/1)
