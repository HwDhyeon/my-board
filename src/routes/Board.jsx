import React from 'react';
import { Container } from 'react-bootstrap';
import ArticleList from '../components/ArticleList';
import NavigationBar from '../components/Navigation';

const Board = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <ArticleList />
      </Container>
    </>
  );
};

export default Board;
