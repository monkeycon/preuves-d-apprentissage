# Projet SLR - preuves d'apprentissage

This project is my semester project. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Get Application to Local

```sh
$ git clone https://github.com/monkeycon/preuves-d-apprentissage.git
$ cd preuves-d-apprentissage
$ npm install
# if you want to change branch, par default is `master`
$ git checkout [branch-name]
```

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment on Cozy

To deploy the application on Cozy, you need a virtual machine Debian.
Follow these steps in a terminal to install and run the docker container on Cozy.

```sh
$ git clone https://github.com/monkeycon/preuves-d-apprentissage.git
$ cd preuves-d-apprentissage
$ npm install
$ yarn install
$ npm run build
$ cp manifes.webapp dist/
$ docker run --rm -it -p 8080:8080 -v "$(pwd)/dist":/data/cozy-app/preuves-d-apprentissage cozy/cozy-app-dev
```

The application is available at http://preuves-d-apprentissage.cozy.tools.8080.

## Organization of branch

There are 4 branches in my project.

|    Branch    | Functionality |
| ---------- | ----- |
| `master` | Basic functionalities, no interaction with DB or Server |
| `feature/drag-and-drop` | Drag and drop a proof |
| `feature/upload-file` | Upload file to server |
| `feature/pouchdb` | Interaction with CouchDB using PouchDB |


### Branch `master`

The branch `master` can deploy on Cozy. It has the basic functionalities. The proofs shown in the application are in local folder of the project.

```sh
$ git clone https://github.com/monkeycon/preuves-d-apprentissage.git
$ cd preuves-d-apprentissage
$ npm install
$ ng serve
```

### Branch `feature/drag-and-drop`

The branch `feature/drag-and-drop` has one more functionality than `master`: Drag and drop a proof, get the data to use in an other place.

This functionality is realized with an Angular Package [ng2-dnd](https://github.com/akserg/ng2-dnd).

```sh
$ cd preuves-d-apprentissage
$ git checkout feature/drag-and-drop
$ npm install
$ ng serve
```

### Branch `feature/upload-file`

The branch `feature/upload-file` has one more functionality than `master`: Upload file to server.

This functionality is realized with an Angular Package [ng2-file-upload](https://github.com/valor-software/ng2-file-upload).

```sh
$ cd preuves-d-apprentissage
$ git checkout feature/upload-file
$ npm install
$ ng serve
```

This functionality should be completed by adding an URL of server that can deal with the upload file request in the file [proof-dialog.component.ts](./src/app/proof/proof-dialog.component.ts).

```ts
const URL = ''; // define the server URL here
```

### Branch `feature/pouchdb`

The branch `feature/pouchdb` has the interaction with CouchDB using [PouchDB](https://pouchdb.com/).
It works on Windows, but not yet on Cozy(Linux).

```sh
$ cd preuves-d-apprentissage
$ git checkout feature/pouchdb
$ npm install
$ ng serve
```

If the database doesn't work on Windows, please install typings packages.

```sh
$ npm install -g typings
$ typings install --global --save dt~pouchdb dt~pouchdb-adapter-websql dt~pouchdb-browser dt~pouchdb-core dt~pouchdb-http dt~pouchdb-mapreduce dt~pouchdb-node dt~pouchdb-replication
```

If want to change a database, please modify the URL of database in the file [proof.service.ts](./src/app/proof/proof.service.ts).

```ts
public db: any = new PouchDB('http://localhost:5984/preuves-d-apprentissage'); // create/connect to the DB
```
