Things we are adding for security:

- Never console logging in PROD mode (set by an environment variable). This is accomplished by using a custom secureLog method rather than the default console.log