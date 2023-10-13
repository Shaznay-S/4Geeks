from flask import Flask, jsonify
import openai;
import os;
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

#openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/generate_excuse', methods=['GET'])
def generate_excuse():
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt="Generate an excuse for being late.",
        max_tokens=30,
        headers={"Authorization": f"Bearer {os.getenv('OPENAI_API_KEY')}"}
    )
    excuse = response.choices[0].text.strip()
    return jsonify({"excuse": excuse})

if __name__ == '__main__':
    app.run(debug=True)
