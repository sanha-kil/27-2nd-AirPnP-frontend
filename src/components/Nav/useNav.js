import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useNav() {
  const [isMenuExtend, setIsMenuExtend] = useState(false);
  const [isSearchExtend, setIsSearchExtend] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const modalClose = () => {
    setIsModalOpen(!isModalOpen);
  };
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    setIsModalOpen(false);
  }, [token]);

  const onLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃이 되었습니다.');
  };

  return {
    isMenuExtend,
    setIsMenuExtend,
    isSearchExtend,
    setIsSearchExtend,
    navigate,
    modalClose,
    onLogout,
    token,
    isModalOpen,
    setIsModalOpen,
  };
}

export default useNav;
