from flexx import flx

class Example(flx.Widget):

    def init(self):
        with flx.HBox():
            flx.Button(text='hello', flex=1)
            flx.Button(text='world', flex=2)

app = flx.App(Example)
assets = app.dump('draft.html', link=0)

from flask import Flask

app = Flask(__name__)

@app.route('/')
def handler():
    return assets['draft.html'].decode()

if __name__ == '__main__':
    app.run(host='localhost', port=8080)