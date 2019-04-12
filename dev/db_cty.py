import os
import sys
import datetime
from sqlalchemy import Table, MetaData, ForeignKey, Column, create_engine
from sqlalchemy import Integer, String, Unicode, DateTime, Date, Sequence
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker, relationship

Base = declarative_base()




# Create an engine that stores data in the local directory's
# sqlalchemy_example.db file.
#engine = create_engine('sqlite:///sqlalchemy_example.db')
#SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
import urllib
params=urllib.parse.quote_plus(
"DRIVER={ODBC Driver 17 for SQL Server};SERVER=192.168.24.4;DATABASE=pkhData;UID=pkh;PWD=Ph0ngK3H0@ch"
)

engine=create_engine("mssql+pyodbc:///?odbc_connect=%s" %params, echo = True)
#Base.metadata.create_all(engine)

Session = scoped_session(sessionmaker(bind=engine, autoflush=True))

db=Session()
nam=2019
result = db.execute(
    "SELECT * FROM dbo.hoso WHERE hosoid is not null", {'param': 26})
if result:
    for row in result:
        for item in row:
            print(item)

db.close()
Session.remove()
