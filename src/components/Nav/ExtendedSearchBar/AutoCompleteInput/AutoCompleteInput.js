import React from 'react';
import styled from 'styled-components';
import useAutoCompleteInput from './useAutoCompleteInput';

const AutoCompleteInput = ({ searchInput, setSearchInput }) => {
  const { filteredList } = useAutoCompleteInput(searchInput);

  return (
    <AutoComplete>
      {filteredList.map(({ id, name }) => (
        <CompleteList key={id} onClick={() => setSearchInput(name)}>
          {name}
        </CompleteList>
      ))}
    </AutoComplete>
  );
};

export default AutoCompleteInput;

const AutoComplete = styled.div`
  position: absolute;
  top: 70px;
  left: 10px;
  padding: 10px 20px;
  height: 200px;
  width: 180px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 10px 0 #d9d9d9;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CompleteList = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
  height: 50px;
  border: none;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  font-size: 14px;
  color: #222;
`;
