import { connect } from 'react-redux';
import ArticleIndex from './article_index';
import { articlesArray } from '../../reducers/selectors';
// import { labelsArray } from '../../reducers/selectors';

const mSTP = state => {
    return {
        articles: articlesArray(state),
        indexType: 'Tags',
        loading: state.ui.loading.articlesLoading
    }
}

const mDTP = (dispatch, ownProps) => {
    const label = ownProps.match.params.label;
    return {
        fetchArticles: () => dispatch(fetchArticles(`tag:${label}`))
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);