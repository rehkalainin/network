let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello", likes: 11},
                {id: 2, message: "How are you", likes: 12},
                {id: 3, message: "Welcome", likes: 13},
            ],
            newPostText: " Enter your text",
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Kostya"},
                {id: 3, name: "Andrey"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Sveta"},
                {id: 6, name: "Ivan"},
            ],
            messages: [
                {message: "Hello"},
                {message: "How are you"},
                {message: "Good luck"},
                {message: "See you soon"},
            ],
            newMessage: "Enter text"
        }
    },
    getState() {
        return this._state
    },
    rerender() {
        console.log("State changed")
    },
    addPost() {
        const post = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(post)
        this.rerender(this._state)
    },
    updateText(text) {
        this._state.profilePage.newPostText = text
        this.rerender(this._state)
    },
    updateMessage(text) {
        this._state.dialogPage.newMessage = text
        this.rerender(this._state)
    },
    addMessage() {
        const message = {
            message: this._state.dialogPage.newMessage
        }
        this._state.dialogPage.messages.push(message)
        this.updateMessage()
    },
    subscribe(observer) {
        this.rerender = observer
    }

}


export default store