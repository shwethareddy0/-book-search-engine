# Book Search Engine

## Description

Book Search Engine is an application where users can search google books and save to their favorite list. Later they can manage the list and remove the books from the list.

Here is the link to the [deployed application](https://sp-book-search-engine.herokuapp.com/)

### Features

- Easy to use
- User friendly
- Generates a responsive webpage

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Installation

- Create a new repository on your GitHub account.
- Clone this repository.
- Run `npm install`
- Run `npm run develop`

## Usage

This project can be used in any web browser or on any devices including the mobile devices.

The following is the demo screenshot of the deployed application.

![Demo screenshot](./images/demo-book-search-engine.gif)

Following is a code snippet of the application page.

Here it refers to the authentication module of the book search engine.

```Node.js

login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user foiund with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

```

## Technologies Used

- React
- MongoDB, Mongoose
- Node.js
- Heroku
- Bootstrap
- Git
- GitHub

## Credits

- npmjs.com
- MDN / W3Schools

## License

This project is licensed under the [MIT](./LICENSE) license.
