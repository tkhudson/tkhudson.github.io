---
title: "New direction for Flask Web App"
layout: post
date: 2024-05-01 01:57
image: /assets/images/WebsiteImages.jpg
headerImage: false
projects: true
hidden: false
tag:
- project
- docker
- kubernetes
- flask
- devops
- ci/cd
- jenkins
- terraform
- git
- azure
category: blog
author: Tyler
description: "Changing the path for the web app."
---

# Shift
Going to change the path and make a true web app. Before, I was making a basic static website where as now, I am aimed to make a simple rock, paper, scissors game vs a computer.

# First version of backend 
```python
from flask import Flask, jsonify, request
import random

app = Flask(__name__)

@app.route('/play', methods=['POST'])
def play():
    moves = ['rock', 'paper', 'scissors']
    user_move = request.json.get('move')
    if user_move not in moves:
        return jsonify({'error': 'Invalid move'}), 400

    computer_move = random.choice(moves)
    
    if user_move == computer_move:
        result = 'draw'
    elif (user_move == 'rock' and computer_move == 'scissors') or \
         (user_move == 'paper' and computer_move == 'rock') or \
         (user_move == 'scissors' and computer_move == 'paper'):
        result = 'win'
    else:
        result = 'lose'

    return jsonify({'user_move': user_move, 'computer_move': computer_move, 'result': result})

if __name__ == '__main__':
    app.run(debug=True)
```

# Steps to test backend
Run the app with
```bash
python3 app.py
```

Test with cURL
```bash
curl -X POST -H "Content-Type: application/json" -d '{"move": "rock"}' http://localhost:5000/play
```

# Future
Going to add some more steps later as well.

## Signing Off

Thank you all.

Best regards,
Tyler

---

Connect with me on YouTube or just consider subscribing! Follow my Persevus channel for more game dev updates as well! Thanks!

**Check out my YouTube!**

<iframe width="560" height="315" src="https://www.youtube.com/embed/7YgKf2pmhBg?si=WfTz9vjn7LbSIqDf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/RELH4x4U0I8?si=Tivd8tWsXt22hPzn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="747" height="420" src="https://www.youtube.com/embed/VRXHawfSMuM" title="The Shared Responsibility Model Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[1]: https://daringfireball.net/projects/markdown/
[2]: https://www.fileformat.info/info/unicode/char/2163/index.htm
[3]: https://www.markitdown.net/
[4]: https://daringfireball.net/projects/markdown/basics
[5]: https://daringfireball.net/projects/markdown/syntax
[6]: https://kune.fr/wp-content/uploads/2013/10/ghost-blog.jpg
