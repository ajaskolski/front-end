[![Build Status](https://travis-ci.org/microservices-demo/front-end.svg?branch=master)](https://travis-ci.org/microservices-demo/front-end)
[![](https://images.microbadger.com/badges/image/weaveworksdemos/front-end.svg)](http://microbadger.com/images/weaveworksdemos/front-end "Get your own image badge on microbadger.com")

#Start
First You need to download repos (both are public) ->

### 1
 [ajaskolski/microservices-demo-cypress](https://github.com/ajaskolski/microservices-demo-cypress)
 I forked front end repository and push my own docker image to introduce cypress.
 ajaskolski/front-end
 to start just run docker containers:
 
  `docker-compose -f deploy/docker-compose/docker-compose.yml up -d`
  
  after work just clean containers:
  
  `docker-compose -f deploy/docker-compose/docker-compose.yml down`
### 2 
  [ajaskolski/front-end](https://github.com/ajaskolski/front-end) 
 All the sweets of cypress and new code can be found in this repo.
 You can run cypress tests by 
 
 `cypress run` 
 
 or use gui 
 
 `cypress open`
  
  
  

 
 
 
 


#Summary

Application got some bugs so I choose sample paths viable to automate.
Next step would be adding database for clean DDT firebase/mysql


## Node

`npm install`

Front-end app
---
Front-end application written in [Node.js](https://nodejs.org/en/) that puts together all of the microservices under [microservices-demo](https://github.com/microservices-demo/microservices-demo).

# Build

## Dependencies

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Version</th>
    </tr>
  </thead>
  <tbody>
   <tr>
        <td><a href="https://nodejs.org/en/">Node</a></td>
        <td>>= 12.16.3</td>
      </tr>
    <tr>
      <td><a href="https://docker.com">Docker</a></td>
      <td>>= 1.12</td>
    </tr>
    <tr>
      <td><a href="https://docs.docker.com/compose/">Docker Compose</a></td>
      <td>>= 1.8.0</td>
    </tr>
    <tr>
      <td><a href="gnu.org/s/make">Make</a>&nbsp;(optional)</td>
      <td>>= 4.1</td>
    </tr>
  </tbody>
</table>


