
FROM ubuntu
RUN apt-get update
RUN apt-get install -y nginx

FROM python:latest
EXPOSE 8888
ENV PYTHONUNBUFFERED 1
RUN mkdir -p /usr/src/pnaweb
WORKDIR /usr/src/pnaweb
COPY requirements.txt /usr/src/pnaweb/
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ENTRYPOINT ["python3", "run_server.py"]