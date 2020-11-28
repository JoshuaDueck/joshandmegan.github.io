'use strict';

const e = React.createElement;

class EditButton extends React.Component {
  	constructor(props) {
		super(props);
		this.state = { edit: false };
  	}

  render() {
	if (this.state.checkedout) {
	  	return 'You have checked out, and the order is on the way.';
	}

	// RESEARCH WHAT THE 'e' FUNCTION IS.
	// Research what the properties (such as onClick) mean.
	return e(
	  	'button',
	  	{ onClick: () => this.setState({ edit: true }) },
	  	'Edit'
	);
  }
}

const domContainer = document.querySelector('#checkout-button-container');
ReactDOM.render(e(CheckoutButton), domContainer);
