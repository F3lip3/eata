import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

export const Info = styled.Text`
  color: #666;
  font-size: 22px;
`;

export const StartButton = styled(BorderlessButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StopButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: tomato;
  border-radius: 10px;
  justify-content: center;
  margin: 15px 0 30px 0;
  padding: 15px;
  width: 100%;
`;

export const StopButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const TranscriptContainer = styled.View`
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #eee;
  color: #666;
  flex: 1;
  font-size: 20px;
  padding: 15px;
  width: 100%;
`;

export const TranscriptText = styled.Text`
  font-size: 22px;
  color: #333;
`;

export const TranscriptListening = styled.Text`
  font-size: 22px;
  color: #666;
`;
