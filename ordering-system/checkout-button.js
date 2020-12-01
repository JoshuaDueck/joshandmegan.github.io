'use strict';

const e = React.createElement;

class CheckoutButton extends React.Component {
  	constructor(props) {
		super(props);
		this.state = { checkedout: false };
  	}

  render() {
	if (this.state.checkedout) {
	  	return 'You have checked out, and the order is on the way.';
	}

	return e(
	  	'button',
	  	{ onClick: () => this.setState({ checkedout: true }) },
	  	'Checkout'
	);
  }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction1(){
	document.getElementById("payment").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
const domContainer = document.querySelector('#checkout-button-container');
ReactDOM.render(e(CheckoutButton), domContainer);
