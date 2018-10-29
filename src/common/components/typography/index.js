import styles from './styles';

const Base = ({ center, bold, className, ...restProps }) => (
  <div
    className={classNames(
      styles.base,
      { [styles.center]: Boolean(center) },
      { [styles.bold]: Boolean(bold) },
      className
    )}
    {...restProps}
  />
);

export const Title = ({ className, ...restProps }) => (
  <Base className={classNames(styles.title, className)} {...restProps} />
);

export const SubTitle = ({ className, ...restProps }) => (
  <Base className={classNames(styles.subtitle, className)} {...restProps} />
);

export const Heading = ({ className, ...restProps }) => (
  <Base className={classNames(styles.heading, className)} {...restProps} />
);

export const SubHeading = ({ className, ...restProps }) => (
  <Base className={classNames(styles.subheading, className)} {...restProps} />
);

export const Error = ({ className, ...restProps }) => (
  <Base className={classNames(styles.error, className)} {...restProps} />
);
