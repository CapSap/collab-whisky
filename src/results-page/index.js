import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from 'components/Page';
import isEmpty from 'lodash/isEmpty';
import conf from 'conf';
import List from 'components/List';
import { Title, Heading, SubHeading } from 'components/typography';
import commonStyles from 'commonStyles';

class ResultsPage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.shape({}),
    payload: PropTypes.shape({}),
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  static defaultProps = {
    hasError: null,
    payload: null
  };

  componentDidMount() {
    const { isLoading, payload, history } = this.props;

    if (!isLoading && isEmpty(payload)) {
      history.push('/');
    }
  }

  render() {
    const { isLoading, hasError, payload } = this.props;

    if (isEmpty(payload)) {
      return null;
    }

    return (
      <Page.Content column>
        <Title>Search Results</Title>

        <List isLoading={isLoading} hasError={hasError}>
          {payload.data.results.map(item => (
            <List.Item key={item.id}>
              <img src={`${conf.IMAGE_URL}/w500${item.poster_path}`} alt={item.title} />

              <div
                className={classNames(
                  commonStyles.flex,
                  commonStyles.flexAuto,
                  commonStyles.flexColumn
                )}
              >
                <Heading>
                  {item.title}
                  {item.name}
                </Heading>
                <SubHeading>{item.vote_average}</SubHeading>
                <p>{item.release_date}</p>
                <p>{item.overview}</p>
              </div>
            </List.Item>
          ))}
        </List>
      </Page.Content>
    );
  }
}

const mapState = ({ menu }) => menu;

export default withRouter(connect(mapState)(ResultsPage));
