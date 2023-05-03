<h1 align=center>NYCLeaderboards <br /> Frontend <br /> V2</h1>
<div align=center>
Version control for my upcoming website. This works with a backend using NodeJS and express, as well as a MySQL database. If you'd like to see a preview of how the frontend will look, instructions with sample data are provided here. Please open an issue for ux/ui suggestions or a pull request if you'd like to make changes directly.
</div>

## Installation

Clone this repository

```bash
  $ git clone https://github.com/bogdanblazhkevych/NYCLeaderboards-frontend-v2
```

Start the react app (make sure you cd into the directory you cloned this repo)

```bash
  $ npm start
```

Congrats, run the app and check out the UI of the website as i develop it.

---------------------

If you have your own database and backend you'd like to use with fetch, there are some further things you must do.
Make sure you acess it through
  
```bash
  <yourIP>:<yourPort>
```

and not 

```bash
  localhost:<yourPort>
```

Next you must replace the backendUrl value in src/Components/config.js


```javascript
  export const config = {
      backendUrl: "http://<yourIPv4>:<yourPort>"
  }
```

Finally, you must replace 3 state hooks to be empty arrays and not placeholder data found in the config.js file.
<br />
Change the state in the following files:
<br /><br />
- src/Components/TopTen/TopTen.js
- src/Components/SearchData/Searchdata.js



```javascript
  const [topTen, setTopTen] = useState([]); // config.topTenPlaceHolder is where the [] is. replace it with the []
  const [data, setData] = useState([]) // config.searchPlaceHolder is where the [] is. replace it with the []
  const [violationCount, setViolationCount] = useState([]) // config.countPlaceHolder is where the [] is. replace it with the []
```

Congrats, the fetch will now do something. You still have to set up your own backend and database. 
<br />
Schema is in config.js
<br />
Good Luck!

