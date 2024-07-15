import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ItemContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #999;
  background-color: #1d1d1e;
`;

export const ItemImage = styled.Image`
  width: 100%;
  height: 300px;
  margin-right: 10px;
`;

export const ItemName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #FFF;
  margin-bottom: 10px;
`;

export const ItemPrice = styled.Text`
  font-size: 18px;
  color: #000;
  margin-bottom: 25px;
  display: flex;
  align-items: start;
  justify-content: start;
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
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const Message = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  margin-vertical: 50px;
  background-color: green;
  position: absolute;
  top: -40px;
  right: 5px;
  padding: 10px;
  border-radius: 10px;
`;
