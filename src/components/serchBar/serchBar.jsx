import React, { useState } from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import {
  ChevronBtn,
  FormWrrap,
  Input,
  InputLeft,
  InputRight,
  InputWrrap,
  Label,
  RegestWrrap,
  SearchBtn,
} from './serchBar.styled';
import ListCar from 'components/listCar/listCar';
import ListPrice from 'components/listPrice/listPrice';
// import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [isListCarOpen, setIsListCarOpen] = useState(false);
  const [isListPriceOpen, setIsListPriceOpen] = useState(false);

  const toggleListCar = () => {
    setIsListCarOpen(prevState => !prevState);
  };
  const toggleListPrice = () => {
    setIsListPriceOpen(prevState => !prevState);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.search.value.toLowerCase().trim();

    if (!query) return;

    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormWrrap>
        <div>
          <Label>Car brand</Label>
          <InputWrrap>
            <Input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Enter the text"
              name="search"
              render
            />
            <ChevronBtn onClick={toggleListCar}>
              {isListCarOpen ? (
                <LuChevronUp size={20} />
              ) : (
                <LuChevronDown size={20} />
              )}
            </ChevronBtn>
            {isListCarOpen && <ListCar />}
          </InputWrrap>
        </div>

        <div>
          <Label>Price/ 1 hour</Label>
          <InputWrrap>
            <Input
              type="text"
              autoComplete="off"
              placeholder="To $"
              name="search"
            />
            <ChevronBtn onClick={toggleListPrice}>
              {isListPriceOpen ? (
                <LuChevronUp size={20} />
              ) : (
                <LuChevronDown size={20} />
              )}
            </ChevronBtn>
            {isListPriceOpen && <ListPrice />}
          </InputWrrap>
        </div>

        <div>
          <Label>Car mileage / km</Label>
          <RegestWrrap>
            <InputLeft
              type="text"
              autoComplete="off"
              placeholder="From"
              name="search"
            />

            <InputRight
              type="text"
              autoComplete="off"
              placeholder="To "
              name="search"
            />
          </RegestWrrap>
        </div>
        <SearchBtn>Search</SearchBtn>
      </FormWrrap>
    </form>
  );
};
// LuChevronUp;
