// styles/ReviewScreen.styles.js

import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #1d1d1e;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #FFF;
`;

export const DetailText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #FFF;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  padding-vertical: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  align-items: center;
`;

export const ItemName = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const ItemQuantity = styled.Text`
  font-size: 16px;
  color: #888;
  margin-right: 10px;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  color: #888;
  margin-right: 10px;
`;

export const TotalText = styled.Text`
  text-align: right;
  font-size: 23px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
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