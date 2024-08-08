#! /bin/bash

FOLDER=$(pwd | grep -oP '(/[^/]*$)')
CURRENT_FOLDER=$(pwd)
VIMEO_VAL=$(cat ${CURRENT_FOLDER}/../prefix.md)

# FOLDER, CURRENT_FOLER, VIMEO_VAL
# VARIABLES

# echo => Reflect what we wrote in console (Print)
# cd => change directory
# git => Version control 
# git add => add files
# git commit => confirm the addition of files
# git push => push the files to remote server

echo "Name of the lecture in the commit will be" ${FOLDER#?}
cd ..
echo "Returning to main lecture folder & adding files"
git add .
git commit -m "add ${FOLDER#?} lecture"
echo "Commited current lecture with 'add ${FOLDER#?} lecture'"
git push
echo "Lecture pushed"
echo ""
echo "${FOLDER}${VIMEO_VAL} "



