let protocol = window.location.protocol
let host = window.location.host
let reg = /^127.0.0.1+/
let baseURL;
if (reg.test(host)) {
    baseURL = 'http://127.0.0.1:80'
} else {
    baseURL = protocol + '//' + host
}
export default baseURL
