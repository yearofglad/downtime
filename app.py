import json
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/add_friend/<int:id>')
def add_friend(id):
    return f"Friend request sent to user {id}"

@app.route('/message/<int:id>')
def message(id):
    return f"Message sent to user {id}"

@app.route('/add_event/<int:event_id>', methods=['POST'])
def add_event(event_id):
    return f"Event {event_id} added successfully!"

@app.route('/profile')
def profile():
    user_id = 0
    with open('static/json/events.json', 'r') as file:
        events = json.load(file)
    return render_template('profile.html', user_id=user_id, events=events)

@app.route('/eventscreen')
def home():
    with open('static/json/events.json', 'r') as file:
        events = json.load(file)
    return render_template('eventscreen.html', event=events[0])

@app.route('/')
def home():
    user_id = 0
    with open('static/json/events.json', 'r') as file:
        events = json.load(file)
    return render_template('index.html', user_id=user_id, events=events)


if __name__ == "__main__":
    app.run(debug=True)
