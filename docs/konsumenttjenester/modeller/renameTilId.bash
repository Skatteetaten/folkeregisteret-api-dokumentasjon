#!/bin/bash

for filename in `ls`; do
  extension="${filename##*.}"
  newfilename="${filename%.*}"
  
  newfilename="${newfilename%???_*_*}" 
  newfilename="${newfilename##*_}"
  newfilename=$newfilename.$extension

  if [ "$filename" != "$newfilename" ]; then
    mv $filename $newfilename
  fi
done 
