import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Repository,
  Item,
  ProjectName,
  Description,
  Language,
  Carregando,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  static propsTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    repository: [],
    loading: false,
  };

  async componentDidMount() {
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    this.setState({loading: true});

    await api
      .get(`/users/${user.login}/repos`)
      .then(res => {
        this.setState({
          repository: res.data,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  handleNavigate = repo => {
    const {navigation} = this.props;

    navigation.navigate('MyWeb', {repo});
  };

  render() {
    const {navigation} = this.props;
    const {repository, loading} = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <Carregando>Carregando...</Carregando>
        ) : (
          <Repository
            data={repository}
            keyExtractor={repo => String(repo.id)}
            renderItem={({item}) => (
              <Item onPress={() => this.handleNavigate(item)}>
                <ProjectName>{item.name}</ProjectName>
                <Description>{item.description}</Description>
                <Language>{item.language}</Language>
              </Item>
            )}
          />
        )}
      </Container>
    );
  }
}
