import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { IoMenuOutline } from 'react-icons/io5';
import ExtendedSearchBar from './ExtendedSearchBar/ExtendedSearchBar';
import Login from '../../pages/Login/Login';
import { Link } from 'react-router-dom';
import useNav from './useNav';

const Nav = () => {
  const {
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
  } = useNav();

  return (
    <>
      <NavLayout />
      <NavStyle>
        <LogoContainer>
          <Link to="/">
            <Logo src="/images/airpnpLogo.png" alt="로고이미지" />
          </Link>
        </LogoContainer>
        <SearchContainer>
          <SearchButton onClick={() => setIsSearchExtend(prev => !prev)}>
            <SearchText>검색 시작하기</SearchText>
            <SearchCircle>
              <BiSearch />
            </SearchCircle>
          </SearchButton>
        </SearchContainer>
        {isSearchExtend && (
          <ExtendedSearchBar setIsSearchExtend={setIsSearchExtend} />
        )}
        {isModalOpen && <Login modalClose={modalClose} />}
        <MenuContainer>
          <ToHost
            onClick={() =>
              token ? navigate('host-register') : alert('로그인이 필요합니다')
            }
          >
            호스트 등록
          </ToHost>
          <ExtentionMenu onClick={() => setIsMenuExtend(prev => !prev)}>
            <IoMenuOutline />
            <ProfileImg src="/images/peopleicon.jpeg" alt="profile" />
            {isMenuExtend && (
              <AppearedMenu>
                <MenuList>
                  {!token ? (
                    <LoginListElement
                      onClick={() => setIsModalOpen(prev => !prev)}
                    >
                      로그인
                    </LoginListElement>
                  ) : (
                    <LoginListElement onClick={onLogout}>
                      로그아웃
                    </LoginListElement>
                  )}
                  <ListElement
                    onClick={() =>
                      token
                        ? navigate('host-register')
                        : alert('로그인이 필요합니다')
                    }
                  >
                    호스트 등록
                  </ListElement>
                  <ListElement>마이페이지</ListElement>
                </MenuList>
              </AppearedMenu>
            )}
          </ExtentionMenu>
        </MenuContainer>
      </NavStyle>
    </>
  );
};

const NavLayout = styled.div`
  height: 80px;
`;

const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 80px;
  padding: 18px 80px 0 80px;
  background-color: white;
  box-shadow: 0 0 5px 0 gray;
  z-index: 999;
`;

const LogoContainer = styled.div`
  width: 37%;
`;

const Logo = styled.img`
  width: 130px;
  margin-top: 5px;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26%;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 42px;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 40px;
  box-shadow: 0 0 3px 0 ${({ theme }) => theme.lightGray};
  transition: 0.4s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.middleGray};
  }
`;

const SearchText = styled.div`
  margin-left: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.middleGray};
`;

const SearchCircle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.highlight};
  font-size: 16px;
  color: ${({ theme }) => theme.white};
`;

const ToHost = styled.div`
  padding-right: 20px;
  border: none;
  background-color: transparent;
  font-size: 12px;
  color: ${({ theme }) => theme.black};
  text-decoration-line: none;
  cursor: pointer;
`;

const ExtentionMenu = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding: 5px 5px 5px 12px;
  border-radius: 22px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  background-color: white;
  font-size: 20px;
  cursor: pointer;
`;
const ProfileImg = styled.img`
  margin-left: 12px;
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 16px;
`;

const AppearedMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  text-align: left;
  padding: 12px 0;
  width: 30vh;
  background-color: white;
  box-shadow: 0 0 3px 0 ${({ theme }) => theme.middleGray};
  border-radius: 16px;
`;

const MenuList = styled.ul`
  width: 100%;
`;

const ListElement = styled.li`
  padding: 16px 16px;
  font-size: 14px;
  color: #222222;
  text-decoration-line: none;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const LoginListElement = styled.li`
  padding: 16px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  font-size: 14px;
  color: #222222;
  text-decoration: none;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 37%;
`;

export default Nav;
