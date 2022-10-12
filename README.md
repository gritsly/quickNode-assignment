This is a readme for home assignment from quicknode.

I had a few ideas how to accomplish this task:

* Just an nginx/apache installation serving a static site
* An simple python/flask api daemonized through gunicorn and supervisor
* A node.js api using expressjs with simplified deployment using docker

The easiest way is to just serve a static site but I didn't know if it fits the "write a simple daemon" task.

Nevertheless I decided to implement them all as the task is not in itself too complicated and I had previous code examples.

So you can check the work under different ports:

http://198.199.115.88/test - NGINX
http://198.199.115.88:8080/test - PYTHON
http://198.199.115.88:8081/test - NODE.JS

I decided to write an ansible playbook that installs all the requirements and then configures each API. The files needed for the playbook are in corresponding folders.

I was doing testing on a local vagrant ubuntu 2204 box, hence the Vagrantfile.

I think the most elegant and 'web3' way is the third - with a node.js api and docker. That is what I would choose for production probably.

The rest should be self explanatory in the playbook. I also added server update and simple firewall config to the playbook.