const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, likesCount: 15, message: 'Hi, how are you?' },
        { id: 2, likesCount: 25, message: 'It\'s my first post' },
        { id: 3, likesCount: 5, message: 'New post' },
        { id: 4, likesCount: 2, message: 'Cool post' }
    ],
    
    newPostText: 'jw.org',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }            
        }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }        
        default:
            return (state);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;