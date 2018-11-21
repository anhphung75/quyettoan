from flexx import flx


class ThemedForm(flx.Widget):

    CSS = """
    .flx-Button {
        background: #9d9;
    }
    .flx-LineEdit {
        border: 2px solid #9d9;
    }
    """

    def init(self):

        with flx.HFix():
            with flx.FormLayout() as self.form:
                self.b1 = flx.LineEdit(title='Name1:', text='Hola')
                self.b2 = flx.LineEdit(title='Age1:', text='Hello world')
                self.b3 = flx.LineEdit(title='Favorite color1:', text='Foo bar')
                flx.Button(text='Submit')
            with flx.FormLayout() as self.form:
                self.b4 = flx.LineEdit(title='Name2:', text='Hola')
                self.b5 = flx.LineEdit(title='Age2:', text='Hello world')
                self.b6 = flx.LineEdit(title='Favorite color2:', text='Foo bar')
                flx.Button(text='Submit')
                flx.Widget(flex=1)  # Add a spacer


app = flx.App(ThemedForm)
assets = app.dump('draft.html', link=0)

from flask import Flask

app = Flask(__name__)

@app.route('/')
def handler():
    return assets['draft.html'].decode()

if __name__ == '__main__':
    app.run(host='localhost', port=8080)