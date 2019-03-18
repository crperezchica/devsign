import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { setSession } from '../../actions/session';
import { getToken } from '../../selectors/session';
import Loading from '../../components/Loading';

class Callback extends React.PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    if(this.props.token) {
      return <Redirect to='/home' />;
    }
    return (
      <Loading />
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Callback);
