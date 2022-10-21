import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        signInUser: {},
        user: {}
    },
    reducers: {
        setUsers: (state, action) => {
            state.usersList.push(action.payload)
        },
        removeUser: (state, action) => {
            state.usersList.forEach((u) => {
                if (u.userId === action.payload) {
                    var i = state.usersList.indexOf(u)
                    state.usersList.splice(i, 1)
                }
            })
        },
        updateUser: (state, action) => {
            state.usersList.forEach((u) => {
                if (u.userId === action.payload.id) {
                    var i = state.usersList.indexOf(u)
                    state.usersList.splice(i, 1)
                    state.usersList[i] = action.payload.data
                }
            })
        },
        setSignInUser: (state, action) => {
            state.signInUser = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
})

export const { setUsers, removeUser, updateUser, setUser, setSignInUser } = userSlice.actions

export default userSlice.reducer