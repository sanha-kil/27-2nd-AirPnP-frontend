import { CATEGORY_LIST } from './CategoryList';

function useAutoCompleteInput(searchInput) {
  const filteredList = CATEGORY_LIST.filter(({ name }) =>
    name.includes(searchInput)
  );

  return { filteredList };
}

export default useAutoCompleteInput;
