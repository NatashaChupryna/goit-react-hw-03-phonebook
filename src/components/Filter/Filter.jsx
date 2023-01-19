import React from 'react';
import { FilterInput, Label } from './Filter.styled';

export const Filter = function ({ filter, onFilterChange }) {
  return (
    <Label>
      Find contact by name :
      <FilterInput name={filter} type="text" onChange={onFilterChange} />
    </Label>
  );
};
