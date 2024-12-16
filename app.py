import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

draft_data = None
submitted_data = []

@app.route('/saveDraft', methods=['POST'])
def save_draft():
    global draft_data
    draft_data = request.json 
    print('Draft saved:', draft_data)
    return jsonify({"message": "Draft saved successfully", "data": draft_data})

@app.route('/submitEvent', methods=['POST'])
def submit_event():
    global submitted_data
    event = request.json  
    submitted_data.append(event)
    print('Event submitted:', event)
    return jsonify({"message": "Event submitted successfully", "data": event})

@app.route('/create_event')
def create_event():
    return render_template('create_event.html')


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
def eventscreen():
    with open('static/json/events.json', 'r') as file:
        events = json.load(file)
    return render_template('eventscreen.html', event=events[0])

@app.route('/')
def home():
    user_id = 0
    try:
        with open('static/json/events.json', 'r') as file:
            events = json.load(file)
        return render_template('index.html', user_id=user_id, events=events)
    except FileNotFoundError:
        return "No events found. Please ensure events.json exists in the static/json directory."

if __name__ == "__main__":
    app.run(debug=True)
