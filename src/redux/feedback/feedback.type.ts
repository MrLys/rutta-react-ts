import HabitActionTypes from "../habit/habit.types";

enum FeedbackType {
    RESET_ERROR = "RESET_ERROR",
    RESET_WARNING = "RESET_WARNING",
    RESET_INFO = "RESET_INFO",
    RESET_SUCCESS = "RESET_SUCCESS",
PUT_ERROR = "PUT_ERROR",
    PUT_WARNING = "PUT_WARNING",
    PUT_INFO = "PUT_INFO",
    PUT_SUCCESS = "PUT_SUCCESS"
}

export type FeedbackAction = {
    type: FeedbackType
    payload: any
}
export default FeedbackType;