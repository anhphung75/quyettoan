from sanic import Sanic
from sanic_session import Session
from sanic_jinja2 import SanicJinja2

app = Sanic()
Session(app)

jinja = SanicJinja2(app, pkg_path='templates')
jinja.add_env(variable_start_string, "{^")
jinja.add_env(variable_end_string, "^}")
#
# Specify the package name, if templates/ dir is inside module
# jinja = SanicJinja2(app, pkg_name='sanicapp')
# or use customized templates path
# jinja = SanicJinja2(app, pkg_name='sanicapp', pkg_path='other/templates')
# or setup later
# jinja = SanicJinja2()
# jinja.init_app(app)


@app.route('/')
@jinja.template('base.html')  # decorator method is staticmethod
async def index(request):
    request['flash']('success message', 'success')
    request['flash']('info message', 'info')
    request['flash']('warning message', 'warning')
    request['flash']('error message', 'error')
    return {'greetings': 'Hello, sanic!'}

from sanic.response import text
# Define the handler functions


async def handler1(request):
    return text('OK')


async def handler2(request, name):
    return text('Folder - {}'.format(name))


async def person_handler2(request, name):
    return text('Person - {}'.format(name))

# Add each handler function as a route
app.add_route(handler1, '/test')
app.add_route(handler2, '/folder/<name>')
app.add_route(person_handler2, '/person/<name:[A-z]>', methods=['GET'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
