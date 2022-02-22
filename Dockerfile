FROM cypress/browsers:node16.5.0-chrome97-ff96
WORKDIR /src/
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . /src/
RUN chmod +x /src/start.sh
ENTRYPOINT ["/src/start.sh"]