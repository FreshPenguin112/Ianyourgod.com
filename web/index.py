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

@app.route("/code")
def multi():
    return render_template("cod.html")

@app.route("/cclicker")
def cclicker():
    return render_template("cookieclicker.html")

if __name__ == "__main__":
    app.run(debug=True)
