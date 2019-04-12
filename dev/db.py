import os
import sys
import datetime
from sqlalchemy import Table, MetaData, ForeignKey, Column, create_engine
from sqlalchemy import Integer, DECIMAL, String, Unicode, DateTime, Date, Sequence, Boolean
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker, relationship

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    email = Column(String(250), primary_key=True)
    username = Column(Unicode(255), nullable=True)
    password_hash = Column(Unicode(128), nullable=False)
    apikey = Column(Unicode(128), nullable=True)
    password = Column(Unicode(255), nullable=False)
    ghichu = Column(Unicode(255), nullable=True)
    ngaytao = Column(DateTime(timezone=True), onupdate=func.now())
    lastupdated = Column(DateTime(timezone=True), onupdate=func.now())

    def __repr__(self):
        return '<User {}>'.format(self.username)

class Hoso(Base):
    __tablename__ = 'hoso'
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
    qt_hoso = relationship("Qt", back_populates="hoso_qt")
    lastupdated = Column(DateTime(timezone=True), onupdate=func.now())
    #timestamp = Column(DateTime(timezone=True), onupdate=datetime.datetime.utcnow())


class Dot(Base):
    __tablename__ = 'dot'
    madot = Column(Unicode(50), primary_key=True)
    hop = Column(Unicode(50), nullable=True)
    nam = Column(Integer, defaul=0, nullable=True)
    quy = Column(Unicode(50), nullable=True)
    plqt = Column(Unicode(50), nullable=True)
    tt = Column(Integer, default=0, nullable=True)
    sodot = Column(Unicode(50), nullable=True)
    ngaylendot = Column(Date, nullable=True)
    khuvuc = Column(Unicode(255), nullable=True)
    ngaydshc = Column(Date, nullable=True)
    ngaythicong = Column(Unicode(255), nullable=True)
    tonghs = Column(Integer, default=0, nullable=True)
    qt_tong = Column(Integer, default=0, nullable=True)
    qt_ok = Column(Integer, default=0, nullable=True)
    qt_tn = Column(Integer, default=0, nullable=True)
    qt_thieu = Column(Integer, default=0, nullable=True)
    trigiaqt = Column(DECIMAL(19,5), default=0, nullable=True)
    dautucty = Column(DECIMAL(19, 5), default=0, nullable=True)
    dautukhach = Column(DECIMAL(19, 5), default=0, nullable=True)
    trigianc = Column(DECIMAL(19, 5), default=0, nullable=True)
    trigiavl = Column(DECIMAL(19, 5), default=0, nullable=True)
    nhathauid = Column(Integer, default=0, nullable=True)
    ngaylap = Column(Date, nullable=True)
    nguoilap = Column(Unicode(50), nullable=True)
    ghichu = Column(Unicode(255), nullable=True)
    inok = Column(Boolean, default=False, nullable=False)
    tinhtrang = Column(Unicode(255), nullable=True)
    qtt_tong = Column(Integer, default=0, nullable=True)
    qtt_ok = Column(Integer, default=0, nullable=True)
    qtt_thieu = Column(Integer, default=0, nullable=True)
    congqtt = Column(Integer, default=0, nullable=True)
    vatqtt = Column(Integer, default=0, nullable=True)
    trigiaqtt = Column(DECIMAL(19, 5), default=0, nullable=True)
    ghichuqtt = Column(Unicode(255), nullable=True)
    tinhtrangqtt = Column(Unicode(255), nullable=True)
    sophieunhap = Column(Unicode(255), nullable=True)
    sophieuxuat = Column(Unicode(255), nullable=True)
    ghichuqtvt = Column(Unicode(255), nullable=True)
    tinhtrangqtvt = Column(Unicode(255), nullable=True)
    qt_dot = relationship("Qt", back_populates="dot_qt")
    lastupdated = Column(DateTime(timezone=True), onupdate=func.now())


class Qt(Base):
    __tablename__ = 'qt'
    maqt = Column(Unicode(50), primary_key=True)
    madot = Column(Unicode(50), ForeignKey('dot.madot'))
    mahoso = Column(Unicode(50), ForeignKey('hoso.mahoso'))

    dot_qt = relationship("Dot", back_populates="qt_dot")
    hoso_qt = relationship("Hoso", back_populates="qt_hoso")
    lastupdated = Column(DateTime(timezone=True), onupdate=func.now())






# Create an engine that stores data in the local directory's
# sqlalchemy_example.db file.
#engine = create_engine('sqlite:///sqlalchemy_example.db')
#SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
engine = create_engine(SQLALCHEMY_DATABASE_URI, echo=True)
Base.metadata.create_all(engine)

Session = scoped_session(sessionmaker(bind=engine, autoflush=True))
