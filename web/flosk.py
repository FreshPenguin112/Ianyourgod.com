from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/paintings')
def paint():
    return render_template("paintings.html")

@app.route('/drawings')
def drawing():
    return render_template("drawings.html")

@app.route('/sculptures')
def sculpture():
    return render_template("sculptures.html")

if __name__ == "__main__":
    app.run(debug=True)