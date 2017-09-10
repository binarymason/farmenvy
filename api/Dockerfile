FROM ruby:2.4

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY Gemfile* /usr/src/api/
RUN bundle install -j 4

