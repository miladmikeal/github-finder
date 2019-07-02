import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  searchUsers = async (text) => {
    try {
      this.setState({ loading: true })
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      this.setState({ users: res.data.items, loading: false })
    } catch (err) {
      console.log(err)
    }
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
