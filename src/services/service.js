import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap'
import { toast } from 'react-toastify'
import { Fragment } from "react"
import { CheckCircle, X } from "react-feather"
import 'react-toastify/dist/ReactToastify.css';
import Avatar from "react-avatar"

const openNotification = (type, message, description) => (
    <Toast>
        <ToastHeader icon={type}>{message}</ToastHeader>
        <ToastBody> {description} </ToastBody>
    </Toast>
)

const OpenToast = ({ color, title, message }) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color={color} icon={(color === 'success') ? <CheckCircle size={12} /> : <X size={12} />} />
                <h6 className='toast-title'>{title}</h6>
            </div>
        </div>
        <div className='toastify-body'>
            <span>{message}</span>
        </div>
    </Fragment>
)

const openToast = (type, title, message) => {
    toast[type](<OpenToast color={(type === 'error') ? 'danger' : type} title={title} message={message} />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true
    })
}

// const OpenToast = ({ color, title, message }) => (
//     <Fragment>
//         <div>
//             <div>
//                 <h6 className="actiontypes">{title}</h6>
//             </div>
//         </div>
//         <div>
//             <span className="actiontypes">{message}</span>
//         </div>
//     </Fragment>
// )

// const openToast = (type, title, message) => {
//     toast[type](<OpenToast color={(type === 'error') ? 'danger' : type} title={title} message={message} />, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//     })
// }


const Storage = {
    isLogedin: (para) => {
        return localStorage.getItem('constroAccesstoken') !== null
    },
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get: (key, value) => {
        return JSON.parse(localStorage.getItem(key))
    },
    setString: (key, value) => {
        localStorage.setItem(key, value)
    },
    logout: () => {
        localStorage.removeItem('constroUserdata')
        localStorage.removeItem('constroAccesstoken')
    },
    getToken: (key, value) => {
        return (localStorage.getItem('constroAccesstoken')) ? localStorage.getItem('constroAccesstoken') : false
    }
}


// const Service = {
//     get: (para) => {
//         const header = {
//             "content-type": "application/json",
//             accept: "application/json"
//         }

//         const token = localStorage.getItem('token')
//         if (token) {
//             header['x-access-token'] = token
//         }
//         return fetch(Config.API_BASE_URL + para.url, {
//             method: "GET",
//             headers: header,
//             body: para.body
//         })
//             .then((response) => {
//                 if (response.status === 401 || response.status === 403) {     //Unauthorized.  Invalid JWT Token
//                     Storage.logout()
//                     window.location.href = '/login'
//                 } else {
//                     return response.json()
//                 }
//             }, (error) => {

//                 if (error === 'TypeError: NetworkError when attempting to fetch resource.') {
//                     openNotification('error', 'Unable to reach server.', 'Please check your network connectivity')
//                 }
//             })
//         //.then(response => response.json());
//     },
//     post: (para) => {
//         const token = localStorage.getItem('token')
//         const header = {}
//         if (token) {
//             header['x-access-token'] = token
//         }

//         header['Accept'] = 'application/json'
//         header['Content-Type'] = 'application/json'

//         return fetch(Config.API_BASE_URL + para.url, {
//             method: "POST",
//             headers: header,
//             body: para.body
//         })
//             .then((response) => {
//                 if (response.status === 401 || response.status === 403) {     //Unauthorized.  Invalid JWT Token
//                     Storage.logout()
//                     window.location.href = '/login'
//                 } else {
//                     return response.json()
//                 }
//             }, (error) => {
//                 console.log(error)
//                 if (error === 'TypeError: NetworkError when attempting to fetch resource.') {
//                     openNotification('error', 'Unable to reach server.', 'Please check your network connectivity')
//                 }
//             })
//         //.then(response => response.json())
//     },
//     put: (para) => {
//         const header = {
//             "content-type": "application/json",
//             accept: "application/json"
//         }

//         const token = localStorage.getItem('token')
//         if (token) {
//             header["Authorization"] = `Bearer ${token}`
//         }

//         return fetch(Config.BASE_URL + para.url, {
//             method: "PUT",
//             headers: header,
//             body: para.body
//         })
//             .then((response) => {
//                 if (response.status === 401 || response.status === 403) {     //Unauthorized.  Invalid JWT Token
//                     Storage.logout()
//                     window.location.href = '/login'
//                 } else {
//                     return response.json()
//                 }
//             }, (error) => {
//                 console.log(error)
//             })
//         //.then(response => response.json())
//     },
//     patch: (para) => {
//         const header = {
//             "content-type": "application/json",
//             accept: "application/json"
//         }

//         const token = localStorage.getItem('token')
//         if (token) {
//             header['x-access-token'] = token
//         }

//         return fetch(Config.API_BASE_URL + para.url, {
//             method: "PATCH",
//             headers: header,
//             body: para.body
//         })
//             .then((response) => {
//                 if (response.status === 401 || response.status === 403) {     //Unauthorized.  Invalid JWT Token
//                     Storage.logout()
//                     window.location.href = '/login'
//                 } else {
//                     return response.json()
//                 }
//             }, (error) => {
//                 console.log(error)
//             })
//         //.then(response => response.json())
//     },
//     delete: (para) => {
//         const header = {
//             "content-type": "application/json",
//             accept: "application/json"
//         }

//         const token = localStorage.getItem('token')
//         if (token) {
//             header['x-access-token'] = token
//         }
//         return fetch(Config.API_BASE_URL + para.url, {
//             method: "DELETE", headers: header, body: para.body
//         })
//             .then((response) => {
//                 if (response.status === 401 || response.status === 403) {     //Unauthorized.  Invalid JWT Token
//                     Storage.logout()
//                     window.location.href = '/login'
//                 } else {
//                     return response.json()
//                 }
//             }, (error) => {

//                 if (error === 'TypeError: NetworkError when attempting to fetch resource.') {
//                     openNotification('error', 'Unable to reach server.', 'Please check your network connectivity')
//                 }
//             })
//         //.then(response => response.json());
//     },
//     getImage(image) {
//         return Config.MEDIA_URL + image
//     }
// }
export { openNotification, Storage, openToast }