/* global $ */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class NewOrderSummary extends React.Component {
  componentDidMount() {
  }
  render() {
    const { cart } = this.props;
    return (
      <div className="ui two column grid">
        <div className="row">
          <div className="column">
            <span className="Pend(7px)">{cart.services.length}</span>
            <span>Services</span>
          </div>
          <div className="column"><span>{cart.total}</span></div>
        </div>
      </div>
    );
  }
}

NewOrderSummary.propTypes = {
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect((mapStateToProps), {
})(NewOrderSummary);
