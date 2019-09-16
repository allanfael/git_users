import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Repository = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Item = styled.TouchableOpacity`
  flex: 1;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  align-items: center;
`;

export const ProjectName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 15px;
  text-align: center;
  color: #333;
`;

export const Language = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Carregando = styled.Text`
  flex: 1;
  margin-top: 130px;
  font-family: sans-serif-thin;
  font-size: 21px;
  color: #b2babb;
  font-weight: bold;
  justify-content: center;
  text-align: center;
`;
