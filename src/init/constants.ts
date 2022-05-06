// Network
export const API_URL = process.env.API_URL || 'http://localhost:4000';
export const ROOT_URL = 'https://api.barbarossa.pp.ua/';
export const REFRESH_AUTH_PATH = ROOT_URL + 'users/refresh/';
export const REGISTRATION_PATH = ROOT_URL + 'users/register';

export const FETCH_MESSAGES_PATH = ROOT_URL + 'messages';
export const POST_MESSAGE_PATH = ROOT_URL + 'messages';
export const DELETE_MESSAGE_PATH = ROOT_URL + 'messages/';
export const PUT_MESSAGE_PATH = ROOT_URL + 'messages/';

export const RETRIES_REQUEST_COUNT = 3;

// Local
export const APP_NAME = process.env.APP_NAME || 'Awesome web app';

// Auth
export const USER_ID = 'userId';

// Keys
export const ENTER_KEY_CODE = '13';
export const CHANGE_LANG_KEY = 'changeLang';
export const SHIFT_KEY_CODE = '16';
export const SPACE_KEY_CODE = '32';
export const BACKSPACE_KEY_CODE = '8';

// View size
export const MOBILE_WIDTH = '(max-width: 425px)';
export const TABLET_WIDTH = '(min-width: 426px) and (max-width: 768px)';
export const LANDSCAPE_HEIGHT = '(max-height: 580px)';
