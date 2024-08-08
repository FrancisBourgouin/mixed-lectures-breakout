#! /bin/bash


# Let's write a script to interact with some log files!

cat sample_data/nginx.log | grep -i "418"


# 200 OK
# 302 / 304 REDIRECT
# 404 NOT FOUND
# 403 FORBIDDEN
# 418 I'M A TEAPOT