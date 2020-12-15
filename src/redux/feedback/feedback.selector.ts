import {FeedbackState, GlobalState} from "../../types/types";

export const selectFeedbackState = (state : GlobalState) : FeedbackState=> {
    return state.feedback
};

