import React from 'react';
import Form from '../Form/Form';
import classes from './SearchSection.module.scss';

const SearchSection = () => {
  return (
    <section className={classes.search}>
      <Form />
    </section>
  );
};

export default SearchSection;
