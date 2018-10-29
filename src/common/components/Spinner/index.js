import { Spin, Icon } from 'antd';

export default ({ style, ...restProps }) => (
  <Spin
    indicator={<Icon type="loading" {...restProps} style={style || { fontSize: '2em' }} spin />}
  />
);
