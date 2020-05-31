# SMCP - Simulated Mission Control Project

## About this project:
This is a project for COSC2408 Programming Project 1. It is run by Craig Robinson, Andrew Scicluna, and Pieter Rombauts. The project client is Dr Gail Iles from RMIT and the supervisors are Vic Ciesielski, Sebastian Rodriguez, and Ian Peake.

The aim of the project is to create a web application that can be used to simulate a mission control center such as the one used by NASA or the ESA. It will be used by students from the BP330 Space Science degree at RMIT.

## Running the project locally:

### Prerequisites:
The frontend is a React application using Redux for state management and Styled Components for CSS management.

The backend is a Node.js application which uses socket.io to handle the bi-directional communication between the clients and the server. 

Node and npm (Node Package Manager) must be installed to run this application.

### Running the application:
Once the project has been cloned from GitHub, it is important to first install the required library files. This is done using the `npm install` command in both the _client_ and _server_ subdirectories. This will install all the necessary libraries into the _node\_modules_ folders.

#### Frontend:
Once the libraries have been installed, the frontend can be run using `npm start` from the _client_ subdirectory. The frontend can then be accessed at `localhost:3000`.

Alternatively, to run a production build of the frontend, the command `npm run build` can first be used to build the project into static files. These can then be served using `serve -s build` (note: this requires the npm package _serve_ to be installed). After using this command, the static files will be hosted on port 5000, meaning it can be accessed at `localhost:5000`.

#### Backend:
To run the backend server, use `npm start` in the _server_ subdirectory. The default port for the server is 4001.

A recommendation for improving this is to install the npm package _nodemon_. This package will automatically restart the backend node application when the files are updated, which is useful for when changes are being made to the server code. Once installed, the server can be run using `nodemon ./server.js`.

## Testing:
The frontend React app has a number of unit tests to ensure the rendering of the components is consistent. These tests are located in the _client/src/\_\_tests\_\__ subdirectory. They are created using a combination of _Jest_ and _Enzyme_, both of which are JavaScript testing libraries. These tests can be run using the `npm test` command. It is also possible to establish a CI/CD pipeline using the `npm test` command in the Travis script to ensure tests are executed on newly pushed branches and pull requests.

## Deployment:
The project is currently being deployed on an Ubuntu server using DigitalOcean as the host. This is likely to change to AWS through RMIT's ITS service as they offer hosting for certain projects.

### Initial Server Setup:
When deploying onto a server, it is recommended to first create a new user and grant it administrative privileges to avoid using the root user. This is because the root user has heightened privileges which allows it to make very destructive changes, even by accident.

### Domain name and DNS setup:
The current domain name for the hosted application is https://smcplab.live, although you may wish to use a different domain name. In any case, ensure that your domain name has been configured with your server host by creating DNS records. You will most likely need to create an A-Type record pointing your domain name (e.g. smcplab.live) and its www variant (i.e. www.smcplab.live) to the IP address of your server. Another A-Type record should also be created using a subdomain to route server traffic differently from frontend traffic. We used `socket.smcplab.live` but you can use whatever subdomain you want. You may also need to create NS-Type records to use the nameservers of your server host provider.

### Installing Nginx:
Nginx is one of the most popular web servers in the world and can be used as a reverse proxy to handle traffic to your server and serve the required files. Therefore, it is important to ensure that Nginx is installed on your server. This can be done using the `apt` packaging system using the following commands: `sudo apt update` and `sudo apt install nginx`. **It is important to keep in mind that if you have set up a firewall on your server that you add nginx to the allowed traffic**.

### Setting up Nginx configuration:
#### Creating server block:
While not technically necessary, it is recommended to create a server block for this project in case you want to host other domains from the current server. Nginx creates a default server block at `/var/www/html` but we will create one specific to the domain name being used. To demonstrate, I will use **example&#46;com**.

1. First, create a directory for your domain: `sudo mkdir -p /var/www/example.com`
2. Next, assign ownership of the directory using the $USER environment variable: `sudo chown -R $USER:$USER /var/www/example.com`
3. Verify that the permissions are correct: `sudo chmod -R 755 /var/www/example.com`
4. Clone the GitHub project into the `/var/www/example.com/` directory.
5. Install node modules in the _client_ and _server_ subdirectories using `sudo npm install`
6. Build the React app in the _client_ subdirectory using `sudo npm run build`

**Important: There is a file located at `/var/www/example.com/client/src/components/Socket.ts` which handles the creation of the socket connection between the client and the server. This file is configured to use `http://127.0.0.1:4001` as the endpoint when running locally. When deploying, the endpoint must be changed to `https://subdomain.example.com` to direct the socket connection to the deployed server. Alternatively, an environment file can be created to avoid needing to change this each time an update is pushed to the server.**

#### Creating frontend configuration block:
In order to allow Nginx to serve the content, a configuration file must be created to route traffic. To create one, use the following command: `sudo nano /etc/nginx/sites-available/example.com`

The configuration file is fairly simple (we'll handle HTTPS traffic later on with an SSL certificate):
```
server {
	listen 80;
	root /var/www/example.com/client/build;
	index index.html index.htm index.nginx-debian.html
	server_name example.com www.example.com
}
```

#### Creating backend configuration block:
Another configuration file should be created for the server which is using the subdomain you created earlier. This will be created using the command: `sudo nano /etc/nginx/sites-available/subdomain.example.com` and then add the following configuration:
```
server {
	server_name subdomain.example.com;
	
	location / {
		proxy_pass http://localhost:4001;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		proxy_set_header Host $host;
	}
}
```

#### Enabling configuration blocks:
Now that the configuration blocks have been created, they must be linked to the `sites-enabled` directory which is what Nginx reads from during start-up.

1. `sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled`
2. `sudo ln -s /etc/nginx/sites-available/subdomain.example.com /etc/nginx/sites-enabled`

Once this has been completed, test to make sure there are no syntax errors in any of the Nginx files we just created: `sudo nginx -t`. If there are no issues, restart Nginx to enable the changes: `sudo systemctl restart nginx`.

### Setting up SSL Certificate:
In order to enable HTTPS traffic and secure the application, a free SSL certificate can be created using Let's Encrypt and Certbot. First, add the repository: `sudo add-rpt-repository ppa:certbot/certbot`. Note: You will need to press ENTER to accept.

Then, install Certbot's Nginx package: `sudo apt install python-certbot-nginx`.

Next, you must obtain an SSL certificate using Certbot: `sudo certbot --nginx -d example.com -d www.example.com -d subdomain.example.com`. You will be prompted for an email address and must accept the terms of service. When prompted, select `2: Redirect` to ensure all traffic to your application uses HTTPS.

Let's Encrypt SSL certificates are only valid 90 days, however the Certbot command just used sets up a script to auto-renew any certificate that is within 30 days of expiry. As a final step, test run this script to ensure it will work in the future: `sudo certbot renew --dry-run`.

**It is important to keep in mind that if you have set up a firewall on your server that you ensure that you've added Nginx's HTTPS traffic to the allowed list**. 
	
### Running server:
In order to ensure that the server remains running even if there is a reboot of the server, it is useful to use a daemon process manager. We recommend using PM2 which can be installed globally using `npm install pm2@latest -g`. Once this is installed, the server can be started using `pm2 start server.js --time` (the `--time` adds timestamps to the logs).

- The server logs can then be accessed using `pm2 logs`.
- Shutting down the server can be done using `pm2 kill`.

### Updating deployment code:
Updating the code running on the server is simple:

1. Kill the server process using `pm2 kill`
2. First, stash any changes made to the existing code (such as changing the Socket.ts endpoint): `sudo git stash`
3. Checkout into the correct branch and pull changes: `sudo git checkout release` and `sudo git pull`
4. Build the React frontend using `sudo npm run build` from the `/var/www/example.com/client` directory.
5. Start the server again using `pm2 start server.js --time` from the `/var/www/example.com/server` directory.


**Best of luck with your project from the SMCP Team!** If you need any assistance, feel free to contact me at s3598394(at)student&#46;rmit&#46;edu&#46;au
