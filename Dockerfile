FROM jekyll/jekyll:3.8.5
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle check || bundle install

ENV LC_ALL=en_US.UTF-8
ENV LANG=en_US.UTF-8
