#!/bin/bash

mongoimport  --host storage -u adminmaster -p passmaster --authenticationDatabase admin --drop --db crunchbase --collection companies companies.json 