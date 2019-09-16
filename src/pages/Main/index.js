import React, {Component} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ViewItens,
  Message,
  ProfileButtonText,
  ItemSeparator,
} from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Usuários',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigation: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    error: '',
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({users: JSON.parse(users)});
    }
  }

  componentDidUpdate(_, prevState) {
    const {users} = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    const {newUser, users, error} = this.state;
    this.setState({loading: true});

    await api
      .get(`/users/${newUser}`)
      .then(res => {
        const data = {
          name: res.data.name,
          login: res.data.login,
          bio: res.data.bio,
          avatar: res.data.avatar_url,
        };
        this.setState({
          users: [...users, data],
          newUser: '',
          loading: false,
          error: '',
        });
      })
      .catch(e => {
        this.setState({loading: false});
        switch (e.message) {
          case 'Request failed with status code 404':
            this.setState({error: 'Usuário não encontrado'});
            break;
          case 'Network Error':
            this.setState({error: 'Falha na Conexão'});
            break;
          default:
            null;
        }
      });
    Keyboard.dismiss();
  };

  deleteItemById = id => {
    const filteredData = this.state.users.filter(item => item.id !== id);
    this.setState({users: filteredData});
  };

  renderItemSeparator = () => {
    return <ItemSeparator />;
  };

  handleNavigate = user => {
    const {navigation} = this.props;

    navigation.navigate('User', {user});
  };

  render() {
    const {users, newUser, loading, error} = this.state;
    return (
      <Container>
        <Form>
          <ViewItens>
            <Input
              placeholder="Adicionar Usuário"
              autoCorrect={false}
              autoCapitalize="none"
              value={newUser}
              onChangeText={text => this.setState({newUser: text})}
              returnKeyType="send"
              onSubmitEditing={this.handleAddUser}
            />

            <SubmitButton loading={loading} onPress={this.handleAddUser}>
              {loading ? (
                <ActivityIndicator
                  loading={loading}
                  color="#fff"
                  size="small"
                />
              ) : (
                <Icon name="add" size={20} color="#fff" />
              )}
            </SubmitButton>
          </ViewItens>
          <Message>{error}</Message>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
          ItemSeparatorComponent={this.renderItemSeparator}
        />
      </Container>
    );
  }
}
