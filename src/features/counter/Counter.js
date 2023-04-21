import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './CounterSlice';
import { fetchPosts } from './PostsSlice';
export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const { posts, isLoading, error } = useSelector((state) => state);
    console.log(posts)
    const dispatch = useDispatch();
    const handleFetchPosts = () => {
        dispatch(fetchPosts());
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={handleFetchPosts}>Fetch Posts</button>
        </div>
    )
}
