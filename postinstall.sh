#!/bin/bash

if [ -w elevators ]; then
  echo "./dist is writable"
else
  chmod +x elevators
  echo "changed perms on ./dist"
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

	cp -R ./src/js/ elevators/js
