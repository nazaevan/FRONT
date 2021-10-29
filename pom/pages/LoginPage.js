import { Selector, t } from 'testcafe'
import { GENERAL_CONFING } from '../data/Constants'

class LoginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton =  Selector ('form > .submit_btn')
        this.errorMessageInvalidEmailddress = Selector ('.error_msg > span').withExactText(GENERAL_CONFING.TEST_CONFIG.INVALID_EMAIL_MESSAGE_ERROR_SPANISH)
        this.errorMessageInvalidUserOrPassword = Selector ('.error_msg > span').withExactText(GENERAL_CONFING.TEST_CONFIG.INVALID_USERNAME_PASSWORD_MESSAGE_ERROR_SPANISH)
        this.errorMessageInvalidUserOrPasswordEnglish = Selector ('.error_msg > span').withExactText(GENERAL_CONFING.TEST_CONFIG.INVALID_USERNAME_PASSWORD_MESSAGE_ERROR_SPANISH)
    }

    async submitLoginForm(username, password){
        await t
        .typeText(this.emailInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginButton)
    }

}

export default new LoginPage