import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import cl from "./Searchbar.module.css"

export default function SearchBar ({onSubmit}) {

  const [searchQuery, setSearchQuery] = useState('')
  

  const handleChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };
 
    return (
      <header className={cl.header}>
      <form className={cl.form} onSubmit={handleSubmit}>
        <button className={cl.button} type="submit" >
          <span className={cl.buttonText}>Search</span>
        </button>

        <input
          className={cl.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
    );
  }

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};