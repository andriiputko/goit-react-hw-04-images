import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import cl from "./Searchbar.module.css"

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <header className={cl.header}>
      <form className={cl.form} onSubmit={this.handleSubmit}>
        <button className={cl.button} type="submit" >
          <span className={cl.buttonText}>Search</span>
        </button>

        <input
          className={cl.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
      </form>
    </header>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};