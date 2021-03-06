import styles from './styles';

const Page = ({ className, ...restProps }) => (
  <div className={classNames(className, styles.base)} {...restProps} />
);

const Wrapper = ({ className, ...restProps }) => (
  <div className={classNames(styles.wrapper, className)} {...restProps} />
);

const Content = ({ className, center, column, ...restProps }) => (
  <div
    className={classNames(
      styles.content,
      { [styles.column]: Boolean(column) },
      { [styles.center]: Boolean(center) },
      className
    )}
    {...restProps}
  />
);

Page.Wrapper = Wrapper;
Page.Content = Content;

export default Page;
