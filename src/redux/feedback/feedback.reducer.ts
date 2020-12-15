import {FeedbackState, GlobalState} from "../../types/types";
import FeedbackType, {FeedbackAction} from "./feedback.type";

const INITIAL_STATE : FeedbackState = {
    errorMessage: "",
    hasError: false,
    hasWarning: false,
    warningMessage: "",
    hasInfo: false,
    infoMessage: "",
    hasSuccess: false,
    successMessage: "",

};


const feedbackReducer= (state : FeedbackState = INITIAL_STATE, action : FeedbackAction) : FeedbackState => {
    switch (action.type) {
        case (FeedbackType.RESET_ERROR):
            return {
                ...state,
                hasError: false,
            };
        case (FeedbackType.RESET_WARNING):
            return {
                ...state,
                hasWarning: false,
            };
        case (FeedbackType.RESET_INFO):
            return {
                ...state,
                hasInfo: false,
            };
        case (FeedbackType.RESET_SUCCESS):
            return {
                ...state,
                hasSuccess: false,
            };
        case (FeedbackType.PUT_ERROR):
            return {
                ...state,
                hasError: true,
                errorMessage: action.payload
            };
        case (FeedbackType.PUT_WARNING):
            return {
                ...state,
                hasWarning: true,
                warningMessage: action.payload
            };
        case (FeedbackType.PUT_INFO):
            return {
                ...state,
                hasInfo: true,
                infoMessage: action.payload
            };
        case (FeedbackType.PUT_SUCCESS):
            return {
                ...state,
                hasSuccess: true,
                successMessage: action.payload
            };
        default:
            return state;
    }
};

export default feedbackReducer;
