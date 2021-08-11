# Dockerfile to run a simple redis-server using dockerfile


FROM alpine

RUN apk add --update redis

CMD ["redis-server"]
