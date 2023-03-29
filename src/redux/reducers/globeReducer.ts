const INITIAL_STATE = {
    answerCountry: null,
    answerName: "",
}

export default function userReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case "ADD_ANSWER_COUNTRY": {
            return { ...state, answerCountry: action.payload }
        }
        case "ADD_ANSWER_NAME": {
            return { ...state, answerName: action.payload }
        }

        default: {
            return { ...state }
        }
    }
}