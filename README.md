<h1 align=center>NYCLeaderboards <br /> Frontend <br /> V2</h1>

<h1>05/24/2023</h1>
<ul>
    <li>Changed state managment architecture</li>
    - Each button on the website now has a dedicated state variable to manage its own data fetched from the server.
    <br>
    - fixed bug where responses from older requests would overwrite the data from more recent ones, leading to outdated data being displayed.
    <br>
    - implemented a caching system to reduce trips to the server to retrieve static-ish data
    <br>
    - data is not yet cached when displaying plate lookup then displaying leaderboards again. will fix.
</ul>    
<h1>05/19/2023</h1>
<ul>
    <li>updated API endpoints</li>
    - Setup SSL Certificate for the domain
    <br>
    - modified CNAME records for ssl and API subdomain
</ul>
<h1>05/18/2023</h1>
<ul>
  <li>setup AWS rds and beanstalk ec2 to work with eachother</li>
  <li>fixed potential sql injection attacks</li>
  <li>wrote all 4 top ten queries</li>
  <li>setting up for closed beta with password</li>
</ul>

NOTE: password not meant to be a genuine security measure. Meant to deter 99% of people.
