pip install SQLAlchemy

#!/bin/bash

# Ejecutar el script de Python
python3 mi_script.py

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Crear una instancia de la clase declarativa base
Base = declarative_base()

# Definir el modelo de Usuario
class Usuario(Base):
    __tablename__ = 'usuarios'

    id = Column(Integer, primary_key=True)
    nombre = Column(String)
    email = Column(String)

# Configurar la conexión a la base de datos (SQLite en este caso)
engine = create_engine('sqlite:///usuarios.db', echo=True)  # echo=True para ver las consultas SQL generadas

# Crear todas las tablas definidas en el Base
Base.metadata.create_all(engine)

# Crear una sesión para interactuar con la base de datos
Session = sessionmaker(bind=engine)
session = Session()

