#! /bin/bash
echo "Version for kubepia/lab-istio-backend?"
read VERSION
if [ "$VERSION" -ne ]; then
echo "need and version"
exit 1
fi

echo "docker build . -t kubepia/lab-istio-backend:$VERSION"
cd ./backend
docker build . -t kubepia/lab-istio-backend:$VERSION
docker tag kubepia/lab-istio-backend:$VERSION kubepia/lab-istio-backend:latest
docker push kubepia/lab-istio-backend:$VERSION
docker push kubepia/lab-istio-backend:latest
