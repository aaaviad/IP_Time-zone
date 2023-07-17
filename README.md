# Time-zone by IP Addres

This service provides the time-zone of an IP address using the ipgeolocation.io API.
this project is using node.js, so make sure its install on your machine.

### to run the project, follow these steps:
1. Clone the repository:
```
git clone https://github.com/aaaviad/IP_Time-zone.git
```   
2. enter to project directory:
```
cd IP_Time-zone
```
4. Install the dependencies:
```
npm install
```
4. run the node:
```
npm start
```


### for docker run:
 ```
 docker run --name YOUR_CONTINER_NAME -p 3000:3000 -d aaaviadt/savvy_assignment:tagname
```



## Usage
 
 Open your web browser and navigate to the following URL, replacing IP_ADDRESS with the desired IP address:
 
 https://localhost:3000?ip=IP_ADDRESS
 
 and you will get the time-zone to the provided IP address.
