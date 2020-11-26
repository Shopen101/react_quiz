import { 
    FETCH_QUIZES_START, 
    FETCH_QUIZES_SUCCESS, 
    FETCH_QUIZES_ERROR, 
    FETCH_QUIZE_SUCCESS, 
    QUIZ_SET_STATE, 
    FINISHED_QUIZ,
    QUIZ_NEXT_QUESTION,
    QUIZ_RETRY
} from '../actions/actionTypes'

const initialState = {
    quizes: [],
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success'  or 'error'}
    loading: true,
    quiz: null
}

export default function quizReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state, loading: false, quizes: action.quizes
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }

        case FETCH_QUIZE_SUCCESS:
            return {
                ...state, loading: false, quiz: action.quiz
            }

        case QUIZ_SET_STATE:
            return {
                ...state, answerState: action.answerState, results: action.results
            }

        case FINISHED_QUIZ:
            return {
                ...state, isFinished: true
            }
        case QUIZ_NEXT_QUESTION:
            return {
                ...state, answerState: null, activeQuestion: action.number
            }
            
        case QUIZ_RETRY:
            return {
                ...state,
                activeQuestion: 0,
                answerState: null,
                isFinished: false,
                results: {}
            }

        default:
            return state
    }
    
}