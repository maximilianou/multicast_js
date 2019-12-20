FROM node:12.14.0 AS development

ARG UID=1000
ARG GID=1000
RUN \
  usermod --uid ${UID} node && groupmod --gid ${GID} node &&\
  mkdir /srv/chat && chown node:node /srv/chat

USER node

WORKDIR /srv/chat
