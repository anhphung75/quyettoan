import tornado.ioloop
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello world")


class HosoHandler(tornado.web.RequestHandler):
    def get(self):
        nam = self.get_argument("nam", None)
        self.write("Nam lam viec = {}".format(nam))


class TodoItem(tornado.web.RequestHandler):
    def get(self, mahoso):
        self.write("Todoitem")
        print("mahoso = {}".format(mahoso))
        print(tornado.web.RequestHandler)


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/hoso", HosoHandler),
        (r"/api/v1/item/([^/]+)?", TodoItem)
    ])


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
