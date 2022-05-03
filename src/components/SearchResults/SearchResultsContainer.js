import { getCardsForSearchResults } from '../../redux/cardsRedux';
import {connect} from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredList = state.lists.filter(list => list.id == id);
  const cardsParams = filteredList[0] || {};

  return {
    ...cardsParams,
    cards: getCardsForSearchResults(state, props),
  };
};


export default connect(mapStateToProps,getCardsForSearchResults)(SearchResults);