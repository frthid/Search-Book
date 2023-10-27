import React from 'react';
import classes from './FormSection.module.scss'

interface IFormSection {
  title?: string;
  labelFor: string;
  children: React.ReactNode;
}

const FormSection: React.FC<IFormSection> = ({ children, title = '', labelFor }) => {
  return (
    <section className={classes.section}>
      <label htmlFor={labelFor}>
        {title}
      </label>
      {children}
    </section>
  );
};

export default FormSection;
