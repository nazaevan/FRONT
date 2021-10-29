import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.LOGIN_URL
}

export const CREDENTIALS = {
    INVALID_USER:{
        USERNAME: process.env.INVALID_USER_USERNAME,
        PASSWORD: process.env.INVALID_USER_PASSWORD
    },
    STANDARD_USER: {
        USERNAME: process.env.STANDARD_USER_USERNAME,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    },
    GOOGLE_USER: {
        USERNAME: process.env.GOOGLE_USER_USERNAME,
        PASSWORD: process.env.GOOGLE_USER_PASSWORD
    }
}

export const GENERAL_CONFING = {
    TEST_CONFIG: {
        EXPLICIT_WAIT: process.env.EXPLICIT_WAIT_MILISECONDS,
        HOMEPAGE_TITLE: process.env.TODAY_HOMEPAGE_TITLE,
        PROJECTS_NAME_TOGGLE_MENU: process.env.TODAY_HOMEPAGE_TITLE,
        TASK_NUMBER_FOR_LOAD_TESTING: process.env.TASK_NUMBER_FOR_LOAD_TESTING,
        PROJECT_CREATED_SELECTED_COLOR: process.env.PROJECT_CREATED_SELECTED_COLOR,
        PROJECT_CREATED_NAME_PROJECT: process.env.PROJECT_NAME_CREATED_PROJECT,
        PROJECT_CREATED_PROJECT_IS_FAVORITE: process.env.PROJECT_CREATED_PROJECT_IS_FAVORITE,
        PROJECT_TYPE_CREATED_PROJECT: process.env.PROJECT_TYPE_CREATED_PROJECT,
        TASK_CREATED_NAME: process.env.TASK_CREATED_NAME,
        TASK_CREATED_DESCRIPTION: process.env.TASK_CREATED_DESCRIPTION,
        TASK_CREATED_NUMBER_DAYS_AFTER_TODAY: process.env.TASK_CREATED_NUMBER_DAYS_AFTER_TODAY,
        TASK_CREATED_NAME_LOAD_TEST: process.env.TASK_CREATED_NAME_LOAD_TEST,
        TASK_NUMBER_FOR_LOAD_TESTING: process.env.TASK_NUMBER_FOR_LOAD_TESTING,
        INVALID_EMAIL_MESSAGE_ERROR_SPANISH: process.env.INVALID_EMAIL_MESSAGE_ERROR_SPANISH,
        INVALID_EMAIL_MESSAGE_ERROR_ENGLISH: process.env.INVALID_EMAIL_MESSAGE_ERROR_ENGLISH,
        INVALID_USERNAME_PASSWORD_MESSAGE_ERROR_SPANISH: process.env.INVALID_USERNAME_PASSWORD_MESSAGE_ERROR_SPANISH,
        INVALID_USERNAME_PASSWORD_MESSAGE_ERROR_ENGLISH: process.env.INVALID_USERNAME_PASSWORD_MESSAGE_ERROR_ENGLISH
    }
}