
FROM python:latest
ENV PYTHONUNBUFFERED 1
RUN mkdir /pnaweb
WORKDIR /pnaweb
ADD requirements.txt /pnaweb/
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ENTRYPOINT ["python3", "run_server.py"]