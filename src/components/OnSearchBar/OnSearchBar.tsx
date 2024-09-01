import * as React from 'react';
import {Searchbar} from 'react-native-paper';

interface SearchBarProps {
  placeholder?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const OnSearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <Searchbar
      style={{marginBottom: 16, borderRadius: 6}}
      placeholder={placeholder}
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default OnSearchBar;
