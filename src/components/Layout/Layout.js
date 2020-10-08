import React from 'react';
import PropTypes from 'prop-types';
import useFilters from '../../hooks/useFilters';
import SearchContainer from '../SearchContainer';
import SearchForm from '../SearchForm';
import Logo from '../Logo';
import Content from '../Content';

const Layout = ({ children }) => {
  const { filters } = useFilters();
  const { s } = filters;

  return (
    <>
      <SearchContainer collapsed={s}>
        <Logo />
        <SearchForm defaultValues={filters} />
      </SearchContainer>
      <Content>
        { children }
      </Content>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
