#!/bin/bash

echo "DOCKER_IMAGE_NAME: $DOCKER_IMAGE_NAME"
echo "DOCKER_IMAGE_TAG : $DOCKER_IMAGE_TAG"

echo ""
echo "STOPPING CONTAINER"
docker stop "$DOCKER_CONTAINER_NAME" 2>&1

echo ""
echo "DELETING CONTAINER"
docker rm "$DOCKER_CONTAINER_NAME" 2>&1

echo ""
echo "IMAGE"
docker image ls | grep "$DOCKER_IMAGE_NAME"

image_id=$(docker image ls | grep "$DOCKER_IMAGE_NAME" | awk '{print $3}')

echo ""
echo "DELETING IMAGE: $image_id"
docker rmi "$image_id"

echo ""
echo "BUILDING IMAGE: ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
docker build -f ${DOCKER_DOCKERFILE} -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} .

echo ""
echo "NEW IMAGE"
docker image ls | grep "$DOCKER_IMAGE_NAME"

res=$?
echo "RESULT: $res"

exit $res
