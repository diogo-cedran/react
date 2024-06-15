// components/Header.tsx
import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
  return <header className={styles.header}>{titulo}</header>;
};

export default Header;
