import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const ViewItens = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #eee;
  font-size: 16px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #2e86c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.8 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px; /**acima, laterais e abaixo  */
  border-radius: 4px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  background: #eee;
  border-radius: 32px;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: #2e86c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const Message = styled.Text`
  margin-top: 5px;
  font-size: 14;
  color: red;
`;
export const ItemSeparator = styled.View`
  height: 1;
  border-bottom-width: 1px;
  border-color: #eee;
  margin-bottom: 10px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
