---
title: "How to provision a linux server/vm for hosting a flask web app"
layout: post
date: 2024-2-16 09:30
image: /assets/images/WebsiteImages.jpg
headerImage: false
projects: true
hidden: false
tag:
- flask
- devops
- ci/cd
- terraform
- git
- azure
category: blog
author: Tyler
description: "Use a linux vm to host your Flask web app."
---

# Purpose
The purpose for this article is to inform anyone who finds themselves setting up a Flask web app on a linux server. I have developed a basic web app using HTML5 and CSS. If you haven't heard of Flask, it is a scalable, flexible, and light framework for Python. I am hosting my web app in Azure using a linux VM. The steps below help you provision a linux server to host said application.

# Prerequisites
- Linux VM
  - Any infrastructure needed for the VM.
- Networking settings for VM (be able to connect)
- SSH key pair


# Connecting
Once the VM is created, connect to it using SSH (for Linux) or Remote Desktop (for Windows).

Use a terminal (for Linux) or Remote Desktop Connection (for Windows) to establish the connection.

#Install Python
Update the package repository (for Linux):

```bash
sudo apt update   # for Ubuntu/Debian
sudo yum update   # for CentOS/RHEL
```

Install Python (version 3.x):

```bash
sudo apt install python3   # for Ubuntu/Debian
sudo yum install python3   # for CentOS/RHEL
```

Verify the installation:

```bash
python3 --version
```

# Install Pip

Pip is a package manager for Python that allows you to install additional libraries and dependencies.

```bash
sudo apt install python3-pip   # for Ubuntu/Debian
sudo yum install python3-pip   # for CentOS/RHEL
```

Verify the installation:

```bash
pip3 --version
```

# Install Flask:
Use pip to install Flask, the Python web framework:

```bash
pip3 install Flask
```

# Install Additional Dependencies:

Depending on the requirements of your Flask web application, you may need to install additional dependencies such as database drivers, Flask extensions, or other libraries. Use pip to install these dependencies as needed.

# Copy Your Flask Application Code:

Copy your Flask application code to the virtual machine. You can use SCP (for Linux) or FileZilla (for Windows) to transfer files between your local machine and the virtual machine.

# Configure Your Flask Application:
Modify any configuration files (e.g., config.py) as necessary to specify settings such as database connection strings, application secret keys, and other parameters.

# Run Your Flask Application:

Navigate to the directory containing your Flask application code.
Use the flask run command to start the Flask development server:

```bash
flask run --host=0.0.0.0
```

Flask application should now be running and accessible from the public IP address of your virtual machine.

# Set Up Nginx or Apache (Optional):

For production deployments, consider setting up a reverse proxy server like Nginx or Apache to handle incoming HTTP requests and serve static files. Configure the reverse proxy to forward requests to your Flask application running on a specific port.

# Secure Your Virtual Machine:

Ensure that your virtual machine is secure by following best practices such as disabling unnecessary ports, configuring a firewall, enabling automatic security updates, and implementing strong authentication mechanisms.

# Monitoring and Maintenance:

Set up monitoring and logging for your virtual machine to track performance metrics, errors, and other relevant information. Regularly monitor and maintain your virtual machine to ensure optimal performance and security.

## Signing Off

Thank you all.

Best regards,
Tyler

---

Connect with me on YouTube or just consider subscribing! Thanks!

**Check out my YouTube!**

<iframe width="560" height="315" src="https://www.youtube.com/embed/RELH4x4U0I8?si=Tivd8tWsXt22hPzn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="747" height="420" src="https://www.youtube.com/embed/VRXHawfSMuM" title="The Shared Responsibility Model Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[1]: https://daringfireball.net/projects/markdown/
[2]: https://www.fileformat.info/info/unicode/char/2163/index.htm
[3]: https://www.markitdown.net/
[4]: https://daringfireball.net/projects/markdown/basics
[5]: https://daringfireball.net/projects/markdown/syntax
[6]: https://kune.fr/wp-content/uploads/2013/10/ghost-blog.jpg
