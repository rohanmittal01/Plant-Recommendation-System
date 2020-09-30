from flask import Flask, request, render_template
from flask_cors import CORS
# import sklearn.externals.joblib as extjoblib
import joblib
app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return 'The Flask API is working!'


@app.route('/predict')
def predict():
    model = joblib.load('plant_recommendation_model.ml')
    print(request.args['plant_type_Grass'])
    pred_plant = model.predict([[int(request.args['plant_type_Grass']),
                                 int(request.args['plant_type_Perennial']),
                                 int(request.args['plant_type_Shrub (deciduous)']),
                                 int(request.args['plant_type_Shrub (evergreen)']),
                                 int(request.args['plant_type_Succulent']),
                                 int(request.args['plant_type_Tree (deciduous)']),
                                 int(request.args['plant_type_Tree (evergreen)']),
                                 int(request.args['plant_type_Vine']),
                                 int(request.args['bloom_time_Fall;Winter']),
                                 int(request.args['bloom_time_Spring']),
                                 int(request.args['bloom_time_Spring;Fall']),
                                 int(request.args['bloom_time_Spring;Summer']),
                                 int(request.args['bloom_time_Spring;Summer;Fall']),
                                 int(request.args['bloom_time_Spring;Summer;Fall;Winter']),
                                 int(request.args['bloom_time_Spring;Summer;Winter']),
                                 int(request.args['bloom_time_Spring;Winter']),
                                 int(request.args['bloom_time_Summer']),
                                 int(request.args['bloom_time_Summer;Fall']),
                                 int(request.args['bloom_time_Summer;Fall;Winter']),
                                 int(request.args['bloom_time_Winter']),
                                 int(request.args['size_at_maturity_13-24 ft']),
                                 int(request.args['size_at_maturity_4-6 ft']),
                                 int(request.args['size_at_maturity_7-12 ft']),
                                 int(request.args['size_at_maturity_< 1 ft']),
                                 int(request.args['size_at_maturity_> 24 ft']),
                                 int(request.args['suitable_site_conditions_Part Shade;Shade']),
                                 int(request.args['suitable_site_conditions_Shade']),
                                 int(request.args['suitable_site_conditions_Sun']),
                                 int(request.args['suitable_site_conditions_Sun;Part Shade']),
                                 int(request.args['suitable_site_conditions_Sun;Part Shade;Shade']),
                                 int(request.args['suitable_site_conditions_Sun;Shade']),
                                 int(request.args['soil_type_Clay;Loam']),
                                 int(request.args['soil_type_Clay;Loam;Rock']),
                                 int(request.args['soil_type_Clay;Loam;Sand']),
                                 int(request.args['soil_type_Clay;Loam;Sand;Chalk']),
                                 int(request.args['soil_type_Clay;Loam;Sand;Rock']),
                                 int(request.args['soil_type_Clay;Rock']),
                                 int(request.args['soil_type_Clay;Sand']),
                                 int(request.args['soil_type_Loam']),
                                 int(request.args['soil_type_Rock']),
                                 int(request.args['soil_type_Sand']),
                                 int(request.args['soil_type_Sand;Loam']),
                                 int(request.args['soil_type_Sand;Loam;Chalk']),
                                 int(request.args['water_needs_Moderate']),
                                 int(request.args['water_needs_None']),
                                 int(request.args['appropriate_location_Garden']),
                                 int(request.args['appropriate_location_Garden;Roof']),
                                 int(request.args['appropriate_location_Garden;Sidewalk']),
                                 int(request.args['appropriate_location_Garden;Sidewalk;Roof']),
                                 int(request.args['appropriate_location_Sidewalk'])
                                 ]
                                ]
                               )
    return str(pred_plant[0])


if __name__ == "__main__":
    app.run(debug=True)
