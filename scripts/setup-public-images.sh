#!/bin/bash
mkdir -p /vercel/share/v0-project/public/images
cp /vercel/share/v0-project/images/* /vercel/share/v0-project/public/images/
echo "Images copied to public/images/"
