# Security Notes
--- 

## How our authentication works?
We are using access tokens to authenticate our users. 

<ins>Step by step Registration</ins>

1. New user sends their username and password to the server

2. Server generates a hashed password using [bcrypt](https://www.npmjs.com/package/bcryptjs). The password is hashed using an auto-generated random salt of length 8 characters

3. Hash is then stored on the database

<ins>Step by step Login</ins>
1. User sends user username and password to server
2. Server generates hash *H1* from the password sent by user
3. Expected hash *H2* is retrieved from the database
4. *H1* is compared to *H2*, and **if they match** then we generate a [jwt](https://www.npmjs.com/package/jsonwebtoken) token 
5. The token is signed with the server's private key (encrypted using asymmetric encryption with the server's private key) and is set to expire in 24 hours. The userId is included within the token's payload
6. We then use the HTTP header 'Set-Cookie' to save the access token as a cookie in the client's browser.
7. Now when user requests a protected resource, the server can simply use the accessToken cookie that is automatically attached with requests to authenticate the user. This accessToken cookie has several attributes that make it more secure


#### Security attributes in accessToken Cookie
- `Secure=true` provides protection against a **man-in-the-middle** attack. It guarantees that this cookie is only sent in an encrypted request through HTTPS protocol. This means that it will not be sent when using HTTP (this rules does not apply to localhost, for development purposes).
- `HttpOnly=true` adds some protection against cross-site script attacks ([xss](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_(xss))). This attribute makes sure that the cookie is not accessible through the JavaScript `Document.cookie` API, meaning that it will only be sent to the server.
- Path=/api restricts this cookie to only being sent to URLs within the api directory
- `SameSite=strict` is set to provide protection against cross-site request forgery attacks ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)). Setting this attribute to Strict means that the cookie will only be sent to the site from which it originated

## Security related to our deployment
We will use NextJS to deploy the backend server, which uses the HTTPS protocol, meaning our requests will be encrypted.

Our sensitive information such as server private key is not commited anywhere on our repository, but is instead saved as an environment variable

## Special Note on Locations
For the purpose of this assignment, we will not be using any actual user GeoLocation. Instead, we have created a library to generate random GeoLocation data. This is so that we don't expose the locations of anyone testing our application

## Mitigation for SQL Injection attacks
//TODO