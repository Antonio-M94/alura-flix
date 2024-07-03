import styles from './pageNotFound.module.css';
import notFound from '../../assets/page_not_found.svg';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';

const PageNotFound = () => {
  return (
    <>
      <div className={styles.pageNotFound}>
        <img src={notFound} alt="Not Found" className={styles.notFoundImage} />
      </div>
      <HeaderMobile />
    </>
  );
};

export default PageNotFound;
