import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

import { Container } from './styles';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <Button title="Entrar" onPress={() => navigation.navigate('Main')}>
        Entrar
      </Button>
    </Container>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default SignIn;
