# Pitchers front-end

**Index**

- [VScode config](#vscode-config)
- [Code compliance](#code-compliance)
- [Env variables](#environment-variables)

## VSCode config

Make sure you have installed the folowing extensions:

- Eslint
- Prettier

## Code compliance

- **Creating new components**
  - Use functional components over class components
  - Use named function declaration over anonymous or unnamed functions
    - **Wrong** :x:
      ```javascript
      const Component = () => {};
      ```
      ```javascript
      const Component = function() {};
      ```
    - **Right** :heavy_check_mark:
      ```javascript
      function Component() {}
      ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`TDB`

`TBD`
