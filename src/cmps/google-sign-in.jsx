import { useEffect } from "react";
import { utilService } from '../services/util.service'
import { useDispatch } from "react-redux";
import { signupUser } from "../store/actions/user.action";
import { useNavigate } from "react-router-dom";

export const GoogleSignIn = () => {

    const CLIENTID = '724705125980-2dkp1h7rqideseumtig506qdin717emd.apps.googleusercontent.com'
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: CLIENTID,
            callback: handleResponse
        })

        google.accounts.id.renderButton(
            document.querySelector(".google-sign-in"),
            { theme: "outline", size: 'large', text: 'Google' }
        )
    }, [])



    const handleResponse = (res) => {

        const loggedUser = utilService.parseJwt(res.credential)
        const user = {
            email: loggedUser.email,
            password: utilService.makeId(15),
            fullname: loggedUser.name,
            imgUrl: loggedUser.picture,
            isGoogleUser: true
        }
        dispatch(signupUser(user))
    }


    return <div className='google-sign-in '></div>
}