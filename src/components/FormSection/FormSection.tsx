import React from 'react';

interface IFormSection {
  title?: string;
  labelFor: string;
  children: React.ReactNode;
}

const FormSection: React.FC<IFormSection> = ({ children, title = '', labelFor }) => {
  return (
    <section>
      <label htmlFor={labelFor}>
        {title}
      </label>
      {children}
    </section>
  );
};

export default FormSection;
