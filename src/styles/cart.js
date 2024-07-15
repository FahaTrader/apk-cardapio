import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 10px;
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
  font-size: 23px;
  font-weight: bold;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  color: #333;
  margin-right: 10px;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuantityText = styled.Text`
  font-size: 18px;
  margin-horizontal: 10px;
`;

export const Total = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
  margin-vertical: 20px;
  font-size: 18px;
  color: #888;
`;

export const Message = styled.Text`
  text-align: center;
  margin-vertical: 10px;
  font-size: 18px;
  color: green;
`;

export const StyledButton = styled(TouchableOpacity)`
  background-color: red;
  padding: 7px 13px;
  border-radius: 50px;
`;

export const StyledText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;