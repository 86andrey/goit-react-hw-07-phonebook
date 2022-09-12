import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" name="filter" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;`;

const Input = styled.input`
    border-radius: 5px;
    height: 30px;
    margin-bottom: 10px;
    margin-top: 5px;
    width: 250px;`;

export default Filter;