# Solution for a set of exercices

## Exercise 1

- Create a Bootstrap button component with React.
- You can find the Button documentation for Bootstrap [here](https://getbootstrap.com/docs/5.3/components/buttons/)

## Exercise 2

- Use the previous Button component. When this component is clicked, you will display a dismissible Alert.
- Create a dismissible alert component using the Bootstrap documentation.
  The documentation for Bootstrap dismissible alert can be found [here](https://getbootstrap.com/docs/5.3/components/alerts/#dismissing)

## Exercise 3

Create a `Like` component that will be displayed as a heart icon.

- In this exercise you are going to use the `react-icons` library to display a filled heart icon if the component is liked or an outlined heart icon if it is not liked.
- The user can like or dislike by clicking on the component. The component will toggle from a filled heart to an empty heart and vice-versa.
- The parent component has to be notified in case of like or dislike of the component

## Exercise 4

Create a shopping cart application.

In your application we will have 2 main elements.

1. ItemCounter. That will count the number of items we have in our cart.
2. Cart. That will contain the items. This component will be empty by default and will have 2 available buttons (‘Add’, ‘Remove’).

When clicking the ‘Add’ button an item is added to the cart.  
When clicking the ‘Remove’ button an item is removed from the cart.  
To make things simpler the items created will have the following names item1, item2, ...

## Exercise 5

In your application you are going to display a city list to the user.  
Everytime a city is selected, it is highlighted in blue and its name appears in a badge element below.

The application will consist of 4 React components with the following component hierarchy

- App.
  - ListGroup.
    - ListGroupItem.
  - SelectedCity.

**App**: The main app component that will display the ListGroup and the SelectedCity components.

**ListGroup**: Displays an unordered list of city names.
It takes 3 attributes as parameter  
	- items: containing the city list.  
	- heading: A heading that will be displayed at the top of the component.  
	- Another attribute to signal the selected item to the parent component.  
The `<ul/>` element should have the `list-group` class.

**ListGroupItem**: A simple list item (`<li/>`)  
It takes 3 parameters  
	- text: the text for the component.  
	- highlighted: a boolean that tells us if the component is active or not.  
	- onClickHandler: to signal that the item has been clicked.  
The `<li/>` element should have the `list-group-item` class and the `active` class if it is active.  
SelectedCity: A badge element that displays the name of the selected city.  
It takes only 1 parameter.  
	- City: the city name to display.  
`<div className="badge bg-primary fs-5">"My city name"</div>`

To get the proper styles displayed, install `bootstrap` in your application.
