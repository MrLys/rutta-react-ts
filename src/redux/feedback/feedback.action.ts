import FeedbackType from "./feedback.type";




export const putError = (payload: any) => ({
    type: FeedbackType.PUT_ERROR,
    payload: payload
});

export const putWarning = (payload: any) => ({
    type: FeedbackType.PUT_WARNING,
    payload: payload
});

export const putInfo = (payload: any) => ({
    type: FeedbackType.PUT_INFO,
    payload: payload

});

export const putSuccess = (payload: any) => ({
    type: FeedbackType.PUT_SUCCESS,
    payload: payload
});
export const resetError = () => ({
    type: FeedbackType.RESET_ERROR
});

export const resetWarning = () => ({
    type: FeedbackType.RESET_WARNING
});

export const resetInfo= () => ({
    type: FeedbackType.RESET_INFO
});

export const resetSuccess= () => ({
    type: FeedbackType.RESET_SUCCESS
});
