import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(
    'api/posts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = response.json();
        return posts;
    });

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log(action, state)
                state.isLoading = false;
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})
export default postsSlice.reducer;