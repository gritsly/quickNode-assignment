from flask import Flask

api = Flask(__name__)

@api.route('/test')
def index():
    return "329d4feb-c5c0-4de5-b10c-701b44fbec4f"

if __name__ == '__main__':
    api.run(debug=True)