import React from 'react';
import { Formik } from 'formik';
import { MdImageSearch } from 'react-icons/md';
import {
  SearchButton,
  StyledForm,
  StyledHeader,
  StyledInput,
} from './Searchbar.styled';

export const Searchbar = ({ onChangeQuery }) => {
  return (
    <StyledHeader>
      <Formik
        initialValues={{
          searchQuery: '',
          page: 1,
        }}
        onSubmit={(values, actions) => {
          onChangeQuery(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <SearchButton type="submit">
            <MdImageSearch size={24} />
          </SearchButton>

          <StyledInput
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></StyledInput>
        </StyledForm>
      </Formik>
    </StyledHeader>
  );
};
