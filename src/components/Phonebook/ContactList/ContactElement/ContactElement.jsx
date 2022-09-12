import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactElement = ({ name, number, id, onDeleteContact }) => {
  return (
    <Li key={id}>
        <p>
          {name}: {number}
      </p>
      <Btn onClick={()=>onDeleteContact(id)}>Delete</Btn>
      </Li>
  );
};

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const Li = styled.li`
align-items: center;
    display: flex;
    font-size: 18px;
    font-weight: 500;`;

    const Btn = styled.button`
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    font-weight: 400;
   margin-left: 50px;
    :hover, :focus {
  color: white;
  background-color: blue;
  :hover, :focus {
  background-color: red;
}`;


export default ContactElement;