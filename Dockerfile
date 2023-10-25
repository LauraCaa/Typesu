FROM "node"
WORKDIR /opt/typesu
COPY package*.json .
RUN npm i
COPY . ./
EXPOSE "3000"
CMD ["sleep", "infinity"]