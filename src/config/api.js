// API Configuration
const getApiBaseUrl = () => {
    return 'https://piwebtechnology.com';
};

const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
    SEND_FORM_MAIL: `${API_BASE_URL}/send-form-mail?company=pitamaindia`
};

export default API_BASE_URL;
