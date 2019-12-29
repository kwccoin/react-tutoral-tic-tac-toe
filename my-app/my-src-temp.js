// this is JSX possibly

class ShoppijngList extends React.Component {
    render(){
        retun (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
           </div>
        );
    }
}

// Example usage: <ShoppingList name="Mark" />

// equivalent to using creatElement

return React.createElement('div', {className: 'shopping-list'},
    React.createElement('h1', null, "Shopping List for ", props.name), // check-out full syntax
    React.createElement('ul', null, 
        React.createElement("li", null, "Instagram"),
        React.createElement("li", null, "WhatsApp"),
        React.createElement("li", null, "Oculus")));  // check-out full syntax
    )