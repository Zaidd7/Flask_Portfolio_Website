from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    projects = [
        {
            "title": "AI Task Manager",
            "description": "Smart to-do list with ML-based task prioritization.",
            "image": "/static/images/ai-task-manager.jpg",
            "tags": ["React", "Python", "TensorFlow", "Flask"],
            "github": "https://github.com/yourusername/ai-task-manager",
            "demo": "https://ai-task-manager-demo.com"
        },
        # ... other projects ...
    ]
    return render_template('projects.html', projects=projects)

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        
        # Here you would typically process the form data,
        # such as sending an email or storing in a database
        
        # For now, we'll just redirect to the thank you page
        return redirect(url_for('thank_you'))
    
    return render_template('contact.html')

@app.route('/thank-you')
def thank_you():
    return render_template('thank_you.html')

if __name__ == '__main__':
    app.run(debug=True)
