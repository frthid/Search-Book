import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import classes from'./Layout.module.scss';
import SearchSection from '../../components/SearchSection/SearchSection';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <SearchSection />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
