import React, { useState, useEffect } from 'react';
import Voice from 'react-native-voice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Info,
  StartButton,
  StopButton,
  StopButtonText,
  TranscriptContainer,
  TranscriptText,
  TranscriptListening
} from './styles';

const Main = () => {
  const [started, setStarted] = useState(false);
  const [transcript, setTranscript] = useState([]);

  const onSpeechStart = e => {
    // console.tron.log('speech start:', e);
    setStarted(true);
  };

  const onSpeechRecognized = e => {
    // console.tron.log('speech recognized:', e);
  };

  const onSpeechEnd = e => {
    console.tron.log('speech end:', e);
  };

  const onSpeechError = e => {
    // console.tron.log('speech error:', e);
  };

  const onSpeechResults = e => {
    console.tron.log('speech results:', e);
    if (e?.value) {
      setTranscript(currentValue => [...currentValue, e.value]);
    }
  };

  const onSpeechPartialResults = e => {
    // console.tron.log('speech partial results:', e);
  };

  const onSpeechVolumeChanged = e => {
    // console.tron.log('speech volume changed:', e);
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

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
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
          <TranscriptContainer>
            {transcript.map(t => (
              <TranscriptText>{t}</TranscriptText>
            ))}
            <TranscriptListening>Ouvindo...</TranscriptListening>
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
