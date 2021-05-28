from flask import Flask, session
from flask_restful import Api, Resource
from flask_cors import CORS
from attributes_classes.get import Get

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

api.add_resource(Get, "/get-all")

if __name__ == '__main__':
	app.run(debug=True)
