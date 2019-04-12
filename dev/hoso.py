import json
import datetime
from .db import engine, Session

### phần tổng thể
def toanbo():
    data = engine.execute(
        "SELECT * FROM dbo.hoso WHERE mahoso is not null")
    return data


def bynam(self, nam):
    data = 1 + nam
    return data


### phần chi tiết
def xem(self, mahoso):
    data = engine.execute(
        "SELECT * FROM dbo.hoso WHERE hosoid=:param", {'param': 26})
    return data


def sua(self, mahoso):
    pass


def xoa(self, mahoso):
    pass


def moi(self, mahoso):
    pass
