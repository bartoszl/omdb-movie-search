import React from 'react';
import PropTypes from 'prop-types';
import useFilters from '../../hooks/useFilters';
import SearchContainer from '../SearchContainer';
import SearchForm from '../SearchForm';
import Logo from '../Logo';
import Content from '../Content';
import TypingAnimation from '../TypingAnimation';

const Layout = ({ children }) => {
  const { filters } = useFilters();
  const { s } = filters;

  return (
    <>
      <SearchContainer collapsed={s} data-testid="search-container">
        <Logo />
        { !s && (
          <TypingAnimation data-testid="typing-animation">
            Find your favorite movie!
          </TypingAnimation>
        )}
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
