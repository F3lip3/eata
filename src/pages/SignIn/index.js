import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

import { Container } from './styles';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <Button
        title="Native Speech Recognition"
        onPress={() => navigation.navigate('Main')}
      />
    </Container>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default SignIn;
