#!/bin/bash

trap 'exit 1' 30 SIGINT

PACKAGES=`find . -name package.json -not -path '*/node_modules/*' -mindepth 2 -maxdepth 3`

for project in $PACKAGES; do
  (
    cd $(dirname $project)
    echo -e "\n==== $(pwd) ====\n"
    # --if-present so projects without a test script (examples) are skipped
    # rather than aborting the whole run.
    npm run test --if-present

    if [ $? -ne 0 ]
    then
      kill -30 $$
    fi
  )
done
