import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';

import { Container } from './styles';

const Main = ({ navigation }) => {
  return (
    <Container>
      <Text>Content</Text>
      <Button title="Sair" onPress={() => navigation.navigate('SignIn')}>
        Sair
      </Button>
    </Container>
  );
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default Main;
