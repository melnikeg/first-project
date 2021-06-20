import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {

        profilePage: {
    
            posts: [
                { id: 1, likesCount: 15, message: 'Hi, how are you?' },
                { id: 2, likesCount: 25, message: 'It\'s my first post' },
                { id: 3, likesCount: 5, message: 'New post' },
                { id: 4, likesCount: 2, message: 'Cool post' }
            ],
            
            newPostText: 'jw.org',
    
        },
    
        dialogsPage: {
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
    
            newMessageBody: ''
    
        },
        
        sidebar: {
            friends: [
                { name: 'Zhenya', id: 1 },
                { name: 'Anton', id: 2 },
                { name: 'Andrew', id: 3 }
            ]
        },
    
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;       
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    }, 
    
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
       
    }    
}

export default store;