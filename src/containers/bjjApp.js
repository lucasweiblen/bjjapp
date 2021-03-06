import React from 'react-native';
import { bindActionCreators } from 'redux';
import Main from '../components/main';
import * as techniqueActions from '../actions/techniqueActions';
import { connect } from 'react-redux';

class BJJApp extends React.Component {
  render() {
    const { techniques, actions } = this.props;
    return (
      <Main
        techniques={techniques}
        {...actions}
      />
    );
  }
}

function mapStateToProps(state) {
  return { techniques: state.techniques };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(techniqueActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BJJApp);
