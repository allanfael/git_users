import React, {Component} from 'react';
import ProgressWebView from 'react-native-progress-webview';

export default class MyWeb extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('repo').name,
  });

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.ref.current;
  }

  render() {
    const {navigation} = this.props;
    const repo = navigation.getParam('repo');
    console.tron.log(repo);
    return (
      <ProgressWebView ref={this.ref} source={{uri: `${repo.html_url}`}} />
    );
  }
}
