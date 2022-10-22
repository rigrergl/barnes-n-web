### How to run code
1. Clone the repo: `git clone https://github.com/rigrergl/barnes-n-web.git`
2. Install dependencies: `npm i` *
3. Run the project: `npm run dev`  *

*Note*: Make sure to do steps 2 and 3 in the same directory as the package.json file
You will also need to have [Node](https://nodejs.org/en/) installed on your local computer



### Things we are adding for security:

- [X] Never shipping console logs (this might reveal sensitive information on the client)


Security Features TODO
- [ ] user HTTPS instead of HTTP for backend calls
- [ ] Limit repeated login attempts from same source IP address / host
- [ ] Password minimum requirements
- [ ] Require re-login every thirty days
