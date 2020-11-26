import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-81a2c.firebaseio.com/'
})