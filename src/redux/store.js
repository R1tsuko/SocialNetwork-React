import profileReducer from "./profileReducer";

let store = {

    _subscriber: null,

    _state: {

        profilePage: {
            myPostsData: [
                { id: 1, text: 'post1' },
                { id: 2, text: 'post2' },
                { id: 3, text: 'post3' }
            ],

            newPostText: '',
        },

        messagesPage: {
            chatsData: [
                { id: 1, name: 'tutu', },
                { id: 2, name: 'dudu', }
            ],
            messagesData: [
                { id: 1, text: 'tu', isMine: true},
                { id: 2, text: 'du', isMine: false},
                { id: 3, text: 'tu', isMine: true},
            ],
        },

        sidebar: {
            friendsData: [
                { imgsrc: 'https://steamuserimages-a.akamaihd.net/ugc/1768198688957635829/95A811F58C7331579D2115A7D0412D5CB22B355A/', name: 'Падж' },
                { imgsrc: 'https://steamuserimages-a.akamaihd.net/ugc/1768198688957635829/95A811F58C7331579D2115A7D0412D5CB22B355A/', name: 'Паджеро' },
                { imgsrc: 'https://steamuserimages-a.akamaihd.net/ugc/1768198688957635829/95A811F58C7331579D2115A7D0412D5CB22B355A/', name: 'Мясник' },
            ]
        },
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        
        this._subscriber();
    }
}


export default store;
