#!/bin/bash
docker image ls | grep "$DOCKER_IMAGE_NAME"

echo ""
echo "RUNNIG CONTAINER"
docker run -d \
   -p 9090:80 \
   --name "$DOCKER_CONTAINER_NAME" \
   --network "$DOCKER_NETWORK_NAME" \
   "$DOCKER_IMAGE_NAME":"$DOCKER_IMAGE_TAG" 2>&1

res=$?
echo "RESULT: $res"

exit $res