import json
import tornado.ioloop
import tornado.web
from db import Session

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

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

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

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/hoso", HosoHandler),
        (r"/api/v1/hoso/([^/]+)", HosoApiHandler),
    ])

def main():
    app = make_app()
    server = tornado.httpserver.HTTPServer(app)
    server.bind(8888)
    server.start(0)  # forks one process per cpu
    tornado.ioloop.IOLoop.current().start()

if __name__ == '__main__':
    main()