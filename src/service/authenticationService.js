import axios from "axios";
import url from '../configuration/config';
import { constant } from "../configuration/constants";

export class AuthService {
    static authenticationUrl = url.loginUrl;

static authenticateUser = async (user) => {
    try {
        const resp = await axios.post(this.authenticationUrl, user);
        let response = resp.data;

        console.log("data from authentication service", response);

        if (response) {
            if (response?.message === constant.Authorized) {
                // sessionStorage.setItem(constant.token, response.data);
                return response;

            } else if (response?.message === constant.User) {
                return response;

            }else if (response?.message === constant.Unauthorized) {
                return "Unauthorized";
            }
        }
    } catch (error) {
        console.log(error);
        return "Login Failed";
    }
}
}