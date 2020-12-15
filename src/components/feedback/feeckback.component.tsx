import React from 'react';
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import {selectHabitState} from "../../redux/habit/habit.selector";
import {connect} from "react-redux";
import {FeedbackState, GlobalState} from "../../types/types";
import {resetError, resetInfo, resetSuccess, resetWarning} from "../../redux/feedback/feedback.action";
import {selectFeedbackState} from "../../redux/feedback/feedback.selector";

interface dispatchables {
    resetError(): void,
    resetWarning(): void,
    resetInfo(): void,
    resetSuccess(): void
}
const Feedback = ({resetError, resetWarning, resetInfo, resetSuccess, feedback} : {feedback: FeedbackState } & dispatchables) => {
    return (<div>
            <Snackbar open={feedback.hasError} autoHideDuration={6000} onClose={resetError}>
                <MuiAlert onClose={resetError} severity="error">
                    {feedback.errorMessage}
                </MuiAlert>
            </Snackbar>
            <Snackbar open={feedback.hasWarning} autoHideDuration={6000} onClose={resetWarning}>
                <MuiAlert onClose={resetWarning} severity="warning">
                    {feedback.warningMessage}
                </MuiAlert>
            </Snackbar>
            <Snackbar open={feedback.hasInfo} autoHideDuration={6000} onClose={resetInfo}>

                <MuiAlert onClose={resetInfo} severity="info">
                    {feedback.infoMessage}
                </MuiAlert>
            </Snackbar>
            <Snackbar open={feedback.hasSuccess} autoHideDuration={6000} onClose={resetSuccess}>
                <MuiAlert onClose={resetSuccess} severity="success">
                    {feedback.successMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    )
};

const mapStateToProps = (state: GlobalState) => ({
    feedback: selectFeedbackState(state)
});
const mapDispatchToProps = (dispatch : any) : dispatchables => ({
    resetError: () => dispatch(resetError()),
    resetWarning: () => dispatch(resetWarning()),
    resetInfo: () => dispatch(resetInfo()),
    resetSuccess: () => dispatch(resetSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
