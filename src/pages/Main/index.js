import React, { useState, useEffect } from 'react';
import Voice from 'react-native-voice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Info,
  StartButton,
  StopButton,
  StopButtonText,
  Title,
  TranscriptContainer,
  TranscriptText
} from './styles';

const Main = () => {
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState([]);
  const [sentence, setSentence] = useState(0);

  const onSpeechStartHandler = () => {
    setStarted(true);
  };

  const onSpeechEndHandler = async () => {
    setSentence(current => current + 1);
    await Voice.start('pt-BR');
  };

  const onSpeechErrorHandler = e => {
    console.tron.log('speech error:', e?.error ?? 'empty');
  };

  const onSpeechResultsHandler = e => {
    if (e?.value) {
      setResult(currentValue => {
        if (currentValue[sentence]) {
          const newValue = [...currentValue];
          newValue[sentence] = e.value;
          return newValue;
        }
        return [...currentValue, e.value];
      });
    }
  };

  const start = async () => {
    try {
      await Voice.start('pt-BR');
    } catch (err) {
      console.tron.error(err);
    }
  };

  const stop = async () => {
    try {
      await Voice.stop();
      setStarted(false);
    } catch (err) {
      console.tron.error(err);
    }
  };

  useEffect(() => {
    try {
      Voice.stop();
      Voice.removeAllListeners();
    } catch (err) {
      console.tron.error(err);
    }

    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechError = onSpeechErrorHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechStart = onSpeechStartHandler;
  }, []);

  return (
    <Container>
      {!started && (
        <StartButton onPress={() => start()}>
          <Icon name="microphone" size={150} color="#666" />
          <Info>Iniciar Transcrição</Info>
        </StartButton>
      )}
      {started && (
        <>
          <Title>Results [{sentence}]:</Title>
          <TranscriptContainer>
            {result.map((text, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TranscriptText key={`sentence-${index}`}>
                :: {text} ::
              </TranscriptText>
            ))}
          </TranscriptContainer>
          <StopButton onPress={() => stop()}>
            <StopButtonText>Parar Transcrição</StopButtonText>
          </StopButton>
        </>
      )}
    </Container>
  );
};

export default Main;
