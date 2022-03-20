import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

import { addMessageActionCreator } from '../../redux/dialogsReduser'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
})
const mapDispatchToProps = (dispatch) => ({
    addMessage : (text) => {
        dispatch(addMessageActionCreator(text))
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
