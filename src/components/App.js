import { h, Component } from 'preact';
import User from './User';

// const users = [
//   {
//     image: "https://i1.wp.com/neilsecretario.com/wp-content/uploads/2013/10/be-strong.jpg?zoom=2",
//     name: "What"
//   },
//   {
//     image: "https://i1.wp.com/neilsecretario.com/wp-content/uploads/2013/10/be-strong.jpg?zoom=2",
//     name: "What2"
//   },
//   {
//     image: "https://i1.wp.com/neilsecretario.com/wp-content/uploads/2013/10/be-strong.jpg?zoom=2",
//     name: "What2"
//   }
// ];

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true
    }
  }

  componentDidMount() {
    fetch(this.props.config.urls.user)
    .then(resp => resp.json())
    .then(user => {
      this.setState({
        user,
        loading: false
      });
    })
    .catch(err => console.error(err));
  }
  render({config}, {loading, user}){
    return (
      <div class="app">
      { loading
        ? <p>Fetching {config.urls.user}</p>
        : <User image={user.avatar_url}
                followers={user.followers} />
        // : users.map(user => <User {...user} key={user.created_at} />)
      }
      </div>
    );
  }

}

export default App;
