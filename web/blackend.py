from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route("/tictactoe")
def tictac():
    return render_template("tictactoe.html")

@app.route("/draw")
def canvas():
    return render_template("draw.html")

@app.route("/clicker")
def clicker():
    return render_template("clicker.html")

@app.route("/snake")
def multi():
    return render_template("snake.html")

if __name__ == "__main__":
    app.run(debug=True)