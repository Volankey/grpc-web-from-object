
sudo docker build -t grpcweb/envoy \
  -f Dockerfile .

sudo docker run -d -p 8080:8080 --network host grpcweb/envoy