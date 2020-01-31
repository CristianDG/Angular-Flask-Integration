# Angular Flask integration

This is a todo app using the Angular framework for the frontend and the Flask framework for the backend.

## Disclaimer

This application can have some security issues because the libraries are not updated, but they can be updated normally.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Python 3.6+

see [Python.org](https://www.python.org/) to downlad

```SH
python --version
```

Pipenv

```SH
pip install pipenv
```

Flask

see the [Flask documentation](http://flask.pocoo.org/) if interested.
will be installed later in the installation part

Node.js
see [Node.org](https://nodejs.org/en/) to download

```SH
node --version
```

Angular CLI
see [Angular.io](https://angular.io/) to download or use the command

```SH
npm install -g @angular/cli
```

```SH
ng help
```

### Installing

You first need to activate the pipenv virtual enviroment

```SH
pipenv shell
```

Next you will install the requirements (this will install Flask to the version i used)

```SH
pipenv sync
```

Next you will enter in the `angular-flask` folder to install the node requirements

```SH
cd angular-flask
npm install
cd ..
```

Next you will run the script `build-dev.py` **in a new shell** and wait untill the output stops

```SH
python build-dev.py
```

Now you can create all you want with angular in the `angular-flask/` folder

Next you will run the script `move-dev.py` **in another shell** to move the files in the `angular-flask/dist/angular-flask` folder to their respective locations

And finally you can execute the `app.py` script to look the "magic" happening

```SH
python app.py
```

**These 3 last scripts will run untill you kill the command**

Now, you can enter http://localhost:5000 in the browser to see the todo app

## Built With

-   [Flask](http://flask.pocoo.org/) - The web framework used for the backend
-   [Angular](https://angular.io/) - The web framework used for the frontend

## Authors

-   **Me** - [CristianDG](https://github.com/PurpleBooth)

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->

## Acknowledgments

-   The todo app is a simple app created in the [Traversy Media](https://www.youtube.com/user/TechGuyWeb) course on Youtube
