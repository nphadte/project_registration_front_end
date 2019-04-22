import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './NewProject.styles';

class NewProject extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('NewProject will mount');
  }

  componentDidMount = () => {
    console.log('NewProject mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('NewProject will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('NewProject will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('NewProject did update');
  }

  componentWillUnmount = () => {
    console.log('NewProject will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NewProjectWrapper">
        Test content
      </div>
    );
  }
}

NewProject.propTypes = {
  // bla: PropTypes.string,
};

NewProject.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewProject);
