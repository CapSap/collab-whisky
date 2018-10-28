import { Spin } from 'antd';
import NotFound from 'components/NotFound';

import styles from './styles';

const List = ({ className, isLoading, hasError, children, emptyMessage, restProps }) => {
  if (isLoading) {
    return <Spin size="large" tip="Loading..." />;
  }
  if (!isLoading && !children.length) {
    return <p>{emptyMessage}</p>;
  }
  if (hasError) {
    return <NotFound error={hasError} />;
  }

  return (
    <ul className={classNames(styles.base, className)} {...restProps}>
      {children}
    </ul>
  );
};
List.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool.isLoading,
  hasError: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  children: PropTypes.node,
  emptyMessage: PropTypes.string
};
List.defaultProps = {
  className: '',
  isLoading: false,
  hasError: null,
  children: null,
  emptyMessage: 'No Data'
};

const ListItem = (List.Item = ListItem);

export default List;
