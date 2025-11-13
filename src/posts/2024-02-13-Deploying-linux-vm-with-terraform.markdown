---
title: "Deploying Linux VMs with Terraform: Infrastructure as Code"
date: 2024-02-13
description: "Learn how to provision and manage Linux virtual machines using Terraform for automated infrastructure deployment."
tag:
  - terraform
  - infrastructure-as-code
  - azure
  - linux
  - automation
category: tutorial
---

# Deploying Linux VMs with Terraform: Infrastructure as Code

Infrastructure as Code (IaC) has revolutionized how we manage and deploy cloud resources. In this guide, I'll show you how to use Terraform to deploy Linux virtual machines in Azure with best practices for security and scalability.

## Why Terraform?

Terraform provides several advantages over manual resource creation:

- **Version Control**: Infrastructure changes are tracked in Git
- **Consistency**: Eliminates configuration drift
- **Reusability**: Modules can be shared across projects
- **Multi-Cloud**: Single tool for AWS, Azure, GCP, etc.
- **Planning**: `terraform plan` shows changes before applying

## Project Structure

```
terraform-azure-linux/
├── main.tf
├── variables.tf
├── outputs.tf
├── terraform.tfvars
├── modules/
│   └── vm/
│       ├── main.tf
│       ├── variables.tf
│       └── outputs.tf
└── .gitignore
```

## Main Configuration

```hcl
# main.tf
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = "terraform-state"
    storage_account_name = "terraformstate123"
    container_name       = "tfstate"
    key                  = "linux-vm.tfstate"
  }
}

provider "azurerm" {
  features {}
}

# Resource Group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

# Virtual Network
resource "azurerm_virtual_network" "vnet" {
  name                = "${var.prefix}-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
}

# Subnet
resource "azurerm_subnet" "subnet" {
  name                 = "${var.prefix}-subnet"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}

# Network Security Group
resource "azurerm_network_security_group" "nsg" {
  name                = "${var.prefix}-nsg"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  security_rule {
    name                       = "SSH"
    priority                   = 1001
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = var.allowed_ssh_ip
    destination_address_prefix = "*"
  }
}

# VM Module
module "vm" {
  source = "./modules/vm"

  name                = "${var.prefix}-vm"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  subnet_id           = azurerm_subnet.subnet.id
  nsg_id              = azurerm_network_security_group.nsg.id

  vm_size             = var.vm_size
  admin_username      = var.admin_username
  ssh_public_key      = var.ssh_public_key
}
```

## VM Module

```hcl
# modules/vm/main.tf
resource "azurerm_public_ip" "pip" {
  name                = "${var.name}-pip"
  resource_group_name = var.resource_group_name
  location            = var.location
  allocation_method   = "Static"
}

resource "azurerm_network_interface" "nic" {
  name                = "${var.name}-nic"
  location            = var.location
  resource_group_name = var.resource_group_name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = var.subnet_id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}

resource "azurerm_network_interface_security_group_association" "nsg_assoc" {
  network_interface_id      = azurerm_network_interface.nic.id
  network_security_group_id = var.nsg_id
}

resource "azurerm_linux_virtual_machine" "vm" {
  name                = var.name
  resource_group_name = var.resource_group_name
  location            = var.location
  size                = var.vm_size
  admin_username      = var.admin_username

  network_interface_ids = [
    azurerm_network_interface.nic.id,
  ]

  admin_ssh_key {
    username   = var.admin_username
    public_key = var.ssh_public_key
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "Ubuntu2204"
    sku       = "22_04-lts"
    version   = "latest"
  }

  custom_data = base64encode(<<-EOF
    #!/bin/bash
    apt-get update
    apt-get install -y nginx
    systemctl enable nginx
    systemctl start nginx
    EOF
  )
}
```

## Variables and Security

```hcl
# variables.tf
variable "prefix" {
  description = "Prefix for all resources"
  type        = string
  default     = "linux-demo"
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "East US"
}

variable "vm_size" {
  description = "VM size"
  type        = string
  default     = "Standard_B2s"
}

variable "admin_username" {
  description = "Admin username"
  type        = string
  default     = "azureuser"
}

variable "allowed_ssh_ip" {
  description = "IP address allowed for SSH"
  type        = string
  sensitive   = true
}

variable "ssh_public_key" {
  description = "SSH public key"
  type        = string
  sensitive   = true
}
```

## Deployment Commands

```bash
# Initialize Terraform
terraform init

# Format and validate
terraform fmt
terraform validate

# Plan deployment
terraform plan -out=tfplan

# Apply changes
terraform apply tfplan

# Clean up
terraform destroy
```

## Best Practices

1. **State Management**: Use remote state with locking
2. **Security**: Never commit secrets to version control
3. **Modularization**: Break down complex infrastructure into modules
4. **Version Control**: Use Git for all Terraform code
5. **Testing**: Use `terraform plan` to review changes
6. **Documentation**: Comment complex configurations

This Terraform setup provides a solid foundation for deploying Linux VMs in Azure with proper security, scalability, and maintainability.

*Explore the complete Terraform configuration in my GitHub repository!*
