#! /bin/bash
echo "Version for kubepia/lab-istio-head?"
read VERSION
if [ "$VERSION" -ne ]; then
echo "need and version"
exit 1
fi

echo "docker build . -t kubepia/lab-istio-head:$VERSION"
cd ./head
docker build . -t kubepia/lab-istio-head:$VERSION
docker tag kubepia/lab-istio-head:$VERSION kubepia/lab-istio-head:latest
docker push kubepia/lab-istio-head:$VERSION
docker push kubepia/lab-istio-head:latest
