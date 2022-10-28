### How to run code
1. Clone the repo: `git clone https://github.com/rigrergl/barnes-n-web.git`
2. Install dependencies: `npm i` *
3. Run the project: `npm run dev`  *

*Note*: Make sure to do steps 2 and 3 in the same directory as the package.json file
You will also need to have [Node](https://nodejs.org/en/) installed on your local computer



### Things we are adding for security:

- [X] Never shipping console logs (this might reveal sensitive information on the client)
- [X] Store hashed passwords with salt 
- [X] Use JWT accessTokens (sent to user when they authenticate, expire, signed with server's private key)
- [X] For the accessToken cookie, set SameSite to Strict to add some protection against cross-site request forgery attacks [CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)
- [X] For the accessToken cookie, set HttpOnly to true so that the token is only available to the server. This helps mitigate cross-site scripting attacks [XSS](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_(xss))
- [X] For the accessToken cookie, set Secure to true so that the cookie is only sent to the server with an encrypted request over the HTTPS protocol. This way the cookie is not sent over unsecured HTTP (exceot on localhost). This helps mitigate [man-in-the-middle](https://developer.mozilla.org/en-US/docs/Glossary/MitM) attackers from easily accessing the information in the token.


Security Features TODO
- [ ] user HTTPS instead of HTTP for backend calls
- [ ] Limit repeated login attempts from same source IP address / host
- [ ] Password minimum requirements (at least one digit, one letter, one punctuation symbol, one control character)
- [ ] Require re-login every 24 hours (by using JWT tokens expiration date)
- [ ] Include GeoLocation information in the accessToken so we can block requests that suddenly come from the other side of the planet [details here](https://security.stackexchange.com/questions/185612/how-to-prevent-refreshing-a-stolen-access-token#185613)
