from flask import Flask, request, jsonify

app = Flask(__name__)


def generate_commit_message(commit_type, description, files):
    """Generate a commit message based on the input parameters."""
    return f"[{commit_type.upper()}] {description} in {files}"


@app.route('/generate_commit', methods=['POST'])
def generate_commit():
    data = request.json
    commit_type = data.get('type')
    description = data.get('description')
    files = data.get('files')

    commit_message = generate_commit_message(commit_type, description, files)
    return jsonify({"commit_message": commit_message})


if __name__ == '__main__':
    app.run(debug=True)
