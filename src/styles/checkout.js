import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: #1d1d1e;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #FFF;
`;

export const SubmitButton = styled(TouchableOpacity)`
  background-color: red;
  padding: 10px 80px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 15px;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;