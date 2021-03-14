## Front end to MERN project with Teej

* Title yet unknown
* Track our progress here: [https://trello.com/b/woBWWisB/mern-app](https://trello.com/b/woBWWisB/mern-app)
* Our brainstorming: [https://www.notion.so/rachelwong/MERN-project-with-Teej-ad142d3580f647009494d51de891aead](https://www.notion.so/rachelwong/MERN-project-with-Teej-ad142d3580f647009494d51de891aead)
* Reference points are [https://secret-mountain-45294.herokuapp.com/](https://secret-mountain-45294.herokuapp.com/) and [https://linkedout.netlify.app/](https://linkedout.netlify.app/)
* backend of the project: [https://github.com/gamesfreak26/mern-backend](https://github.com/gamesfreak26/mern-backend)

## Instructions

Once you've cloned this repo, run the below commands:

`npm install`

Open on terminal window to initiate the json-server for a fake rest api
`npm run server`

The api endpoint is [http://localhost:5000/products](http://localhost:5000/products)

Open another terminal window, to start running the project on port 3000
`npm start`

### :bomb: Known Issues

* The project makes use of `react-bootstrap` to quickly pulled together the UI of the application without rolling the entire suite of CSS by hand from scratch. At time of writing (14-Mar-2021), there is a known `findDOMNode is deprecated in strict mode` error associated with some `react-bootstrap` components. There is still an active [pull request](https://github.com/react-bootstrap/react-bootstrap/issues/5075) on the library at this time.