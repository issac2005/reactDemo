import {Navigate} from 'react-router-dom'
import ManagePost from '../container/managePost'
import Post from '../container/post'

export default [
    {
        path: '/',
        element: <ManagePost />
    },
    {
        path: '/managePost',
        element: <ManagePost />
    },
    {
        path: '/post',
        element: <Post />
    },
    {
        path: '*',
        element: <Navigate to="managePost" />
    }
]