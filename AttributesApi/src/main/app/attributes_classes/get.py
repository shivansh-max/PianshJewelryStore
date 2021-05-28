from flask_restful import Api, Resource
import mysql.connector as mc

mydb = mc.connect(host="localhost", user="root", passwd="Qwaszx@123",database="piansh",auth_plugin='mysql_native_password')

m = mydb.cursor()

class Get(Resource):
	def get(self):
		m.execute("select * from piansh.attributes")
		attributes = m.fetchall()

		types = ['metal', 'stone', 'condition']

		return_json = {
			"metal": [],
			"stone": [],
			"condition": []
		}

		for att in attributes:
			if att[2] == 'metal':
				return_json["metal"].append(
					att[1]
				)
			elif att[2] == 'condition':
				return_json["condition"].append(
					att[1]
				)
			else:
				return_json["stone"].append(
					att[1]
				)
		return return_json
