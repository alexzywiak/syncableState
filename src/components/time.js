import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateTime, fetchTime } from '../actions';

function mapStateToProps({timeState}) {
  return {
    timeState
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateTime, fetchTime }, dispatch);
}

class Time extends Component {
  componentDidMount() {
    this.props.fetchTime();
  }

  componentWillReceiveProps() {
    this.props.fetchTime();
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>TIME: {this.props.timeState.get('value')}</h1>
        <p><a className="btn btn-primary" onClick = {this.props.updateTime}>Update</a></p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);