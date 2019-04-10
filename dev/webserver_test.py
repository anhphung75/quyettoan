#!/usr/bin/env python3
#
# Copyright 2009 Facebook
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.

import json
import bcrypt
import markdown
import os.path
import re
import tornado.escape
import tornado.httpserver
import tornado.ioloop
import tornado.locks
import tornado.options
import tornado.web
import unicodedata

from tornado.options import define, options
from db import Session

import psycopg2
from tornado_sqlalchemy import as_future, make_session_factory, SessionMixin

define("port", default=8888, help="run on the given port", type=int)
define("db_host", default="127.0.0.1", help="blog database host")
define("db_port", default=5432, help="blog database port")
define("db_database", default="blog", help="blog database name")
define("db_user", default="blog", help="blog database user")
define("db_password", default="blog", help="blog database password")


class NoResultError(Exception):
    pass

class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r"/", HomeHandler),
            (r"/hoso", HosoHandler),
            (r"/api/v1/hoso/([^/]+)", HosoApiHandler),
        ]
        settings = dict(
            blog_title=u"Tornado Blog",
            template_path=os.path.join(os.path.dirname(__file__), "templates"),
            static_path=os.path.join(os.path.dirname(__file__), "static"),
            #xsrf_cookies=True,
            cookie_secret="__TODO:_GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__",
            #login_url="/auth/login",
            debug=True,
        )

        super(Application, self).__init__(handlers, **settings)


class BaseHandler(tornado.web.RequestHandler):
    def prepare(self):
        self.form_data = {
            key: [val.decode('utf8') for val in val_list]
            for key, val_list in self.request.arguments.items()
        }

    def set_default_headers(self):
        """Set the default response header to be JSON."""
        self.set_header("Content-Type", 'application/json; charset="utf-8"')

    def send_response(self, data, status=200):
        """Construct and send a JSON response with appropriate status code."""
        self.set_status(status)
        self.write(json.dumps(data))

    def get_current_user(self):
        return self.get_secure_cookie("user")


class HomeHandler(BaseHandler):
    def get(self):
        self.render("base.html")


class HosoHandler(BaseHandler):
    @tornado.web.authenticated
    def get(self):
        nam = self.get_argument("nam", None)
        if nam:
            db = Session()
            result = db.execute("SELECT * FROM hoso WHERE nam = %s", int(nam))
            db.remove()
            self.send_response(result, status=201)

class HosoApiHandler(BaseHandler):
    @tornado.web.authenticated
    def get(self):
        mahoso = self.get_argument("mahoso", None)
        if mahoso:
            result = {'msg': 'chwa lam'}
        self.send_response(result, status=201)

    @tornado.web.authenticated
    def post(self):
        mahoso = self.get_argument("mahoso", None)
        sohoso = self.get_argument("sohoso", None)
        khachhang = self.get_argument("khachhang", None)
        diachi = self.get_argument("diachi", None)
        if mahoso:
            result = {'msg': 'chwa lam'}
        self.send_response(result, status=201)


async def main():
    tornado.options.parse_command_line()
    app = Application()
    app.listen(options.port)

    # In this demo the server will simply run until interrupted
    # with Ctrl-C, but if you want to shut down more gracefully,
    # call shutdown_event.set().
    shutdown_event = tornado.locks.Event()
    await shutdown_event.wait()


if __name__ == "__main__":
    tornado.ioloop.IOLoop.current().start()
