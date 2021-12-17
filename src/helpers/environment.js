let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3025';
        break;
    case 'team-three-blue-client.herokuapp.com':
        APIURL = 'https://team-three-blue-client.herokuapp.com'
}

export default APIURL;