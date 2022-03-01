import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useExtendedSearchBar(setIsSearchExtend) {
  const [searchInput, setSearchInput] = useState('');
  const [dateInput, setDateInput] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [isDisappear, setIsDisappear] = useState(ANIMATION_APPEAR);
  const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState(false);
  const categoryInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsDisappear(ANIMATION_NONE);
    }, 600);
  }, []);

  const adjustDate = (type, date) => {
    if (type === 'startDate' && date > dateInput.endDate) {
      setDateInput({
        startDate: date,
        endDate: date,
      });
    } else {
      setDateInput(prevDate => ({ ...prevDate, [type]: date }));
    }
  };

  const changeSearchInput = e => {
    setSearchInput(() => e.target.value);
  };

  const onSearch = e => {
    e.preventDefault();
    const { startDate, endDate } = dateInput;
    const term = Math.round((endDate - startDate) / (24 * 60 * 60 * 1000)) + 1;
    navigate(
      `/list?start=${parseDate(startDate)}&end=${parseDate(
        endDate
      )}&category=${searchInput}&term=${term}`
    );
    setIsSearchExtend(false);
  };

  const parseDate = date => {
    const year = date.getFullYear();
    const month = 1 + date.getMonth();
    const day = date.getDate();

    return year + '-' + month + '-' + day;
  };

  const disappearNav = () => {
    setIsDisappear(ANIMATION_DISAPPEAR);
    setTimeout(() => {
      setIsSearchExtend(false);
    }, 600);
  };

  return {
    isDisappear,
    setIsDisappear,
    searchInput,
    setSearchInput,
    dateInput,
    setDateInput,
    isAutoCompleteOpen,
    setIsAutoCompleteOpen,
    adjustDate,
    categoryInputRef,
    changeSearchInput,
    onSearch,
    disappearNav,
  };
}

const ANIMATION_DISAPPEAR = 'disappear';
const ANIMATION_APPEAR = 'appear';
const ANIMATION_NONE = '';

export default useExtendedSearchBar;
