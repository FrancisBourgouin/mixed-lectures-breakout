# Managing Linux

## Command cheatsheet

https://phoenixnap.com/kb/wp-content/uploads/2023/11/linux-commands-cheat-sheet-pdf.pdf

## Common commands

- man, view a *manual* for commands in Linux
- ls, to *list* files
- cd, to *change directories*
- pwd, to *print working directory*
- touch, to *touch* a file, or to create it
- mkdir, to *make a directory*
- sudo, to *do as superuser*

## Filesystem navigation structure

- `/`, the root path of the system (absolute paths)
- `~`, the root path of the user (/home/user) (absolute paths)
- `.`, the current location (relative path)
- `..`, the directory 'above' the current location (relative path)

## Installing and removing applications

They will need root access to execute properly

- `apt` in debian-based distrbutions
- `dnf` in redhat-based distributions
- `pacman` in arch-based distributions

## Permission system

Permissions are given as a set of three scopes:

- Owner, the user that owns the file
- Group, the groups that the owner belongs to
- Other, everybody else (Known as world sometimes)

The permissions that can be given are:

- Read (R), Given so that we can read / access the content of the file
- Write (W), Given so that we can write to the file
- eXecute (X), Given so that we can execute the file

## Changing permissions

https://chmod-calculator.com/

We can change permissions in two ways, by changing the owner and group or by changing the permissions of the file directly.

- chown
- chgrp

For permissions:

Read: 4
Write: 2
Execute: 1

- chmod 755
- chmod +r-x

## Processes

Let's explore commands that are running, processes are what are running your applications (an application can have more than one process)

- ps
- kill



d rwx r-x r-x