import React from 'react';
import { ListGroup } from 'react-bootstrap';

const getPluginList = () => [
  'eslint',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-unicorn',
  'prettier',
  'eslint-plugin-prettier',
  'eslint-config-prettier'
];

const Linter = () => {
  return (
    <>
      <p>
        The setup uses a variety of eslint plugins for handling non-formatting issues and delegating the responsibility
        of handling formatting issues to prettier.
      </p>
      <ListGroup>
        {getPluginList().map((name, index) => (
          <ListGroup.Item key={index}>{name}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Linter;
