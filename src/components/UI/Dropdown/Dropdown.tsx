import React, { useState } from 'react';
import classes from './Dropdown.module.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import { categories } from '../../../constants/constants';

interface IDropdownProps {
  selected: string;
  setSelected: (category: string) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdown__btn} onClick={() => setIsActive(!isActive)}>
        {selected}
        <span>
          <AiFillCaretDown />
        </span>
      </div>
      {isActive && (
        <div className={classes.dropdown__content}>
          {categories.map((categori) => (
            <div
              key={categori}
              className={classes.dropdown__content__item}
              onClick={() => {
                setSelected(categori);
                setIsActive(false);
              }}
            >
              {categori}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

//all, art, biography, computers, history, medical, poetry
