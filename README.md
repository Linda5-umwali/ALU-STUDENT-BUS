# ALU-STUDENT-BUS
# Overview 
The main task was to create a simple yet useful app . Thats why I propose the idea of ALU student Bus Service.
This will be used to inform us where and when the school bus is coming.
This will be doing the following:

- Letting people check-in when they get in the bus in the morning, to help track the number of people who are in the bus till it is full.

#It will show the current location of the bus to let people know when to get to the next bus stops where we usually stop. 

- It will show the bus on map, to let people know the exact time when it will reach their spot.

# Problems I'm hoping this will solve.

#leaving people behing because of mis-information of where the bus is.

- As the number of the users is increasing everyday as people are knowing about this new bus that started operating weeks ago, It is leaving people behind because it get filled when we haven't even reached Zindiro((one of the bus stops), This could help a direct schedule of the second round to get everyone.

#I hope to help fix the issue of poor time managent by providing exact time the bus will come and the expected time it will reach it's destination using map and traffic tracking.

# key features:
- Student check-in when boarding
- Show current bus location and stops
- Display map view

# Structure

Folder Name: ALU-BUS-SERVICE

ALU-BUS-SERVICE

|_public _index.html

| _apps.js

| _package.json

| _.gitignore _ .env
              _ node_modules/

# Running the App Locally

To run the application on my local machine:

I cloned the repository:
   
git clone https://github.com/your-username/ALU-STUDENT-BUS.git
cd ALU-STUDENT-BUS
npm install
node app.js

# APIs Used

I used the following API to enhance the functionality:

- *Map API*: Used to display the bus route and location.
- [Mapbox API Documentation](https://docs.mapbox.com/)

# Credits & Resources

- [Mapbox API Documentation](https://docs.mapbox.com/)
- [Node.js](https://nodejs.org/)

This project uses the Mapbox JavaScript API on the free tier. All rights and data belong to Mapbox. Thank you to Mapbox developers for the resources provided.

# Challenges & Solutions
- Deploying on Multiple Servers, solution: sed Git and SSH to sync code across Web01 and Web02 and configured HAProxy for load balancing.
- WSL Issues on Local Machine, no solution worked: I tried to upgraded WSL to latest version to run Docker properly, but it didn't work unfortunetly.
- Docker can't work on my Pc so I used the other alternative to deploy on serves without using docker.

# ALU Bus Service - Deployment Guide
*Architecture*

This deployment includes 

1.Web01(The first standard web server) : Hosts the application

2.Web02(Second standard web server) : hosts the application

3.Lb01(load balancer forwarding traffic to web01 and web02) : haproxy load balancer.


This project deploys a simple web application to two web servers ans uses haproxy on a load balancer to distribute incoming traffic between them.

*Deployment steps*

I installed nginx on both web-01  and web-02 (sudo apt install nginx && sudo apt update)

And installed haproxy in my load balancer 
(sudo apt install haproxy)
then edited haproxy config file using 
(sudo nano /etc/haproxy/haproxy.cfg)
# edited things below
*frontend http_front*
*backend http_back*

then restarted the file and finally tested. curl http://localhost

and deplyoyed my app file(index.html) to var/www/html

I verified that the servers are running with curl (curl -I <web-IP>)
and finally checked in lb-01 the functionalitty of the servers using 
*curl http://localhost* and got my results shown in the screenshoot1.

![screenshot1](screenshots/screenshot1.png)

[view the demo video](media/demo.mp4)


 
