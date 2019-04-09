import os
import sys
import datetime
from sqlalchemy import Table, MetaData, ForeignKey, Column, create_engine
from sqlalchemy import Integer, String, Unicode, DateTime, Date, Sequence
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

Base = declarative_base()

class User(Base):
    email = Column(String(250), primary_key=True)
    username = Column(Unicode(255), nullable=True)
    password_hash = Column(Unicode(128), nullable=False)
    password = Column(Unicode(255), nullable=False)
    ghichu = Column(Unicode(255), nullable=True)
    lastupdated = Column(DateTime(timezone=True), onupdate=func.now())

    def __repr__(self):
        return '<User {}>'.format(self.username)

class Hoso(Base):
    __tablename__ = 'hoso'
    # Here we define columns for the table person
    # Notice that each column is also a normal Python instance attribute.
    hosoid = Column(Integer, primary_key=True)
    sohoso = Column(String(250), nullable=True)
    khachhang = Column(Unicode(255), nullable=True)
    diachi = Column(Unicode(255), nullable=True)
    lienhe = Column(Unicode(255), nullable=True)
    dc1 = Column(Unicode(50), nullable=True)
    dc2 = Column(Unicode(50), nullable=True)
    maq = Column(Unicode(2), nullable=True)
    maqp = Column(Unicode(2), nullable=True)
    ghichu = Column(Unicode(255), nullable=True)
    lastupdated = Column(DateTime(timezone=True), onupdate=func.now())
    #timestamp = Column(DateTime(timezone=True), onupdate=datetime.datetime.utcnow())

class Address(Base):
    __tablename__ = 'address'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    street_name = Column(String(250))
    street_number = Column(String(250))
    post_code = Column(String(250), nullable=False)
    person_id = Column(Integer, ForeignKey('person.id'))
    person = relationship(Person)

# Create an engine that stores data in the local directory's
# sqlalchemy_example.db file.
engine = create_engine('sqlite:///sqlalchemy_example.db')

# Create all tables in the engine. This is equivalent to "Create Table"
# statements in raw SQL.
Base.metadata.create_all(engine)
