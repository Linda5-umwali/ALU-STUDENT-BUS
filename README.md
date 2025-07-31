# ALU-STUDENT-BUS
# Overview 
The main task was to create a simple yet useful app . Thats why I propose the idea of ALU student Bus Service.
This will be used to inform us where and when the school bus is coming.
This will be doing the following:
#Letting people check-in when they get in the bus in the morning, to help track the number of people who are in the bus till it is full.
#It will show the current location of the bus to let people know when to get to the next bus stops where we usually stop. 
#It will show the bus on map, to let people know the exact time when it will reach their spot.

Problems I'm hoping this will solve.
#leaving people behing because of mis-information of where the bus is.
#As the number of the users is increasing everyday as people are knowing about this new bus that started operating weeks ago, It is leaving people behind because it get filled when we haven't even reached Zindiro((one of the bus stops), This could help a direct schedule of the second round to get everyone.
#I hope to help fix the issue of poor time managent by providing exact time the bus will come and the expected time it will reach it's destination using map and traffic tracking.

ALU Bus Service - Deployment Guide
*Architecture*
This deployment includes 
1.Web01(The first standard web server), 
2.Web02(Second standard web server), and 
3.Lb01(load balancer forwarding traffic to web01 and web02)

*Structure*
Folder Name: ALU-BUS-SERVICE

ALU-BUS-SERVICE
|_public _index.html
| _apps.js
| _package.json
| _.gitignore _ .env
              _ node_modules/

