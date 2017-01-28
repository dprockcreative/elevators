#!/bin/bash

if [ -w elevators ]; then
  echo "./elevators is writable"
else
  chmod +x elevators
  echo "changed perms on ./elevators"
fi

echo "Building Elevator Directories"

	mkdir -p elevators/css
	mkdir -p elevators/fonts
	mkdir -p elevators/images
	mkdir -p elevators/js

echo "Installing CSS"

	cp -R ./src/css/ elevators/css

echo "Installing Fonts"

	cp -R ./src/fonts/ elevators/fonts

echo "Installing Images"

	cp -R ./src/images/	elevators/images

echo "Installing JavaScript"

	cp -R ./dist/ elevators/js
