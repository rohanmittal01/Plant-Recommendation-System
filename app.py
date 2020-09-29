from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return '<h1>The Flask API is working!</h1>'

@app.route('/predict')
def predict():
    from sklearn.externals import joblib
    model = joblib.load('plant_recommendation_model.ml')
    pred_plant = model.predict([[(request.args['Bloom_Time']),
                            (request.args['Size_at_Maturity']),
                            (request.args['Suitable_Site_Conditions']),
                            (request.args['Soil_Type']),
                            (request.args['Water_Needs']),
                            (request.args['Appropriate_Location'])
                            ]])
    return str(round(pred_plant[0],2))


if __name__ == "__main__":
    app.run(debug = True)
