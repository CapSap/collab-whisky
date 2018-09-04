import commonStyles from 'commonStyles';

import styles from './styles';

const Page = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.base)} {...restProps} />;

const Wrapper = ({
  className,
  ...restProps
}) => (
  <div
    className={classNames(
      commonStyles.flex,
      commonStyles.flexColumn,
      className,
    )}
    {...restProps}
  />
);

Page.Wrapper = Wrapper;

export default Page;
