from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/')
@app.route('/about')
def index():
    return render_template('index.html')


with app.test_request_context():
    print(url_for('index'))


if __name__ == "__main__":
    app.run(debug=True)
