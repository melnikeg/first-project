const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { name: 'Egor', id: 1 },
        { name: 'Zhenya', id: 2 },
        { name: 'Anton', id: 3 },
        { name: 'Oxana', id: 4 },
        { name: 'Sveta', id: 5 },
        { name: 'Vova', id: 6 },
        { name: 'Tanya', id: 7 }
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Cool project!' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' }
    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText
            };    
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }                  
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText
            };        
        default:
            return (state);
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessgeTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;